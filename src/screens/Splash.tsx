import { useEffect } from "react";
import { Plane } from "lucide-react";

interface SplashProps {
  onComplete: () => void;
}

export function Splash({ onComplete }: SplashProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-full w-full bg-gradient-to-br from-[#0A0E27] via-[#151B3D] to-[#0A0E27] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4C6FFF] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B61FF] rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-24 h-24 bg-gradient-to-br from-[#4C6FFF] to-[#7B61FF] rounded-3xl flex items-center justify-center shadow-2xl shadow-[#4C6FFF]/50 animate-bounce">
          <Plane className="w-12 h-12 text-white" strokeWidth={2.5} />
        </div>
      </div>

      {/* App Name */}
      <h1 className="text-4xl text-white mb-3 tracking-tight">
        CashPilot
      </h1>

      {/* Tagline */}
      <p className="text-[#A0A3BD] text-center px-8 mb-12">
        Take control of your money effortlessly
      </p>

      {/* Loading indicator */}
      <div className="flex gap-2 mt-8">
        <div className="w-2 h-2 bg-[#4C6FFF] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <div className="w-2 h-2 bg-[#4C6FFF] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <div className="w-2 h-2 bg-[#4C6FFF] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}
