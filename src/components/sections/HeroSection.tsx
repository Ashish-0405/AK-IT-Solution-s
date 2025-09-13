import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Cloud, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Animation3D from "../ui/Animation3D";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Animation3D />
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 p-4 bg-white/10 rounded-lg backdrop-blur-sm max-sm:top-16">
          <Code className="h-8 w-8 text-white" />
        </div>
        <div className="absolute top-40 right-20 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
          <Smartphone className="h-8 w-8 text-white" />
        </div>
        <div className="absolute bottom-40 left-20 p-4 bg-white/10 rounded-lg backdrop-blur-sm max-sm:left-12">
          <Cloud className="h-8 w-8 text-white" />
        </div>
        <div className="absolute bottom-20 right-10 p-4 bg-white/10 rounded-lg backdrop-blur-sm max-sm:bottom-36">
          <Shield className="h-8 w-8 text-white" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Leading IT solutions provider specializing in cutting-edge web development, 
            mobile applications, cloud infrastructure, and comprehensive IT support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
           <Link to="/contact"> 
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
            <Link to="/portfolio">
            <Button 
              size="lg" 
              style={{ boxShadow: "var(--shadow-glow)" }}
              // variant="outline" 
             className="bg-white text-primary hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              View Portfolio
            </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 py-2">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">500+</div>
              <div className="text-blue-200 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">150+</div>
              <div className="text-blue-200 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">5+</div>
              <div className="text-blue-200 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-blue-200 text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;