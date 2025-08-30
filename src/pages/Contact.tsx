import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  Headphones,
  Calendar,
  Globe,
  Send,
} from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    title: "Lead",
    company: "",
    phone: "",
    department: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email",
      details: [
        "General: ashishnagar0405@gmail.com",
        "Support: ak.nagar.0405@gmail.com",
        "Sales: sales@akitsolution.com",
      ],
      availability: "Response within 2 hours",
      badge: "Priority Support",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation call",
      details: [
        "Free 30-min consultation",
        "Technical discovery call",
        "Project planning session",
      ],
      availability: "Flexible scheduling",
      badge: "Free Consultation",
    },
  ];

  const offices = [
    {
      city: "Ahmedabad",
      address: "306 Golden Square Kalyan Chowk, Ahmedabad-382350 Gujarat India",
      phone: "+91 9016452340",
      email: "ashishnagar0405@gmail.com",
      type: "Headquarters",
    },
  ];

  const departments = [
    { name: "General Inquiry", icon: Users },
    { name: "Technical Support", icon: Headphones },
    { name: "Sales & Partnerships", icon: Globe },
    { name: "Careers", icon: Users },
    { name: "Press & Media", icon: MessageSquare },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Submitting form...");

    console.log("Form Data=====================>", formData);
    await emailjs
      .send(
        "service_r4gp5ie",
        "template_csch1zs",
        formData,
        "9Skjvs8fXr6vNJqTW"
      )
      .then(
        () => {
         toast.success("✅ Thanks for reaching out! We'll get back to you shortly.")
          setFormData({
            name: "",
            lastName: "",
            email: "",
            title: "Lead",
            company: "",
            phone: "",
            department: "",
            budget: "",
            timeline: "",
            message: "",
          });
        },
        (error) => {
          console.log("Error=========>", error);
        }
      );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology?
              Let's discuss your project and create something amazing together.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">How Can We Help You?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the best way to reach us. We're committed to responding
                quickly and providing the support you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm text-center"
                  >
                    <CardContent className="p-8 border rounded-lg">
                      <div className="relative mb-6">
                        <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="absolute -top-2 -right-2 text-xs"
                        >
                          {method.badge}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold mb-3">
                        {method.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {method.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {method.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>

                      <div className="text-xs text-primary font-medium">
                        {method.availability}
                      </div>

                      <Button
                        className="w-full mt-4"
                        variant="outline"
                        type="button"
                        onClick={() => {
                          if (method.title === "Schedule Meeting") {
                            window.open(
                              "https://calendly.com/ak-nagar-0405/30min",
                              "_blank"
                            );
                          } else if (method.title === "Email Support") {
                            // toast.success("Opening email client...");
                            window.open(
                              "https://mail.google.com/mail/?view=cm&fs=1&to=ak.nagar.0405@gmail.com&su=Support%20Request&body=Hello%2C%0D%0A",
                              "_blank"
                            );
                          }
                        }}
                      >
                        Contact Now
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Office */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* ✅ Only ONE form here */}
              <form onSubmit={handleSubmit}>
                <Card className="border-0 bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-3xl">Send us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          First Name *
                        </label>
                        <Input
                          placeholder="Enter your first name"
                          onChange={handleChange}
                          value={formData.name}
                          name="name"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Last Name *
                        </label>
                        <Input
                          placeholder="Enter your last name"
                          onChange={handleChange}
                          value={formData.lastName}
                          name="lastName"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        onChange={handleChange}
                        value={formData.email}
                        name="email"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        onChange={handleChange}
                        value={formData.phone}
                        name="phone"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Company
                      </label>
                      <Input
                        placeholder="Enter your company name"
                        onChange={handleChange}
                        value={formData.company}
                        name="company"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Department
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {departments.slice(0, 4).map((dept, index) => {
                          const IconComponent = dept.icon;
                          return (
                            <Button
                              key={index}
                              variant={
                                formData.department === dept.name
                                  ? "default"
                                  : "outline"
                              }
                              className="justify-start h-auto p-3"
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  department: dept.name,
                                })
                              }
                            >
                              <IconComponent className="h-4 w-4 mr-2" />
                              <span className="text-sm">{dept.name}</span>
                            </Button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Project Budget
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {["5K - 20K", "20K - 50K", "50K - 100K", "100K+"].map(
                          (budget, index) => (
                            <Button
                              key={index}
                              variant={
                                formData.budget === budget
                                  ? "default"
                                  : "outline"
                              }
                              className="text-sm"
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, budget })
                              }
                            >
                              {budget}
                            </Button>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Project Timeline
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["ASAP", "1-3 months", "3-6 months"].map(
                          (timeline, index) => (
                            <Button
                              key={index}
                              type="button"
                              variant={
                                formData.timeline === timeline
                                  ? "default"
                                  : "outline"
                              }
                              className="text-sm"
                              onClick={() =>
                                setFormData({ ...formData, timeline })
                              }
                            >
                              {timeline}
                            </Button>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className="min-h-[120px]"
                        onChange={handleChange}
                        value={formData.message}
                        name="message"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy
                      and terms of service.
                    </p>
                  </CardContent>
                </Card>
              </form>

              {/* Office Locations */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                  <p className="text-muted-foreground mb-8">
                    Visit us at one of our office locations or schedule a virtual meeting.
                  </p>
                </div>

                {offices.map((office, index) => (
                  <Card
                    key={index}
                    className="border-0 bg-background/80 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">
                              {office.city}
                            </h3>
                            <Badge variant="secondary">{office.type}</Badge>
                          </div>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-start">
                              <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                              <span className="whitespace-pre-line">
                                {office.address}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2" />
                              <span>{office.phone}</span>
                            </div>
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 mr-2" />
                              <span>{office.email}</span>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="mt-4"
                            type="button"
                            onClick={() => {
                              window.open(
                                `https://www.google.com/maps/dir/?api=1&destination=${office.address}`,
                                "_blank"
                              );
                            }}
                          >
                            Get Directions
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Business Hours */}
                <Card className="border-0 bg-background/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Business Hours</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Monday - Friday: </span>&nbsp;&nbsp;
                            <span>9:00 AM - 7:00 PM IST</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday:</span>&nbsp;&nbsp;
                            <span>10:00 AM - 6:00 PM IST</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday:</span>
                            <span>Closed</span>
                          </div>
                          <div className="pt-2 border-t">
                            <span className="text-primary font-medium">
                              24/7 Emergency Support Available
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
