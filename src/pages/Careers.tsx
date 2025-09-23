import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Zap,
  Shield,
  Upload,
  CheckCircle,
} from "lucide-react";
import emailjs from 'emailjs-com'
import { useState } from "react";
import { toast } from "sonner";
const Careers = () => {
  const jobs = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      description:
        "Lead development of scalable web applications using React, Node.js, and cloud technologies.",
      requirements: [
        "1+ years of full-stack development experience",
        "Expert knowledge of React, Node.js, TypeScript",
        "Experience with AWS/Azure cloud platforms",
        "Strong understanding of microservices architecture",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      description:
        "Design and maintain CI/CD pipelines, manage cloud infrastructure, and ensure system reliability.",
      requirements: [
        "1+ years of DevOps/SRE experience",
        "Proficiency with Docker, Kubernetes, Terraform",
        "Experience with AWS/GCP/Azure",
        "Knowledge of monitoring and logging tools",
      ],
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Ahmedabad, Gujarat",
      type: "Full-time, Remote, Part-time",
      description:
        "Create intuitive and beautiful user experiences for web and mobile applications.",
      requirements: [
        "1+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio demonstrating design thinking",
        "Experience with user research and testing",
      ],
    },
    {
      title: "Junior Developer",
      department: "Engineering",
      location: "Ahmedabad, Gujarat",
      type: "Full-time, Remote, Part-time",
      description:
        "Join our development team and grow your skills in modern web technologies.",
      requirements: [
        "1-2 years of programming experience",
        "Knowledge of JavaScript, HTML, CSS",
        "Familiarity with React or similar frameworks",
        "Strong problem-solving skills",
      ],
    },
    {
      title: "Flutter Developer",
      department: "Mobile Development",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      description:
        "Design and develop high-quality cross-platform mobile applications using Flutter, Dart, and modern mobile development practices.",
      requirements: [
        "1+ years of experience in mobile app development with Flutter and Dart",
        "Experience integrating RESTful APIs and third-party libraries",
        "Familiarity with state management tools like Provider, Riverpod, or Bloc",
        "Knowledge of Firebase services (Auth, Firestore, Push Notifications)",
        "Experience with version control (Git/GitHub)",
        "Strong problem-solving and debugging skills",
      ],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, dental, vision, and wellness programs.",
    },
    {
      icon: Zap,
      title: "Growth & Learning",
      description:
        "$2,000 annual learning budget for courses, conferences, and certifications.",
    },
    {
      icon: Users,
      title: "Remote Flexible",
      description:
        "Work from anywhere with flexible hours and home office stipend.",
    },
    {
      icon: Shield,
      title: "Financial Security",
      description:
        "401k with company matching, stock options, and competitive salaries.",
    },
  ];

  const culture = [
    "Innovation-driven environment where creativity thrives",
    "Collaborative team culture with open communication",
    "Work-life balance with flexible schedules",
    "Diversity and inclusion as core values",
    "Continuous learning and professional development",
    "Regular team building and social events",
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

const uploadToCloudinary = async (file: File): Promise<string> => {
  const cloudName = "dwioktmgr";
  const uploadPreset = "resume";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    console.log("Uploading to Cloudinary...", {
      cloudName,
      uploadPreset,
      fileName: file.name,
      fileSize: file.size,
    });

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload?resource_type=raw`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    console.log("Cloudinary response:", data);

    if (!response.ok) {
      throw new Error(
        `Upload failed: ${data.error?.message || "Unknown error"}`
      );
    } 

    // ✅ Add flags parameter to force download
    // The 'fl_attachment' flag forces download instead of preview
    const downloadUrl = data.secure_url.replace('/upload/', '/upload/fl_attachment/');
    
    return downloadUrl;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
};



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      let resumeUrl = '';
      
      if (resume) {
        console.log('Uploading resume to Cloudinary...');
        resumeUrl = await uploadToCloudinary(resume);
        console.log('Resume uploaded successfully:', resumeUrl);
      }

      const templateParams = {
        ...formData,
        resume_url: resumeUrl,
        resume_filename: resume?.name || '',
        has_resume: resume ? 'Yes' : 'No',
      };

      console.log('Sending email...');
      const response = await emailjs.send(
        'service_r4gp5ie',
        'template_f6eelja',
        templateParams,
        '9Skjvs8fXr6vNJqTW'
      );

      console.log('Email sent successfully!', response.status, response.text);
      toast.success("✅ Thanks for reaching out! We'll get back to you shortly.")
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        coverLetter: "",
      });
      setResume(null);
      
    } catch (error) {
      console.error('Error:', error);
      alert(`Something went wrong: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Only PDF, DOC, and DOCX files are allowed');
        return;
      }
      
      setResume(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Join Our Team
              </motion.h1>
            </h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build the future of technology with a passionate team of
              innovators, creators, and problem-solvers.
            </motion.p>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Work With Us?</h2>
              <p className="text-xl text-muted-foreground">
                We're more than just a company - we're a community of passionate
                individuals working together to create innovative solutions that
                make a difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-0 bg-muted/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Our Culture
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {culture.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover exciting opportunities to grow your career and make an
                impact with cutting-edge technology projects.
              </p>
            </div>

            <div className="space-y-6">
              {jobs.map((job, index) => (
                <Card
                  key={index}
                  className="border-0 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <h3 className="text-2xl font-bold">{job.title}</h3>
                          <Badge variant="secondary">{job.department}</Badge>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {job.type}
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">
                          {job.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">
                              Requirements:
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, reqIndex) => (
                                <li
                                  key={reqIndex}
                                  className="text-sm text-muted-foreground flex items-start"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col justify-center">
                        <Button 
                          size="lg" 
                          className="w-full"
                          onClick={() => {
                            document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="application-form" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">Apply Today</CardTitle>
                  <CardDescription className="text-lg">
                    Don't see the perfect role? Send us your resume and we'll
                    keep you in mind for future opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          First Name
                        </label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Last Name
                        </label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your Email"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your Number"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Position of Interest
                      </label>
                      <Input
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Senior Full Stack Developer"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Cover Letter
                      </label>
                      <Textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        placeholder="Tell us why you'd be a great fit..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Resume
                      </label>
<div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors relative">
  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
  <p className="text-sm text-muted-foreground">
    {resume ? resume.name : "Drop your resume here or click to browse"}
  </p>
  <input 
    type="file" 
    accept=".pdf,.doc,.docx" 
    onChange={handleFileChange}
    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
  />
  <p className="text-xs text-muted-foreground mt-1">
    PDF, DOC, or DOCX (max 5MB)
  </p>
</div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;