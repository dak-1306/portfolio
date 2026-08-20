import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-300 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer transform-gpu",
  {
    variants: {
      variant: {
        // Dynamic Cosmic Gradient (Cho CTA chính)
        cosmic:
          "bg-gradient-to-r from-primary via-secondary to-accent text-background font-semibold shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-[1.02] active:scale-95 border-0",

        // Glow Accent Button
        glow: "border border-primary/40 bg-primary/10 text-primary shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-primary/20 hover:border-primary/80 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]",

        // Frosted Glass Effect
        glass:
          "border border-white/10 bg-background/40 backdrop-blur-md text-foreground hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",

        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",

        outline:
          "border border-border/80 bg-background/50 backdrop-blur-sm text-foreground hover:border-secondary/60 hover:text-secondary hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]",

        secondary:
          "bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]",

        ghost:
          "hover:bg-secondary/10 hover:text-secondary active:bg-secondary/15",

        destructive:
          "bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/20 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]",

        link: "text-primary underline-offset-4 hover:underline hover:text-secondary",
      },
      size: {
        default: "h-10 gap-2 px-4 py-2",
        xs: "h-7 gap-1 rounded-lg px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-lg px-3 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-2.5 rounded-xl px-6 text-base font-semibold [&_svg:not([class*='size-'])]:size-5",
        icon: "size-10 rounded-xl",
        "icon-xs": "size-7 rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-lg [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-12 rounded-xl [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
