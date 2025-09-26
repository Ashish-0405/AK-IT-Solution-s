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
              <div className="h-20 w-20 rounded-2xl bg-white shadow-lg transition-all duration-200 hover:shadow-black hover:translate-[5px] hover:translate-[5px] hover:cursor-pointer"><img src="/AK1-version-22.svg" alt="" /> </div>
              <span className="font-bold mb-1"><span className="text-2xl">AK</span> IT Solution's</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Leading IT solutions provider specializing in web development, mobile apps, 
              cloud solutions, and comprehensive IT support services.
            </p>
            <div className="flex space-x-4">
              {/* <Link to={"https://www.instagram.com/ak.it.solutions/"}><Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" /></Link> */}
              {/* <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" /> */}
             <a href={"https://www.linkedin.com/company/ak-itsolutions/"} target="_blank" rel="noopener noreferrer"><img src="/social-media/linkedin-logo-svgrepo-com.svg" alt="" className="h-12 w-12 bg-white p-1 rounded-lg text-foreground hover:text-primary shadow-lg transition-all duration-300 ease-in-out hover:shadow-black hover:translate-[5px] hover:translate-[5px] hover:cursor-pointer max-sm:h-10 max-sm:w-10" /></a>
              <a href={"https://www.facebook.com/profile.php?id=61580661543575"} target="_blank" rel="noopener noreferrer"><img src="/social-media/facebook-5-logo-svgrepo-com.svg" alt="" className="h-12 w-12 bg-white p-1 rounded-lg text-foreground hover:text-primary shadow-lg transition-all duration-300 ease-in-out hover:shadow-black hover:translate-[5px] hover:translate-[5px] hover:cursor-pointer max-sm:h-10 max-sm:w-10" /></a>
              <a href={"https://www.instagram.com/ak.it.solutions/"} target="_blank" rel="noopener noreferrer"><img src="/social-media/instagram-logo-svgrepo-com.svg" alt="" className="h-12 w-12 bg-white p-1 rounded-lg text-foreground hover:text-primary shadow-lg transition-all duration-300 ease-in-out hover:shadow-black hover:translate-[5px] hover:translate-[5px] hover:cursor-pointer max-sm:h-10 max-sm:w-10" /></a>
              <a href={"https://wa.me/919016452340"} target="_blank" rel="noopener noreferrer"><img src="/social-media/whatsapp-logo-svgrepo-com.svg" alt="" className="h-12 w-12 bg-white p-1 rounded-lg text-foreground hover:text-primary shadow-lg transition-all duration-300 ease-in-out hover:shadow-black hover:translate-[5px] hover:translate-[5px] hover:cursor-pointer max-sm:h-10 max-sm:w-10" /></a>
              {/* <a href={"https://www.instagram.com/ak.it.solutions/"} target="_blank" rel="noopener noreferrer"><Instagram className="h-10 w-10 bg-white p-2 rounded-lg text-foreground hover:text-primary shadow-lg transition-all duration-300 ease-in-out hover:shadow-black hover:translate-[5px] hover:translate-[5px] hover:cursor-pointer" /></a> */}
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
              {/* <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li> */}
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
                <span className="text-muted-foreground">sales@akitsol.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2020 AK IT Solution's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;