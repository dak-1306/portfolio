import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Logo from "@/assets/icons/logo.svg";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  {
    label: "Home",
    href: "#hero",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="relative flex h-16 w-full max-w-6xl items-center justify-between rounded-2xl border border-border/60 bg-background/30 px-6 shadow-[0_0_40px_rgba(139,92,246,0.08)] backdrop-blur-2xl">
        {/* Top glow line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent" />

        {/* Cosmic background glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/5 via-transparent to-primary/5" />

        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center gap-3">
          <div className="relative flex items-center justify-center mr-2">
            {/* Glow */}
            <div className="absolute h-10 w-10 rounded-full bg-secondary/20 blur-xl" />

            {/* Core */}
            <img src={Logo} alt="DAK Logo" className="h-8 w-8" />

            {/* Orbit */}
            <div className="absolute h-10 w-10 rotate-[-20deg] rounded-full border border-secondary/40" />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.25em] text-foreground">
              DAK
            </span>

            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Frontend Engineer
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="relative z-10 hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-secondary/10 hover:text-secondary"
            >
              <div className="absolute inset-0 rounded-full bg-secondary/0 opacity-0 blur-xl transition-all duration-300 group-hover:bg-secondary/10 group-hover:opacity-100" />

              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="relative z-10 flex items-center gap-3">
          {/* CTA */}
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-secondary to-primary px-5 py-2.5 text-sm font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] lg:block"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-background/40 text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:border-secondary/40 hover:text-secondary lg:hidden">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent className="border-border bg-background/95 backdrop-blur-2xl">
              <div className="mt-10 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-muted-foreground transition-all duration-300 hover:bg-secondary/10 hover:text-secondary"
                  >
                    {item.label}
                  </a>
                ))}

                <Link
                  to="#contact"
                  className="mt-4 rounded-xl bg-gradient-to-r from-secondary to-primary px-4 py-3 text-center font-semibold text-background"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
