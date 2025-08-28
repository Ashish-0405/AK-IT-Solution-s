import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Cloud, HeadphonesIcon, CheckCircle, ArrowRight, Database } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies",
      features: ["Responsive Design", "SEO Optimized", "Performance Focused", "Secure & Scalable"],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
      pricing: "Starting from RS : 9,999"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      features: ["Native iOS/Android", "Cross-Platform", "UI/UX Design", "App Store Optimization"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      pricing: "Starting from RS : 49,999"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Comprehensive cloud infrastructure and migration services",
      features: ["AWS/Azure/GCP", "Migration Services", "DevOps Automation", "Cost Optimization"],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      pricing: "Starting from RS : 39,999"
    },
    {
      icon: Database,
      title: "CRM Software",
      description: "Customer Relationship Management solutions to streamline sales, marketing, and support",
      features: ["Lead Management", "Sales Automation", "Customer Analytics", "Integration with Email & ERP"],
      technologies: ["Salesforce API", "MongoDB", "Express.js", "React", "Node.js"],
      pricing: "Starting from RS : 99,999"
    },
    {
      icon: HeadphonesIcon,
      title: "IT Support",
      description: "24/7 technical support and system maintenance",
      features: ["24/7 Support", "System Monitoring", "Preventive Maintenance", "Emergency Response"],
      technologies: ["Monitoring Tools", "Ticketing Systems", "Remote Access", "Security Tools"],
      pricing: "Starting from 1,200/month"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We analyze your business needs and technical requirements to create a tailored solution."
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description: "Our team develops a comprehensive project plan with timelines, milestones, and deliverables."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies with regular testing and quality assurance."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support to ensure optimal performance."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <div className="text-primary font-semibold">{service.pricing}</div>
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
                            <div key={featureIndex} className="flex items-center">
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
                            <Badge key={techIndex} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full group/btn">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
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
                We follow a proven methodology to ensure your project is delivered 
                on time, within budget, and exceeds your expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <Card key={index} className="text-center border-0 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-primary mb-4">{step.step}</div>
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
              Let's discuss your project requirements and create a solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-primary hover:bg-white hover:text-primary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="secondary" className="text-primary hover:bg-white hover:text-primary">
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;