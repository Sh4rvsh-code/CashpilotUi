import { Plane, Settings } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-xl shadow-2xl shadow-black/40"
          : "bg-gradient-to-b from-[#0D0D0D] to-[#0D0D0D]/80"
      }`}
    >
      <div className="max-w-2xl mx-auto px-5 pt-4 pb-3">
        <div className="flex items-center justify-between mb-2">
          {/* Logo & App Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3A7CFF] to-[#6AA8FF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#3A7CFF]/40">
              <Plane className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl tracking-tight">
              CashPilot
            </span>
          </div>

          {/* Settings Icon */}
          <button className="w-10 h-10 bg-gradient-to-br from-[#1A1A1A] to-[#141414] hover:from-[#252525] hover:to-[#1A1A1A] rounded-2xl flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-black/30">
            <Settings className="w-5 h-5 text-[#B3B3B3] hover:text-white transition-colors" strokeWidth={2} />
          </button>
        </div>

        {/* Subtitle */}
        <p className="text-xs text-[#808080] ml-[52px] tracking-wide">
          Your financial cockpit
        </p>
      </div>
    </header>
  );
}
