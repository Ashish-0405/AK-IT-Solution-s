import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Smartphone, Cloud, Globe } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern e-commerce platform with advanced inventory management and analytics dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "/public/portfolio-image/e-commerce-landing-page.jpeg",
      client: "RetailCorp",
      results: ["300% increase in sales", "50% faster load times", "99.9% uptime"],
      icon: Globe
    },
    {
      title: "Healthcare Mobile App",
      category: "mobile",
      description: "Telemedicine app connecting patients with healthcare providers for remote consultations.",
      technologies: ["React Native", "Firebase", "WebRTC"],
      image: "/api/placeholder/400/250",
      client: "MediCare Solutions",
      results: ["10,000+ active users", "4.8 App Store rating", "HIPAA compliant"],
      icon: Smartphone
    },
    {
      title: "Cloud Migration Project",
      category: "cloud",
      description: "Complete infrastructure migration from on-premise to AWS with 40% cost reduction.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "/api/placeholder/400/250",
      client: "TechStart Inc",
      results: ["40% cost reduction", "99.99% availability", "Zero downtime migration"],
      icon: Cloud
    },
    {
      title: "Financial Dashboard",
      category: "web",
      description: "Real-time financial analytics dashboard with advanced reporting capabilities.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      image: "/api/placeholder/400/250",
      client: "FinanceFlow",
      results: ["Real-time data processing", "50+ custom reports", "SOC 2 compliant"],
      icon: Code
    },
    {
      title: "Food Delivery App",
      category: "mobile",
      description: "Full-stack food delivery platform with real-time tracking and payment integration.",
      technologies: ["Flutter", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/400/250",
      client: "QuickEats",
      results: ["25,000+ orders processed", "4.7 user rating", "30-second checkout"],
      icon: Smartphone
    },
    {
      title: "DevOps Automation",
      category: "cloud",
      description: "CI/CD pipeline automation reducing deployment time by 80%.",
      technologies: ["Jenkins", "Docker", "AWS", "Ansible"],
      image: "/api/placeholder/400/250",
      client: "DevCorp",
      results: ["80% faster deployments", "90% fewer deployment errors", "24/7 monitoring"],
      icon: Cloud
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: Globe },
    { id: "web", name: "Web Development", icon: Code },
    { id: "mobile", name: "Mobile Apps", icon: Smartphone },
    { id: "cloud", name: "Cloud Solutions", icon: Cloud }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped businesses 
              achieve their digital transformation goals.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-12 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                 
                  <Button
                    key={category.id}
                    variant={activeFilter === category.id ? "default" : "outline"}
                    onClick={() => setActiveFilter(category.id)}
                    className="flex items-center space-x-2"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{category.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                    <div className="relative">
                      <div className="h-48 bg-muted flex items-center justify-center">
                        <IconComponent className="h-16 w-16 text-muted-foreground" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">{project.client}</Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2 text-sm">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-medium mb-2 text-sm">Key Results:</h4>
                        <ul className="space-y-1">
                          {project.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="text-xs text-muted-foreground flex items-center">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar success with your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg"  onClick={() => {
                                window.open(
                                  "https://calendly.com/ak-nagar-0405/30min",
                                  "_blank"
                                );
                              }}>
                Schedule Consultation
              </Button>
              {/* <Button size="lg" variant="outline">
                Download Portfolio PDF
              </Button> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;