import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "group/alert relative grid w-full gap-1 rounded-2xl border p-4 text-left text-sm backdrop-blur-xl transition-all duration-300 has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-24 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-3 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-5 shadow-xl transform-gpu",
  {
    variants: {
      variant: {
        default:
          "border-primary/30 bg-card/60 text-foreground shadow-[0_0_20px_rgba(59,130,246,0.15)] *:[svg]:text-primary",
        cosmic:
          "border-secondary/40 bg-secondary/10 text-foreground shadow-[0_0_25px_rgba(34,211,238,0.2)] *:[svg]:text-secondary",
        destructive:
          "border-destructive/40 bg-destructive/10 text-foreground shadow-[0_0_20px_rgba(239,68,68,0.2)] *:[svg]:text-destructive",
        success:
          "border-emerald-500/40 bg-emerald-500/10 text-foreground shadow-[0_0_20px_rgba(16,185,129,0.2)] *:[svg]:text-emerald-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-heading font-bold text-base tracking-wide text-foreground group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm text-muted-foreground leading-relaxed [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-2",
        className,
      )}
      {...props}
    />
  );
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn(
        "absolute top-3 right-3 flex items-center gap-2",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription, AlertAction };
