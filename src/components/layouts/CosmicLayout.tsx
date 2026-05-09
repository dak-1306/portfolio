import CosmicBackground from "@/components/cosmic/background/CosmicBackground";
import { Outlet } from "react-router-dom";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
export default function CosmicLayout() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <CosmicBackground />
      <Header />
      <div className="relative z-10 isolate">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
