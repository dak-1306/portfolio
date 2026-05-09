import type { ReactNode } from "react";
import CosmicBackground from "@/components/cosmic/background/CosmicBackground";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
type CosmicLayoutProps = { children: ReactNode };
export default function CosmicLayout({ children }: CosmicLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {" "}
      <CosmicBackground /> <Header />
      <div className="relative z-10 isolate"> {children} </div> <Footer />
    </main>
  );
}
