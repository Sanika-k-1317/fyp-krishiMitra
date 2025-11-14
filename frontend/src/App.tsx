import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SoilHealth from "./pages/SoilHealth";
import Weather from "./pages/Weather";
import PestDetection from "./pages/PestDetection";
import MarketPrices from "./pages/MarketPrices";
import VoiceAssistant from "./pages/VoiceAssistant";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/soil-health" element={<SoilHealth />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/pest-detection" element={<PestDetection />} />
          <Route path="/market-prices" element={<MarketPrices />} />
          <Route path="/voice-assistant" element={<VoiceAssistant />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
