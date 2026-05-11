import "./global.css";
import "./solarSystem.css";
import HomePage from "@/pages/HomePage";
import ProjectDetail from "@/pages/ProjectDetail";
import CosmicLayout from "@/components/layouts/CosmicLayout";
import NotFound from "@/pages/NotFound";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<CosmicLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
