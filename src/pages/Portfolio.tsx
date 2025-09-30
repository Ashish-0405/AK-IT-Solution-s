import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  Award,
  Cloud,
  Megaphone,
  ShieldCheck,
  Building,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GetQuote from "./GetQuote";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    "title": "CRM Dashboard",
    "category": "Customize Software",
    "overview":
      "A comprehensive CRM dashboard providing a 360-degree view of customer interactions, sales pipelines, and marketing performance.",
    "technologies": ["React", "Node.js", "MongoDB", "GraphQL"],
    "image": "/portfolio-image/E-commerce-Wesite.png",
    "client": "Mahindra Sales Pvt Ltd",
    "testimonial": {
      "text": "The new CRM dashboard has revolutionized our sales process, increasing conversion rates by 40%.",
      "author": "Ravi Sharma, Head of Sales",
    },
    "icon": "Briefcase",
  },
  {
    "title": "ERP System",
    "category": "Software",
    "overview":
      "An integrated ERP system to streamline complex business processes, including finance, HR, and supply chain management.",
    "technologies": ["Angular", "Java", "PostgreSQL", "AWS"],
    "image": "/portfolio-image/Erp-software.jpeg",
    "client": "Shree Logistics Ltd",
    "testimonial": {
      "text": "A world-class ERP system that transformed our business, reducing operational costs by 30%.",
      "author": "Meera Patel, COO",
    },
    "icon": "Building",
  },
  {
    "title": "E-Commerce Platform",
    "category": "Web Development",
    "overview":
      "A high-performance, scalable e-commerce platform with advanced inventory management and a personalized recommendation engine.",
    "technologies": ["React", "Node.js", "PostgreSQL", "Redis"],
    "image": "/portfolio-image/e-commerce-landing-page.jpeg",
    "client": "Vastra Retail Pvt Ltd",
    "testimonial": {
      "text": "Our online sales have skyrocketed since the launch. The team at AK IT Solutions is professional and dedicated.",
      "author": "Priya Desai, CEO",
    },
    "icon": "TrendingUp",
  },
  {
    "title": "Healthcare Mobile App",
    "category": "Mobile App",
    "overview":
      "An HIPAA-compliant telemedicine app connecting patients with healthcare providers for secure remote consultations.",
    "technologies": ["React Native", "Firebase", "WebRTC"],
    "image": "/portfolio-image/Mobile-App.png",
    "client": "Medilink Solutions",
    "testimonial": {
      "text": "The telemedicine app has been a game-changer for our practice. Secure, reliable, and our patients love it.",
      "author": "Dr. Suresh Nair",
    },
    "icon": "Award",
  },
  {
    "title": "Cloud Migration",
    "category": "Cloud Solutions",
    "overview":
      "A seamless cloud migration for a large enterprise, moving their on-premise infrastructure to a hybrid cloud environment.",
    "technologies": ["AWS", "Azure", "Terraform", "Kubernetes"],
    "image": "/portfolio-image/cloud-img.png",
    "client": "Bharat Enterprises",
    "testimonial": {
      "text": "A smooth transition with zero downtime. Our infrastructure is now more robust and cost-effective.",
      "author": "Ankit Mehta, CTO",
    },
    "icon": "Cloud",
  },
  {
    "title": "Digital Marketing Campaign",
    "category": "Digital Marketing",
    "overview":
      "A multi-channel digital marketing campaign that resulted in a 300% increase in brand awareness and a 150% rise in lead generation.",
    "technologies": ["Google Analytics", "SEMrush", "HubSpot"],
    "image": "/portfolio-image/Digital-Market.jpg",
    "client": "Innovision India",
    "testimonial": {
      "text": "The results were phenomenal, helping us achieve our business objectives faster than we thought possible.",
      "author": "Neha Gupta, Marketing Director",
    },
    "icon": "Megaphone",
  },
  {
    "title": "Managed IT Services",
    "category": "IT Support",
    "overview":
      "Comprehensive managed IT services for a financial services firm, ensuring systems are secure, reliable, and compliant.",
    "technologies": ["Zendesk", "Jira", "Active Directory"],
    "image": "/portfolio-image/It-support.jpeg",
    "client": "Sampatti Finance Ltd",
    "testimonial": {
      "text": "An invaluable partner. Their IT support is top-notch, and their team is always responsive and knowledgeable.",
      "author": "Karan Singh, Managing Partner",
    },
    "icon": "ShieldCheck",
  }
]

const categories = [
  "All",
  "Customize Software",
  "Web Development",
  "Mobile App",
  "Cloud Solutions",
  "Digital Marketing",
  "IT Support",
];

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="relative rounded-lg overflow-hidden cursor-pointer group"
    onClick={() => onClick(project)}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
    <div className="absolute bottom-0 left-0 p-6 text-white">
      <h3 className="text-2xl font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
        {project.title}
      </h3>
      <Badge
        variant="secondary"
        className="opacity-100 group-hover:opacity-0 transition-opacity duration-300"
      >
        {project.category}
      </Badge>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-card text-foreground rounded-xl w-full max-w-4xl h-auto max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100vh", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center overflow-y-auto">
        <Badge variant="secondary" className="mb-4 self-start">
          {project.category}
        </Badge>
        <h2 className="text-4xl font-bold text-primary mb-4">
          {project.title}
        </h2>
        <p className="text-muted-foreground mb-6 text-lg">{project.overview}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
          "{project.testimonial.text}"
          <footer className="mt-2 not-italic font-semibold text-foreground">
            - {project.testimonial.author}
          </footer>
        </blockquote>
      </div>
    </motion.div>
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-4 right-4 text-white"
      onClick={onClose}
    >
      <X className="w-8 h-8" />
    </Button>
  </motion.div>
);

const NewPortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isSending, setIsSending] = useState(false);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-background text-foreground">
      <Header />

      <section className="py-20 text-center bg-gradient-to-r from-primary to-primary-glow mb-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Works
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
         Explore our successful projects and see how we've helped businesses achieve their digital transformation goals.
        </motion.p>
      </section>

      <div className="container mx-auto px-4">
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <section className="py-20 mt-20 text-center bg-card">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's Create Together
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Have a project in mind? We'd love to hear about it.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" variant="quote">
              Get in Touch
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-2 text-center underline">
                Get a Quote
              </DialogTitle>
              <DialogDescription className="text-center text-l">
                Fill out the form below and we'll get back to you with a quote
                as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <GetQuote />
          </DialogContent>
        </Dialog>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default NewPortfolio;
