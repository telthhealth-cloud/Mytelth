import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CareHome from "./pages/CareHome";
import PersonalizedCare from "./pages/PersonalizedCare";
import CarePay from "./pages/CarePay";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import GlobalPresence from "./pages/GlobalPresence";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./components/tabs/termsandcondition";
import PrivacyPolicy from "./components/tabs/privacypolicies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/care-home" element={<CareHome />} />
          <Route path="/personalized" element={<PersonalizedCare />} />
          <Route path="/care-pay" element={<CarePay />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/global-presence" element={<GlobalPresence />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />}/> 
          <Route path="/privacy-policies" element={<PrivacyPolicy />}/>  
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
