import "./global.css";
import "./solarSystem.css";
import HomePage from "@/pages/HomePage";
import ProjectDetail from "@/pages/ProjectDetail";
import CosmicLayout from "@/components/layouts/CosmicLayout";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<CosmicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  );
}

export default App;
