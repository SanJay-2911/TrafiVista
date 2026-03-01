import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import UserDashboard from "./pages/UserDashboard";
import UserUpload from "./pages/UserUpload";
import UserPredictions from "./pages/UserPredictions";
import AdminDashboard from "./pages/AdminDashboard";
import AdminDatasets from "./pages/AdminDatasets";
import AdminSettings from "./pages/AdminSettings";
import PredictionResult from "./pages/PredictionResult";
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
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/dashboard/upload" element={<UserUpload />} />
          <Route path="/dashboard/predictions" element={<UserPredictions />} />
          <Route path="/dashboard/result" element={<PredictionResult />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/datasets" element={<AdminDatasets />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
