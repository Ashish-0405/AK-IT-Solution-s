import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Database, Users, Shield, BarChart3 } from "lucide-react";

const CRMSoftware = () => {
  const features = [
    "Lead management and tracking",
    "Sales automation and forecasting",
    "Customer analytics and reporting",
    "Integration with email and ERP systems",
    "Customizable dashboards and workflows",
    "Mobile access for on-the-go management"
  ];


  const benefits = [
    {
      icon: Users,
      title: "Improved Customer Relationships",
      description: "Enhance customer satisfaction and loyalty with personalized interactions."
    },
    {
      icon: Database,
      title: "Centralized Data Management",
      description: "Store all customer information in one place for easy access and management."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Protect sensitive customer data with robust security measures."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Leverage analytics to make informed business decisions."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Needs Assessment",
      description: "Identify your business requirements and objectives."
    },
    {
      step: "02",
      title: "Customization",
      description: "Tailor the CRM solution to fit your specific needs."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy the CRM system and integrate it with existing tools."
    },
    {
      step: "04",
      title: "Training & Support",
      description: "Provide training for your team and ongoing support."
    }
  ];


  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">CRM Software Solutions</h1>
              <p className="text-xl md:text-2xl mb-8">
                Streamline your sales, marketing, and customer support with our powerful CRM solutions.
              </p>
              <Button size="lg" variant="secondary" className="text-lg">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Key Features of Our CRM Software</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our CRM solutions are designed to help you manage customer relationships effectively.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Benefits of Using Our CRM</h2>
                <p className="text-xl text-muted-foreground">
                  Discover how our CRM can transform your business operations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <Card key={index} className="text-center">
                      <CardContent className="p-6">
                        <IconComponent className="h-12 w-12 mx-auto mb-4 text-primary" />
                        <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
                <h2 className="text-4xl font-bold mb-6">Our CRM Implementation Process</h2>
                <p className="text-xl text-muted-foreground">
                  A structured approach to ensure successful CRM deployment.
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Customer Relationships?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your CRM needs and create a solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                View Case Studies
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default CRMSoftware;
