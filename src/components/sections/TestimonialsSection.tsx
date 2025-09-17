import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Quote, Send, X, Pencil } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      rotateY: direction > 0 ? -180 : 180,
      scale: 0.8,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      rotateY: direction < 0 ? 180 : -180,
      scale: 0.8,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const TestimonialsSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/data/testimonials.json");
        const data = await response.json();
        const savedTestimonials = window.localStorage.getItem("testimonials");
        if (savedTestimonials) {
          setTestimonials(JSON.parse(savedTestimonials));
        } else {
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      try {
        window.localStorage.setItem("testimonials", JSON.stringify(testimonials));
      } catch (error) {
        console.error("Error writing to localStorage", error);
      }
    }
  }, [testimonials]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    content: "",
    rating: 0,
    position: "",
    companyName: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [testimonialToEdit, setTestimonialToEdit] = useState<any>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewTestimonial((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setNewTestimonial((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      newTestimonial.name &&
      newTestimonial.content &&
      newTestimonial.rating > 0
    ) {
      setTestimonials((prev: any) => [
        {
          ...newTestimonial,
          rating: newTestimonial.rating,
          isUserSubmitted: true, // Ensure this is always true for new submissions
        },
        ...prev,
      ]);
      setSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitted(false);
        setNewTestimonial({
          name: "",
          content: "",
          rating: 0,
          position: "",
          companyName: "",
        });
      }, 2000);
    }
  };

  const handleDelete = (indexToDelete: number) => {
    const newTestimonials = testimonials.filter(
      (_, index) => index !== indexToDelete
    );
    setTestimonials(newTestimonials);

    setPage(([currentPage, direction]) => {
      if (newTestimonials.length === 0) {
        return [0, 0];
      }

      let newPage = currentPage;
      if (currentPage > indexToDelete) {
        newPage = currentPage - 1;
      }

      if (newPage >= newTestimonials.length) {
        newPage = newTestimonials.length - 1;
      }

      return [Math.max(0, newPage), direction];
    });
  };

  const handleEditClick = (testimonial: any, index: number) => {
    setTestimonialToEdit({ ...testimonial });
    setEditingIndex(index);
    setIsEditModalOpen(true);
  };

  const handleEditInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTestimonialToEdit((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleEditRatingChange = (rating: number) => {
    setTestimonialToEdit((prev: any) => ({ ...prev, rating }));
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingIndex !== null && testimonialToEdit) {
      const updatedTestimonials = [...testimonials];
      updatedTestimonials[editingIndex] = testimonialToEdit;
      setTestimonials(updatedTestimonials);
      setIsEditModalOpen(false);
      setTestimonialToEdit(null);
      setEditingIndex(null);
    }
  };

  const paginate = (newDirection: number) => {
    let newIndex = page + newDirection;
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    } else if (newIndex >= testimonials.length) {
      newIndex = 0;
    }
    setPage([newIndex, newDirection]);
  };

  const activeTestimonial = testimonials.length > 0 ? testimonials[page] : null;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our services.
          </p>
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button>Write a Review</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Share Your Experience</DialogTitle>
              </DialogHeader>
              {submitted ? (
                <div className="text-center py-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Thank You!
                  </h3>
                  <p>Your review has been submitted successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={newTestimonial.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="companyName"
                    placeholder="Company Name (Optional)"
                    value={newTestimonial.companyName}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="position"
                    placeholder="Your Position (Optional)"
                    value={newTestimonial.position}
                    onChange={handleInputChange}
                  />
                  <Textarea
                    name="content"
                    placeholder="Your review..."
                    value={newTestimonial.content}
                    onChange={handleInputChange}
                    required
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Your Rating:</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 cursor-pointer ${
                            i < newTestimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                          onClick={() => handleRatingChange(i + 1)}
                        />
                      ))}
                    </div>
                  </div>
                  <Button type="submit" className="mt-4">
                    Submit Review <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {isMobile ? (
          testimonials.length > 0 && activeTestimonial ? (
            <div
              style={{ perspective: "1000px" }}
              className="relative h-[450px] flex items-center justify-center overflow-hidden"
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    rotateY: { type: "spring", stiffness: 100, damping: 20 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute w-full max-w-sm"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="relative overflow-hidden border-0 bg-background/80 backdrop-blur-sm shadow-2xl h-[400px] flex flex-col justify-center">
                    <div className="absolute top-2 right-2 z-20 flex items-center space-x-1">
                      {activeTestimonial.isUserSubmitted && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleEditClick(activeTestimonial, page)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      )}
                      {activeTestimonial.isUserSubmitted && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleDelete(page)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <CardContent className="p-8">
                      <div className="absolute top-4 right-4 text-primary/20">
                        <Quote className="h-12 w-12" />
                      </div>
                      <div className="flex items-center mb-4">
                        {[...Array(activeTestimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        "{activeTestimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-primary font-semibold text-lg">
                            {activeTestimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold">
                            {activeTestimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {activeTestimonial.position}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-16 h-[450px] flex items-center justify-center">
              <p className="text-muted-foreground">
                No testimonials yet. Be the first to write one!
              </p>
            </div>
          )
        ) : testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.03 }}
                className="h-full group"
              >
                <Card className="relative overflow-hidden border-0 bg-background/80 backdrop-blur-sm shadow-lg h-full transition-shadow duration-300 hover:shadow-2xl">
                  <div className="absolute top-2 right-2 z-20 flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {testimonial.isUserSubmitted && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleEditClick(testimonial, index)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    )}
                    {testimonial.isUserSubmitted && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleDelete(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center h-full">
                    <div className="absolute top-4 right-4 text-primary/20">
                      <Quote className="h-12 w-12" />
                    </div>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary font-semibold text-lg">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              No testimonials yet. Be the first to write one!
            </p>
          </div>
        )}

        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Your Review</DialogTitle>
            </DialogHeader>
            {testimonialToEdit && (
              <form onSubmit={handleEditSubmit} className="grid gap-4 py-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={testimonialToEdit.name}
                  onChange={handleEditInputChange}
                  required
                />
                <Input
                  name="companyName"
                  placeholder="Company Name (Optional)"
                  value={testimonialToEdit.companyName}
                  onChange={handleEditInputChange}
                />
                <Input
                  name="position"
                  placeholder="Your Position (Optional)"
                  value={testimonialToEdit.position}
                  onChange={handleEditInputChange}
                />
                <Textarea
                  name="content"
                  placeholder="Your review..."
                  value={testimonialToEdit.content}
                  onChange={handleEditInputChange}
                  required
                />
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Your Rating:</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 cursor-pointer ${
                          i < testimonialToEdit.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                        onClick={() => handleEditRatingChange(i + 1)}
                      />
                    ))}
                  </div>
                </div>
                <Button type="submit" className="mt-4">
                  Update Review
                </Button>
              </form>
            )}
          </DialogContent>
        </Dialog>

        {/* Client Logos */}
        <div className="text-center mt-16">
          <h3 className="text-lg font-semibold mb-8 text-muted-foreground">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {[
              "TechStart",
              "InnovCorp",
              "CloudFlow",
              "DataSync",
              "WebPro",
              "AppLaunch",
            ].map((company, index) => (
              <div key={index} className="text-center">
                <div className="h-12 bg-muted rounded flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;