import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GetQuote from "@/pages/GetQuote";
// import Industry from "@/pages/industry";
import path from "path";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  interface NavItem {
    name: string;
    path: string;
    dropdown?: { name: string; path: string }[];
  }

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
    },
    {name: "Industry", path:"/industry"},
    { name: "Portfolio", path: "/portfolio" },
    { name: "Careers", path: "/careers" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    // { name: "GetQuote", path:"/getquote"}
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-24 w-24 rounded max-sm:h-16 max-sm:w-16"><img src="/AK1-version-22.svg" alt="" /></div>
            <span className="text-l font-semibold max-sm:text-sm"><span className="font-bold text-xl max-sm:text-lg">AK</span> IT Solution's</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-md bg-popover border shadow-lg">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Dialog>
              <span className="cursor-pointer">
                <DialogTrigger asChild>
                  <Button variant="quote">Get Free Quote</Button>
                </DialogTrigger>
              </span>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl mb-2 text-center underline">Get a Quote</DialogTitle>
                  <DialogDescription className="text-center text-l">
                    Fill out the form below and we'll get back to you with a quote as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <GetQuote />
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="py-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-2 text-sm font-bold ${
                      isActive(item.path) ? "text-primary" : "text-foreground/80"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
               <Dialog>
                <span className="cursor-pointer">
                  <DialogTrigger asChild>
                    <Button className="w-full mt-4">Get Quote</Button>
                  </DialogTrigger>
                </span>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl mb-2 text-center underline">Get a Quote</DialogTitle>
                    <DialogDescription className="text-center text-l">
                      Fill out the form below and we'll get back to you with a quote as soon as possible.
                    </DialogDescription>
                  </DialogHeader>
                  <GetQuote />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;