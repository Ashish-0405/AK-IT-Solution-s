import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Nagar Ashish",
      position: "CEO & Founder",
      bio: "5+ years in tech leadership, former Microsoft architect",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Sarah Davis",
      position: "CTO",
      bio: "Expert in cloud architecture and scalable systems",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Mike Johnson",
      position: "Lead Developer",
      bio: "Full-stack expert specializing in React and Node.js",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Emily Chen",
      position: "Design Director",
      bio: "Award-winning UI/UX designer with 10+ years experience",
      image: "/api/placeholder/200/200"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To empower businesses with cutting-edge technology solutions that drive growth and innovation."
    },
    {
      icon: Lightbulb,
      title: "Vision",
      description: "To be the leading IT partner for businesses seeking digital transformation and technological excellence."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations and create lasting value for our clients."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in building strong partnerships and working closely with our clients to achieve shared success."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About AK <span className="text-5xl">IT Solution's</span> </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              We're a passionate team of technology experts dedicated to helping businesses 
              thrive in the digital age through innovative solutions and exceptional service.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  Founded in 2020, <span className="text-2xl font-semibold">AK</span> <span className="font-medium">IT Solution's</span> emerged from a simple yet powerful vision: to bridge the gap 
                  between complex technology and business success. Our founders, veterans of the tech industry, 
                  recognized that many businesses struggled to leverage technology effectively.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  What started as a small team of developers has grown into a comprehensive IT solutions 
                  provider serving clients across various industries. We've successfully delivered over 500 
                  projects, helping businesses transform their operations and achieve their digital goals.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we continue to push the boundaries of what's possible, staying at the forefront 
                  of technological innovation while maintaining our commitment to personalized service 
                  and client success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center border-0 bg-background/80 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience 
                in technology, design, and business strategy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-32 h-32 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Stats Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">750+</div>
                <div className="text-blue-100">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;