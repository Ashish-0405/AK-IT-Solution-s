import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Smartphone,
  Cloud,
  HeadphonesIcon,
  DatabaseIcon,
  LayersIcon,
  CodeIcon,
  ShieldCheckIcon,
  GlobeIcon,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";

const services = [
    {
        icon: Code,
        title: "Web Development",
        description: "Custom web applications built with modern technologies like React, Node.js, and cloud-native architecture.",
        features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Secure & Scalable"],
      },
      {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
        features: ["Native iOS/Android", "Cross-Platform", "UI/UX Design", "App Store Optimization"],
      },
      {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Comprehensive cloud infrastructure, migration services, and DevOps solutions for scalable business growth.",
        features: ["AWS/Azure/GCP", "Migration Services", "DevOps Automation", "Cost Optimization"],
      },
      {
        icon: HeadphonesIcon,
        title: "IT Support",
        description: "24/7 technical support, system maintenance, and proactive monitoring to keep your business running smoothly.",
        features: ["24/7 Support", "System Monitoring", "Preventive Maintenance", "Emergency Response"],
      },
      {
        icon: DatabaseIcon,
        title: "CRM Management",
        description: "Streamlined customer relationship management with advanced tools to track leads, manage clients, and improve sales efficiency.",
        features: ["Lead Tracking", "Client Management", "Sales Pipeline", "Performance Analytics"],
      },
      {
        icon: LayersIcon,
        title: "ERP Software",
        description: "Comprehensive enterprise resource planning to integrate finance, HR, inventory, and business workflows in a centralized system.",
        features: ["Finance Management", "HR & Payroll", "Inventory Control", "Workflow Automation"],
      },
      {
        icon: CodeIcon,
        title: "Custom Software Development",
        description: "Tailor-made software solutions built to fit your unique business requirements, from web platforms to mobile apps.",
        features: ["Web Development", "Mobile Apps", "API Integration", "Custom Dashboards"],
      },
      {
        icon: ShieldCheckIcon,
        title: "Cybersecurity Services",
        description: "Advanced security solutions to protect your business data, networks, and digital assets against evolving threats.",
        features: ["Data Protection", "Vulnerability Testing", "Threat Monitoring", "Compliance Management"],
      },
      {
        icon: GlobeIcon,
        title: "Digital & Marketing Automation",
        description: "Automated marketing workflows to engage customers, increase conversions, and grow your brand presence online.",
        features: ["Email Campaigns", "Social Media Automation", "SEO Tools", "Customer Insights"],
      }
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

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(Math.floor(services.length / 2));
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : services.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < services.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            We provide comprehensive IT solutions tailored to meet your business needs,
            from initial consultation to ongoing support and maintenance.
          </motion.p>
        </div>

        <div className="relative h-[600px] md:h-[650px] flex items-center justify-center">
          {services.map((service, index) => {
            const distance = index - activeIndex;
            const absDistance = Math.abs(distance);
            const IconComponent = service.icon;

            const getCardStyle = () => {
                if (isDesktop) {
                  return { // Desktop "fan" style with 5 cards
                    x: distance * 210,
                    y: absDistance * 40,
                    scale: 1 - absDistance * 0.15,
                    rotate: distance * 4,
                    zIndex: services.length - absDistance,
                    opacity: absDistance > 2 ? 0 : 1,
                  };
                }
                if (isTablet) {
                  return { // Tablet style with 3 cards
                    x: distance * 260,
                    y: absDistance * 30,
                    scale: 1 - absDistance * 0.2,
                    zIndex: services.length - absDistance,
                    opacity: absDistance > 1 ? 0 : 1,
                  };
                }
                return { // Mobile slider style
                  x: `${distance * 85}%`,
                  scale: index === activeIndex ? 1 : 0.8,
                  zIndex: services.length - absDistance,
                  opacity: index === activeIndex ? 1 : (absDistance === 1 ? 0.4 : 0),
                };
              };

            return (
              <motion.div
                key={index}
                className="absolute w-[90%] max-w-md group cursor-pointer"
                animate={getCardStyle()}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                onClick={() => setActiveIndex(index)}
              >
                <div className={`relative h-full p-1 transition-all duration-300 ${index === activeIndex ? '' : 'grayscale group-hover:grayscale-0'}`}>
                  <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur transition-opacity duration-300 ${index === activeIndex ? 'opacity-75' : 'opacity-0 group-hover:opacity-50'}`}></div>
                  <Card className="relative h-full bg-card/90 backdrop-blur-sm flex flex-col shadow-2xl">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4">
                        <IconComponent className="h-12 w-12 text-primary" />
                      </div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base min-h-[4rem]">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-md text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-4">
                        <Link to="/services">
                          <Button variant="outline" className="w-full group/btn border-primary/50 hover:bg-primary hover:text-primary-foreground text-lg py-6 max-sm:text-base">
                            Learn More
                            <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform max-sm:text-sm" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
          
          <div className="absolute top-1/2 -translate-y-1/2 w-full max-w-5xl lg:max-w-7xl flex justify-between z-50 px-2">
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-background/50 backdrop-blur-sm hover:bg-primary/80" onClick={handlePrev}>
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-background/50 backdrop-blur-sm hover:bg-primary/80" onClick={handleNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/services">
            <Button size="lg" className="transition-all duration-300 hover:scale-105 group">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;