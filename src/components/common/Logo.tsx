import Logo from "@/assets/icons/logo.svg?react";
export default function LogoIcon() {
  return (
    <div className="relative flex items-center justify-center mr-2">
      {/* Glow */}
      <div className="absolute h-10 w-10 rounded-full bg-secondary/20 blur-xl" />

      {/* Core */}
      <Logo className="h-8 w-8" />

      {/* Orbit */}
      <div className="absolute h-10 w-10 rotate-[-20deg] rounded-full border border-secondary/40" />
    </div>
  );
}
