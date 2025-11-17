import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers";
// import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Industry from "./pages/Industry";
import WhatsAppButton from "./pages/whatsappButton";
import AdvancedChatbot from "./pages/AdvancedChatbot";
import PreHeader from "./components/layout/PreHeader";
import Header from "./components/layout/Header";
import TermsAndConditions from "./pages/TermsAndConditions";
// import Shipping from "./pages/Shipping";
import CancellationAndRefund from "./pages/CancellationAndRefund";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register"; // Add this line
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]); // Add this line

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <PreHeader />
            {/* <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} /> */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index isAuthenticated={isAuthenticated} />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/careers" element={<Careers />} />
                {/* <Route path="/blog" element={<Blog />} /> */}
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} users={users} />} />
                <Route path="/register" element={<RegisterPage setUsers={setUsers} />} /> Add this line */}
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/cancellation-and-refund" element={<CancellationAndRefund />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                {/* <Route path="/shipping" element={<Shipping />} /> */}
                <Route path="/industry" element={<Industry />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
          <AdvancedChatbot />
        </BrowserRouter>
        {/* <WhatsAppButton /> */}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;