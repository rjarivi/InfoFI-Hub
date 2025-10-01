import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/hooks/use-language";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            {/* Redirect root to default language */}
            <Route path="/" element={<Navigate to="/en" replace />} />
            
            {/* Language-specific routes */}
            <Route path="/en" element={<Index />} />
            <Route path="/es" element={<Index />} />
            <Route path="/fr" element={<Index />} />
            <Route path="/de" element={<Index />} />
            <Route path="/ja" element={<Index />} />
            <Route path="/ko" element={<Index />} />
            <Route path="/zh" element={<Index />} />
            <Route path="/ar" element={<Index />} />
            
            {/* Catch-all for invalid routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
