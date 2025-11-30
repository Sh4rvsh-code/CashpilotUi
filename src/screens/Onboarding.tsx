import { useState } from "react";
import { MessageSquare, TrendingUp, Lock, ChevronRight } from "lucide-react";

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: MessageSquare,
      title: "Automatic Expense Tracking",
      description: "Reads your bank SMS and tracks every transaction automatically",
      color: "#4C6FFF",
    },
    {
      icon: TrendingUp,
      title: "Smart Insights & Budgets",
      description: "Beautiful charts, budgets, and spending patterns at your fingertips",
      color: "#7B61FF",
    },
    {
      icon: Lock,
      title: "100% Private & Secure",
      description: "All data stays on your device. No cloud, no AI, complete privacy",
      color: "#00D9A5",
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="h-full w-full bg-[#0A0E27] flex flex-col relative">
      {/* Skip button */}
      <div className="absolute top-12 right-6 z-10">
        <button
          onClick={onComplete}
          className="text-[#A0A3BD] text-sm hover:text-white transition-colors"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Icon illustration */}
        <div
          className="w-32 h-32 rounded-[32px] flex items-center justify-center mb-12 shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${slide.color}40, ${slide.color}20)`,
            boxShadow: `0 20px 60px ${slide.color}40`,
          }}
        >
          <Icon className="w-16 h-16" style={{ color: slide.color }} strokeWidth={2} />
        </div>

        {/* Title */}
        <h2 className="text-2xl text-white text-center mb-4 px-4">
          {slide.title}
        </h2>

        {/* Description */}
        <p className="text-[#A0A3BD] text-center leading-relaxed px-4">
          {slide.description}
        </p>
      </div>

      {/* Bottom section */}
      <div className="px-6 pb-12">
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-[#4C6FFF]"
                  : "w-2 bg-[#151B3D]"
              }`}
            />
          ))}
        </div>

        {/* Next/Get Started button */}
        <button
          onClick={handleNext}
          className="w-full h-14 bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF] rounded-2xl text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all active:scale-95"
        >
          <span className="text-base">
            {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          </span>
          <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
