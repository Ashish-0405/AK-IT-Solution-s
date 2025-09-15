import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Mehta",
    content:
      "AK IT Solution's built our e-commerce website with a modern and responsive design. The team delivered exactly what we envisioned.",
    rating: 5,
    position: "Founder",
    companyName: "Delhi Fashions",
  },
  {
    name: "Priya Nair",
    content:
      "They developed our Android app seamlessly with great performance. The support after delivery is also excellent.",
    rating: 4,
    position: "Product Manager",
    companyName: "GoRide Cabs",
  },
  {
    name: "Arjun Reddy",
    content:
      "Migrating our data to the cloud was smooth and hassle-free. Their expertise saved us a lot of time and cost.",
    rating: 3,
    position: "CTO",
    companyName: "Bangalore Tech Hub",
  },
  {
    name: "Sneha Kapoor",
    content:
      "We had constant security breaches before, but after their cybersecurity services, our systems are fully protected.",
    rating: 4,
    position: "IT Head",
    companyName: "Mumbai Finance Corp",
  },
  {
    name: "Vikram Joshi",
    content:
      "Their SEO and social media strategies helped our startup grow from scratch to thousands of leads in just months.",
    rating: 4,
    position: "CEO",
    companyName: "Hyderabad Startups",
  },
  {
    name: "Ananya Sharma",
    content:
      "AK IT Solution's custom ERP software streamlined our operations and increased productivity by 40%.",
    rating: 4,
    position: "Operations Manager",
    companyName: "Kolkata Manufacturing Ltd",
  },
  {
    name: "Rohan Deshmukh",
    content:
      "The app interface they designed is clean, user-friendly, and perfectly aligned with our brand.",
    rating: 5,
    position: "Design Lead",
    companyName: "Pune EdTech Labs",
  },
  {
    name: "Neha Iyer",
    content:
      "Their consulting team guided us in implementing the right tech stack for scaling our business smoothly.",
    rating: 4,
    position: "Managing Director",
    companyName: "Ahmedabad Traders",
  },
  {
    name: "Siddharth Malhotra",
    content:
      "The analytics dashboards gave us real-time insights into sales and customer behavior, which boosted our revenue.",
    rating: 5,
    position: "Business Analyst",
    companyName: "Chennai Retail Pvt Ltd",
  },
  {
    name: "Kavya Menon",
    content:
      "24/7 support from their team ensured zero downtime for our critical operations. Truly reliable!",
    rating: 5,
    position: "System Administrator",
    companyName: "Jaipur Logistics",
  },
];

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

  const paginate = (newDirection: number) => {
    let newIndex = page + newDirection;
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    } else if (newIndex >= testimonials.length) {
      newIndex = 0;
    }
    setPage([newIndex, newDirection]);
  };

  const testimonial = testimonials[page];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about our services.
          </p>
        </div>

        {isMobile ? (
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
                  <CardContent className="p-8">
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
            </AnimatePresence>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.03 }}
                className="h-full"
              >
                <Card className="relative overflow-hidden border-0 bg-background/80 backdrop-blur-sm shadow-lg h-full transition-shadow duration-300 hover:shadow-2xl">
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
        )}

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