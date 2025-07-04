import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Marketplace from "./pages/Marketplace";
import Founding from "./pages/Founding";
import Bookkeeping from "./pages/Bookkeeping";
import Formations from "./pages/Formations";
import Academy from "./pages/Academy";
import Buying from "./pages/Buying";
import Selling from "./pages/Selling";
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
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/founding" element={<Founding />} />
          <Route path="/bookkeeping" element={<Bookkeeping />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/buying" element={<Buying />} />
          <Route path="/selling" element={<Selling />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
