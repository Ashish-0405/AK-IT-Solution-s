import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Code, Globe, Smartphone, Database, Cloud } from "lucide-react";

const WebDevelopment = () => {
  const features = [
    "Responsive Design that works on all devices",
    "SEO Optimized for better search rankings",
    "Performance Focused with fast loading times",
    "Secure & Scalable architecture",
    "Modern UI/UX design principles",
    "Cross-browser compatibility"
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Tailwind CSS", category: "Styling" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes and interactive prototypes for your approval."
    },
    {
      step: "03",
      title: "Development",
      description: "Build your website using modern technologies and best practices."
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing and deployment to ensure everything works perfectly."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Web Development</h1>
              <p className="text-xl md:text-2xl mb-8">
                Transform your business with cutting-edge web solutions that drive growth and deliver exceptional user experiences.
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
                <h2 className="text-4xl font-bold mb-6">Why Choose Our Web Development Services</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We create powerful, scalable web applications that help businesses achieve their digital goals.
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

        {/* Technologies Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Technologies We Use</h2>
                <p className="text-xl text-muted-foreground">
                  We leverage the latest technologies to build modern, scalable web applications.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                      <Badge variant="outline">{tech.category}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
                <p className="text-xl text-muted-foreground">
                  We follow a proven methodology to deliver exceptional web solutions.
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
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Web Solution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom web solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
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

export default WebDevelopment;
