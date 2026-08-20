import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import LogoIcon from "@/components/common/Logo";
import { projectSample } from "@/data/project";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/#hero" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    setIsScrolled(latest > 50);

    if (latest > 120 && diff > 8) {
      setIsVisible(false);
    } else if (diff < -8 || latest <= 120) {
      setIsVisible(true);
    }
  });

  const firstProjectSlug = projectSample[0]?.slug ?? "";

  return (
    <motion.header
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-120%", opacity: 0 },
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 transform-gpu"
    >
      <div
        className={cn(
          "relative flex w-full max-w-6xl items-center justify-between px-6 transition-all duration-300 transform-gpu",
          isScrolled
            ? "h-14 rounded-full border border-border/80 bg-background/70 backdrop-blur-3xl shadow-[0_0_30px_rgba(59,130,246,0.12)]"
            : "h-16 rounded-2xl border border-border/60 bg-background/30 backdrop-blur-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)]",
        )}
      >
        {/* Animated Cosmic Top Beam */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent pointer-events-none rounded-[inherit]" />

        {/* Dynamic Inner Cosmic Background Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-r from-secondary/5 via-transparent to-primary/5" />

        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center gap-3 group">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <LogoIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-heading font-black tracking-[0.25em] text-foreground group-hover:text-secondary transition-colors">
              DAK
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground font-mono">
              Frontend Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="relative z-10 hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <HashLink
              key={item.label}
              smooth
              to={item.href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground"
            >
              {/* Effet Pill Neon Glow khi hover */}
              <span className="absolute inset-0 rounded-full bg-secondary/10 border border-secondary/30 opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 shadow-[0_0_15px_rgba(34,211,238,0.2)]" />

              <span className="relative z-10 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_8px_var(--secondary)]" />
                {item.label}
              </span>
            </HashLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="relative z-10 flex items-center gap-3">
          {/* Tái sử dụng Button Cosmic */}
          <Button
            variant="cosmic"
            size="sm"
            asChild
            className="hidden lg:inline-flex rounded-full"
          >
            <Link to={`/project/${firstProjectSlug}`}>My Projects</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="glass"
                size="icon-sm"
                aria-label="Toggle Navigation Menu"
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent className="border-border/60 bg-background/90 backdrop-blur-2xl">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="mt-10 flex flex-col gap-3">
                {navItems.map((item) => (
                  <HashLink
                    key={item.label}
                    smooth
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-muted-foreground transition-all duration-200 hover:bg-secondary/10 hover:text-secondary hover:border hover:border-secondary/20"
                  >
                    {item.label}
                  </HashLink>
                ))}

                <Button
                  variant="cosmic"
                  size="lg"
                  asChild
                  className="mt-4 w-full"
                >
                  <Link
                    to={`/project/${firstProjectSlug}`}
                    onClick={() => setIsOpen(false)}
                  >
                    My Projects
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
