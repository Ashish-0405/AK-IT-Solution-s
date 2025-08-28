import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-12 w-12 rounded"><img src="/public/AK-iT.png"/> </div>
              <span className="text-l font-bold mb-2"><span className="text-2xl">AK</span> IT Solution's</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Leading IT solutions provider specializing in web development, mobile apps, 
              cloud solutions, and comprehensive IT support services.
            </p>
            <div className="flex space-x-4">
              {/* <Link to={"https://www.instagram.com/ak.it.solutions/"}><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" /></Link> */}
              {/* <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" /> */}
              <Link to={"https://www.instagram.com/ak.it.solutions/"}><Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services/mobile-development" className="text-muted-foreground hover:text-primary transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services/cloud-solutions" className="text-muted-foreground hover:text-primary transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services/it-support" className="text-muted-foreground hover:text-primary transition-colors">IT Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">306 Golden Square, Nikol Ahmedabad-382350</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+91 90164 52340</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">akitsolutions0001@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2020 AK IT Solution's. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;