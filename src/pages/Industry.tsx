import { useState } from "react";
import {
  Building2,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Banknote,
  Globe,
  ChevronDown,
  ChevronUp,
  Check,
  X,
} from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

// Sample Card Components (replace with real imports if available)
const Card = ({ children, className, ...props }) => (
  <div className={`rounded-lg border ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

const pricingPlans = {
  Healthcare: {
    basic: { name: "Basic", price: "₹9,999", features: ["HIPAA Compliance", "Patient Management"] },
    advanced: { name: "Advanced", price: "₹29,999", features: ["Basic Plan Features", "Telemedicine", "EHR Integration"] },
    premium: { name: "Premium", price: "₹49,999", features: ["Advanced Plan Features", "24/7 Support", "Custom Analytics"] },
  },
  "E-commerce": {
    basic: { name: "Basic", price: "₹19,999", features: ["Mobile Commerce", "Payment Gateway"] },
    advanced: { name: "Advanced", price: "₹49,999", features: ["Basic Plan Features", "Inventory Management", "Analytics"] },
    premium: { name: "Premium", price: "₹89,999", features: ["Advanced Plan Features", "CRM Integration", "Advanced Reporting"] },
  },
  Education: {
    basic: { name: "Basic", price: "₹10,999", features: ["LMS Integration", "Virtual Classrooms"] },
    advanced: { name: "Advanced", price: "₹29,999", features: ["Basic Plan Features", "Student Portal", "Assessment Tools"] },
    premium: { name: "Premium", price: "₹79,999", features: ["Advanced Plan Features", "Custom Branding", "Dedicated Support"] },
  },
  Finance: {
    basic: { name: "Basic", price: "₹39,999", features: ["Payment Processing", "Risk Management"] },
    advanced: { name: "Advanced", price: "₹69,999", features: ["Basic Plan Features", "Compliance Tools", "Mobile Banking"] },
    premium: { name: "Premium", price: "₹99,999", features: ["Advanced Plan Features", "AI-Powered Insights", "Blockchain Integration"] },
  },
  "Real Estate": {
    basic: { name: "Basic", price: "₹49,999", features: ["Property Management", "CRM Integration"] },
    advanced: { name: "Advanced", price: "₹89,999", features: ["Basic Plan Features", "Virtual Tours", "Document Management"] },
    premium: { name: "Premium", price: "₹1,49,000", features: ["Advanced Plan Features", "Advanced Analytics", "Marketing Automation"] },
  },
  "Global Services": {
    basic: { name: "Basic", price: "₹1,04,000", features: ["Multi-language Support", "Global Infrastructure"] },
    advanced: { name: "Advanced", price: "₹2,08,000", features: ["Basic Plan Features", "Local Compliance", "24/7 Support"] },
    premium: { name: "Premium", price: "₹3,12,000", features: ["Advanced Plan Features", "Dedicated Account Manager", "Custom Integrations"] },
  },
};

// Sample industries data
const industries = [
  {
    title: "Healthcare",
    description:
      "Transforming patient care with secure, scalable digital solutions",
    icon: Stethoscope,
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    details: {
      overview:
        "Comprehensive healthcare IT solutions that improve patient outcomes, streamline operations, and ensure compliance with industry regulations.",
      keyFeatures: [
        "HIPAA Compliance",
        "Patient Management",
        "Telemedicine",
        "EHR Integration",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "HL7 FHIR"],
      benefits: [
        "Improved Patient Care",
        "Reduced Costs",
        "Better Compliance",
        "Enhanced Security",
      ],
    },
  },
  {
    title: "E-commerce",
    description:
      "Building powerful online stores that drive sales and customer engagement",
    icon: ShoppingCart,
    color: "bg-green-600",
    lightColor: "bg-green-50",
    details: {
      overview:
        "End-to-end e-commerce solutions that scale with your business, from startup to enterprise level.",
      keyFeatures: [
        "Mobile Commerce",
        "Payment Gateway",
        "Inventory Management",
        "Analytics",
      ],
      technologies: [
        "Shopify",
        "WooCommerce",
        "Stripe",
        "PayPal",
        "React Native",
      ],
      benefits: [
        "Increased Sales",
        "Better UX",
        "Mobile Ready",
        "Secure Payments",
      ],
    },
  },
  {
    title: "Education",
    description:
      "Empowering learning with innovative educational technology solutions",
    icon: GraduationCap,
    color: "bg-purple-600",
    lightColor: "bg-purple-50",
    details: {
      overview:
        "Educational platforms that enhance learning experiences and improve institutional efficiency.",
      keyFeatures: [
        "LMS Integration",
        "Virtual Classrooms",
        "Student Portal",
        "Assessment Tools",
      ],
      technologies: [
        "Moodle",
        "Canvas",
        "Zoom SDK",
        "WebRTC",
        "Progressive Web Apps",
      ],
      benefits: [
        "Enhanced Learning",
        "Remote Access",
        "Better Engagement",
        "Data Analytics",
      ],
    },
  },
  {
    title: "Finance",
    description:
      "Secure, compliant fintech solutions for modern financial services",
    icon: Banknote,
    color: "bg-yellow-600",
    lightColor: "bg-yellow-50",
    details: {
      overview:
        "Financial technology solutions that meet regulatory requirements while delivering exceptional user experiences.",
      keyFeatures: [
        "Payment Processing",
        "Risk Management",
        "Compliance Tools",
        "Mobile Banking",
      ],
      technologies: [
        "Blockchain",
        "AI/ML",
        "Microservices",
        "Docker",
        "Kubernetes",
      ],
      benefits: [
        "Enhanced Security",
        "Regulatory Compliance",
        "Faster Transactions",
        "Risk Reduction",
      ],
    },
  },
  {
    title: "Real Estate",
    description:
      "Digital solutions that transform property management and sales",
    icon: Building2,
    color: "bg-red-600",
    lightColor: "bg-red-50",
    details: {
      overview:
        "Comprehensive real estate platforms that streamline property management, sales, and customer relationships.",
      keyFeatures: [
        "Property Management",
        "CRM Integration",
        "Virtual Tours",
        "Document Management",
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API", "VR/AR"],
      benefits: [
        "Improved Efficiency",
        "Better Customer Experience",
        "Automated Processes",
        "Data Insights",
      ],
    },
  },
  {
    title: "Global Services",
    description: "Worldwide IT solutions with local expertise and global reach",
    icon: Globe,
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50",
    details: {
      overview:
        "International IT services that help businesses expand globally while maintaining local market relevance.",
      keyFeatures: [
        "Multi-language Support",
        "Global Infrastructure",
        "Local Compliance",
        "24/7 Support",
      ],
      technologies: [
        "CDN",
        "Multi-region AWS",
        "Translation APIs",
        "Microservices",
        "GraphQL",
      ],
      benefits: [
        "Global Reach",
        "Local Expertise",
        "Scalable Infrastructure",
        "Continuous Support",
      ],
    },
  },
];

const PricingModal = ({ industry, onClose }) => {
  const plans = pricingPlans[industry.title];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">{industry.title} Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.values(plans).map((plan: any) => (
            <div key={plan.name} className="border rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-semibold text-center mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-center mb-6">{plan.price}</p>
              <ul className="space-y-2 text-gray-600 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Industry = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const openPricingModal = (industry, e) => {
    e.stopPropagation();
    setSelectedIndustry(industry);
  };

  const closePricingModal = () => {
    setSelectedIndustry(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <header className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tailored IT solutions to help businesses transform and scale across
            key industries. Click on any industry to explore our comprehensive
            services and expertise.
          </motion.p>
        </header>
      </section>
      <main className="px-4 py-16 max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            const isExpanded = expandedCard === index;

            return (
              <Card
                key={index}
                className={`border-2 transition-all duration-300 bg-white ${
                  isExpanded
                    ? "border-gray-300 shadow-xl md:col-span-2 lg:col-span-3"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
                }`}
              >
                <div onClick={() => toggleCard(index)} className="cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${industry.color}`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-900">
                          {industry.title}
                        </h2>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {industry.description}
                    </p>
                  </CardContent>
                </div>

                {isExpanded && (
                  <div className="p-6 border-t">
                    <div className="space-y-6">
                      {/* Overview */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Overview
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {industry.details.overview}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {industry.details.keyFeatures.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      {/* <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.details.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${industry.lightColor} text-gray-700`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div> */}

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {industry.details.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <Check className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <button
                        onClick={(e) => openPricingModal(industry, e)}
                        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                )}

                {!isExpanded && (
                  <div className="p-6 border-t">
                    <div
                      onClick={() => toggleCard(index)}
                      className="flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                    >
                      <span>Click to explore details</span>
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </main>

      {selectedIndustry && (
        <PricingModal industry={selectedIndustry} onClose={closePricingModal} />
      )}

      <Footer />
    </div>
  );
};

export default Industry;