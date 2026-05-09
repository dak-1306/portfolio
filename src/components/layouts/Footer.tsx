import { Mail, Orbit } from "lucide-react";
import github from "@/assets/icons/github.svg";
import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";

const socials = [
  {
    icon: <img src={github} alt="GitHub" className="size-5 text-primary" />,
    href: "#",
  },
  {
    icon: <img src={facebook} alt="Facebook" className="size-5" />,
    href: "#",
  },
  {
    icon: <img src={instagram} alt="Instagram" className="size-5" />,
    href: "#",
  },
  {
    icon: <Mail className="size-5" />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-card/40 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Orbit className="size-6" />
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold">
                  Cosmic Portfolio
                </h3>
                <p className="text-sm text-muted-foreground">
                  Exploring the digital universe.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-muted-foreground">
          © 2026 Cosmic Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
