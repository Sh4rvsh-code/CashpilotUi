import { ChevronRight, LucideIcon } from "lucide-react";

interface NavigationCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export function NavigationCard({ icon: Icon, title, subtitle }: NavigationCardProps) {
  return (
    <button className="w-full bg-[#141414] hover:bg-[#1A1A1A] rounded-[20px] p-4 flex items-center gap-4 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] hover:shadow-xl hover:shadow-black/40 group shadow-lg shadow-black/20">
      {/* Icon Container */}
      <div className="w-11 h-11 bg-gradient-to-br from-[#3A7CFF]/15 to-[#6AA8FF]/15 rounded-[16px] flex items-center justify-center flex-shrink-0 group-hover:from-[#3A7CFF]/25 group-hover:to-[#6AA8FF]/25 transition-all duration-200">
        <Icon className="w-5 h-5 text-[#3A7CFF]" strokeWidth={2} />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-left">
        <h3 className="text-white mb-0.5">
          {title}
        </h3>
        <p className="text-[#808080] text-sm">
          {subtitle}
        </p>
      </div>

      {/* Arrow Icon */}
      <ChevronRight className="w-5 h-5 text-[#808080] flex-shrink-0 group-hover:text-[#3A7CFF] group-hover:translate-x-1 transition-all duration-200" strokeWidth={2.5} />
    </button>
  );
}
