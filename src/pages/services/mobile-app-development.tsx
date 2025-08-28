import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Smartphone, Apple, Android, Zap } from "lucide-react";

const MobileAppDevelopment = () => {
  const features = [
    "Native iOS and Android development",
    "Cross-platform solutions with React Native & Flutter",
    "Intuitive UI/UX design",
    "App Store optimization and submission",
    "Real-time features and push notifications",
    "Offline functionality and data synchronization"
  ];

  const technologies = [
    { name: "React Native", category: "Cross-Platform" },
    { name: "Flutter", category: "Cross-Platform" },
    { name: "Swift", category: "iOS Native" },
    { name: "Kotlin", category: "Android Native" },
    { name: "Firebase", category: "Backend" },
    { name: "AWS Amplify", category: "Cloud" },
    { name: "SQLite", category: "Database" },
    { name: "GraphQL", category: "API" }
  ];

  const appTypes = [
    {
      icon: Smartphone,
      title: "Business Apps",
      description: "Streamline operations and improve productivity"
    },
    {
      icon: Apple,
      title: "E-commerce Apps",
      description: "Drive sales with mobile shopping experiences"
    },
    {
      icon: Android,
      title: "Social Apps",
      description: "Connect users with engaging social features"
    },
    {
      icon: Zap,
      title: "Utility Apps",
      description: "Solve everyday problems with smart solutions"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Define app goals, target audience, and feature roadmap."
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Create wireframes and interactive prototypes."
    },
    {
      step: "03",
      title: "Development",
      description: "Build native or cross-platform mobile applications."
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Comprehensive testing and app store submission."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Mobile App Development</h1>
              <p className="text-xl md:text-2xl mb-8">
                Create powerful, user-friendly mobile applications that engage your customers and grow your business.
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
                <h2 className="text-4xl font-bold mb-6">Why Choose Our Mobile App Development</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We build high-performance mobile applications that deliver exceptional user experiences.
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

        {/* App Types Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Types of Apps We Build</h2>
                <p className="text-xl text-muted-foreground">
                  From business solutions to consumer apps, we create mobile experiences for every need.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {appTypes.map((type, index) => {
                  const IconComponent = type.icon;
                  return (
                    <Card key={index} className="text-center">
                      <CardContent className="p-6">
                        <IconComponent className="h-12 w-12 mx-auto mb-4 text-primary" />
                        <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Technologies We Use</h2>
                <p className="text-xl text-muted-foreground">
                  We leverage cutting-edge technologies to build modern, scalable mobile applications.
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Our Development Process</h2>
                <p className="text-xl text-muted-foreground">
                  We follow a proven methodology to deliver exceptional mobile applications.
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
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your app idea and create a mobile solution that engages your users and grows your business.
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

export default MobileAppDevelopment;
