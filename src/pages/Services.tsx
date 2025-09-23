import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Smartphone,
  Cloud,
  HeadphonesIcon,
  CheckCircle,
  ArrowRight,
  Database,
  Layers,
  Cog,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Performance Focused",
        "Secure & Scalable",
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
      pricing: "Contact for Quote",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: [
        "Native iOS/Android",
        "Cross-Platform",
        "UI/UX Design",
        "App Store Optimization",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      pricing: "Contact for Quote",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud infrastructure and migration services",
      features: [
        "AWS/Azure/GCP",
        "Migration Services",
        "DevOps Automation",
        "Cost Optimization",
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      pricing: "Contact for Quote",
    },
    {
      icon: Database,
      title: "CRM Management Software",
      description:
        "Customer Relationship Management solutions to streamline sales, marketing, and support",
      features: [
        "Lead Management",
        "Sales Automation",
        "Customer Analytics",
        "Integration with Email & ERP",
      ],
      technologies: [
        "Salesforce API",
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
      ],
      pricing: "Contact for Quote",
    },
    {
      icon: Layers,
      title: "ERP Software",
      description:
        "Integrate and manage core business processes with a custom ERP solution.",
      features: [
        "Supply Chain Management",
        "Financial Management",
        "Human Resources",
        "Manufacturing",
      ],
      technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Custom"],
      pricing: "Contact for Quote",
    },
    {
      icon: Cog,
      title: "Customize CRM Management",
      description:
        "Tailor your CRM to your exact business needs for maximum efficiency.",
      features: [
        "Custom Modules",
        "Automated Workflows",
        "3rd-Party Integrations",
        "Advanced Reporting",
      ],
      technologies: ["Salesforce", "Zoho CRM", "HubSpot", "Custom APIs"],
      pricing: "Contact for Quote",
    },
    {
      icon: HeadphonesIcon,
      title: "IT Support",
      description: "24/7 technical support and system maintenance",
      features: [
        "24/7 Support",
        "System Monitoring",
        "Preventive Maintenance",
        "Emergency Response",
      ],
      technologies: [
        "Monitoring Tools",
        "Ticketing Systems",
        "Remote Access",
        "Security Tools",
      ],
      pricing: "Free Technical Support",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description:
        "We analyze your business needs and technical requirements to create a tailored solution.",
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description:
        "Our team develops a comprehensive project plan with timelines, milestones, and deliverables.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We build your solution using agile methodologies with regular testing and quality assurance.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "We deploy your solution and provide ongoing support to ensure optimal performance.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services{" "}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive IT solutions designed to accelerate your business
              growth and digital transformation journey.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            {service.title}
                          </CardTitle>
                          <div className="text-primary font-semibold">
                            {service.pricing}
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center"
                            >
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Link to="/contact">
                        <Button className="w-full group/btn mt-4">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a proven methodology to ensure your project is
                delivered on time, within budget, and exceeds your expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <Card
                  key={index}
                  className="text-center border-0 bg-background/80 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-primary mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution that
              drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-primary hover:bg-white hover:text-primary"
                onClick={() => {
                  window.open(
                    "https://calendly.com/ak-nagar-0405/30min",
                    "_blank"
                  );
                }}
              >
                Schedule Consultation
              </Button>
              <Link to="/portfolio">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-primary hover:bg-white hover:text-primary"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
