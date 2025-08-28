import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Cloud, Server, Shield, Zap, Database, Globe } from "lucide-react";

const CloudSolutions = () => {
  const features = [
    "AWS, Azure, and Google Cloud expertise",
    "Seamless cloud migration services",
    "DevOps automation and CI/CD pipelines",
    "Cost optimization and monitoring",
    "High availability and disaster recovery",
    "Security-first cloud architecture"
  ];

  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud",
      features: ["Zero-downtime migration", "Data security assurance", "Performance optimization", "Cost reduction"]
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description: "Automate your infrastructure deployment with Terraform and CloudFormation",
      features: ["Automated provisioning", "Version control", "Scalability", "Consistency"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Implement robust security measures and ensure regulatory compliance",
      features: ["Security audits", "Compliance frameworks", "Access controls", "Encryption"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize cloud resources for maximum performance and cost efficiency",
      features: ["Resource monitoring", "Auto-scaling", "Load balancing", "Caching strategies"]
    }
  ];

  const cloudPlatforms = [
    {
      name: "Amazon Web Services",
      icon: Cloud,
      description: "Comprehensive cloud platform with 200+ services",
      features: ["Compute", "Storage", "Database", "AI/ML", "IoT"]
    },
    {
      name: "Microsoft Azure",
      icon: Server,
      description: "Enterprise-grade cloud services and hybrid solutions",
      features: ["Virtual Machines", "App Service", "SQL Database", "DevOps", "AI Services"]
    },
    {
      name: "Google Cloud Platform",
      icon: Globe,
      description: "Innovative cloud solutions with advanced analytics",
      features: ["Compute Engine", "Kubernetes", "BigQuery", "AI Platform", "Cloud Functions"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Evaluate your current infrastructure and create a cloud migration strategy"
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Design scalable, secure cloud architecture tailored to your needs"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy and configure cloud resources with automation"
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and 24/7 support"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Cloud Solutions</h1>
              <p className="text-xl md:text-2xl mb-8">
                Transform your business with scalable, secure, and cost-effective cloud infrastructure.
              </p>
              <Button size="lg" variant="secondary" className="text-lg">
                Get Free Cloud Assessment
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Comprehensive Cloud Services</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  From migration to optimization, we provide end-to-end cloud solutions tailored to your business needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{service.title}</CardTitle>
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <h4 className="font-semibold">Key Features:</h4>
                          <div className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Platforms Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Cloud Platforms We Support</h2>
                <p className="text-xl text-muted-foreground">
                  Expertise across all major cloud platforms to meet your specific requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cloudPlatforms.map((platform, index) => {
                  const IconComponent = platform.icon;
                  return (
                    <Card key={index} className="text-center">
                      <CardContent className="p-8">
                        <IconComponent className="h-16 w-16 mx-auto mb-6 text-primary" />
                        <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                        <p className="text-muted-foreground mb-6">{platform.description}</p>
                        <div className="space-y-2">
                          {platform.features.map((feature, featureIndex) => (
                            <Badge key={featureIndex} variant="secondary" className="mr-2">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Our Cloud Migration Process</h2>
                <p className="text-xl text-muted-foreground">
                  A systematic approach to ensure successful cloud transformation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {process.map((step, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-8">
                      <div className="text-3xl font-bold text-primary mb-4">{step.step}</div>
                      <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your cloud requirements and create a solution that scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Cloud Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CloudSolutions;
