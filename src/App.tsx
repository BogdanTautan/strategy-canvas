import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home.tsx";
import Index from "./pages/Index.tsx";
import ModelReview from "./pages/ModelReview.tsx";
import BusinessObjective from "./pages/BusinessObjective.tsx";
import UseCaseAssessment from "./pages/UseCaseAssessment.tsx";
import RegulatoryEthical from "./pages/RegulatoryEthical.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section/:sectionId" element={<Index />} />
          <Route path="/model-review" element={<ModelReview />} />
          <Route path="/business-objective" element={<BusinessObjective />} />
          <Route path="/use-case-assessment" element={<UseCaseAssessment />} />
          <Route path="/regulatory-ethical" element={<RegulatoryEthical />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
