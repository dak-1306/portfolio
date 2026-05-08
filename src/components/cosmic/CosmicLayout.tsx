import type { ReactNode } from "react";
import CosmicBackground from "./CosmicBackground";
type CosmicLayoutProps = { children: ReactNode };
export default function CosmicLayout({ children }: CosmicLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {" "}
      <CosmicBackground />{" "}
      <div className="relative z-10 isolate"> {children} </div>{" "}
    </main>
  );
}
