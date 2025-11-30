import { useState } from "react";
import { DollarSign } from "lucide-react";
import { useApp } from "../context/AppContext";

interface BudgetSetupProps {
  onComplete: () => void;
}

export function BudgetSetup({ onComplete }: BudgetSetupProps) {
  const { setMonthlyBudget } = useApp();
  const [budget, setBudget] = useState("3000");

  const suggestedAmounts = [2000, 3000, 5000, 10000];

  const handleContinue = () => {
    setMonthlyBudget(Number(budget) || 3000);
    onComplete();
  };

  const handleSkip = () => {
    setMonthlyBudget(0);
    onComplete();
  };

  return (
    <div className="h-full w-full bg-[#0A0E27] flex flex-col">
      {/* Header */}
      <div className="pt-16 px-6 pb-8">
        <h1 className="text-3xl text-white mb-2">
          Set Your Monthly Budget
        </h1>
        <p className="text-[#A0A3BD]">
          How much do you plan to spend each month?
        </p>
      </div>

      {/* Budget Input */}
      <div className="flex-1 px-6">
        <div className="bg-[#151B3D]/50 backdrop-blur-xl rounded-[32px] p-8 border-2 border-[#1a2048] mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4C6FFF]/20 to-[#7B61FF]/20 rounded-2xl flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-[#4C6FFF]" strokeWidth={2} />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl text-[#A0A3BD]">$</span>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="text-5xl text-white bg-transparent border-none outline-none text-center w-48"
              placeholder="0"
            />
          </div>
          <p className="text-center text-[#A0A3BD] text-sm">per month</p>
        </div>

        {/* Suggested amounts */}
        <div>
          <p className="text-[#A0A3BD] text-sm mb-3">Suggested amounts:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setBudget(amount.toString())}
                className={`px-6 py-3 rounded-2xl transition-all ${
                  budget === amount.toString()
                    ? "bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF] text-white"
                    : "bg-[#151B3D] text-[#A0A3BD] hover:bg-[#1a2048]"
                }`}
              >
                ${amount.toLocaleString()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-6 pb-8 space-y-3">
        <button
          onClick={handleContinue}
          className="w-full h-14 bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF] rounded-2xl text-white hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all active:scale-95"
        >
          Continue
        </button>
        <button
          onClick={handleSkip}
          className="w-full h-14 text-[#A0A3BD] hover:text-white transition-colors"
        >
          I'll do this later
        </button>
      </div>
    </div>
  );
}
