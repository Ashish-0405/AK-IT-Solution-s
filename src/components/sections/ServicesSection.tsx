import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Cloud, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
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
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive IT solutions tailored to meet your business needs, 
            from initial consultation to ongoing support and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services">
                  <Button variant="ghost" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services">
          <Button size="lg" className="transition-all duration-300 hover:scale-105">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;