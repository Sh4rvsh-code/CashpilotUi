import { useState } from "react";
import { ArrowLeft, Edit3, Plus } from "lucide-react";
import { BottomNavigation } from "../components/BottomNavigation";
import { useApp } from "../context/AppContext";

interface BudgetProps {
  navigate: (screen: string) => void;
}

export function Budget({ navigate }: BudgetProps) {
  const { monthlyBudget } = useApp();
  const [activeTab, setActiveTab] = useState("budget");
  const spent = 1860;
  const remaining = monthlyBudget - spent;
  const percentage = Math.round((spent / monthlyBudget) * 100);

  const categoryBudgets = [
    { name: "Food & Dining", spent: 450, budget: 500, emoji: "🍔", color: "#FFB800" },
    { name: "Transportation", spent: 280, budget: 300, emoji: "🚗", color: "#4C6FFF" },
    { name: "Shopping", spent: 520, budget: 600, emoji: "🛍️", color: "#7B61FF" },
    { name: "Bills", spent: 380, budget: 400, emoji: "📄", color: "#FF5757" },
    { name: "Entertainment", spent: 230, budget: 200, emoji: "🎬", color: "#00D9A5" },
  ];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(tab);
  };

  return (
    <div className="h-full w-full bg-[#0A0E27] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("home")}
            className="w-10 h-10 bg-[#151B3D] rounded-2xl flex items-center justify-center hover:bg-[#1a2048] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          </button>
          <h1 className="text-2xl text-white flex-1">Monthly Budget</h1>
          <button className="w-10 h-10 bg-[#151B3D] rounded-2xl flex items-center justify-center hover:bg-[#1a2048] transition-colors">
            <Edit3 className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          </button>
        </div>

        {/* Month Selector */}
        <button className="w-full bg-[#151B3D] rounded-[16px] p-3 flex items-center justify-between hover:bg-[#1a2048] transition-colors">
          <span className="text-white">November 2025</span>
          <span className="text-[#A0A3BD]">▼</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        {/* Budget Overview */}
        <div className="bg-gradient-to-br from-[#151B3D] to-[#1a2048] rounded-[28px] p-8 border border-[#1a2048] mb-6 relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#4C6FFF]/20 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Circular Progress */}
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#0A0E27"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeDasharray={`${percentage * 2.51} 251`}
                  strokeLinecap="round"
                  className="transition-all duration-500"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4C6FFF" />
                    <stop offset="100%" stopColor="#7B61FF" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl text-white mb-1">{percentage}%</p>
                  <p className="text-[#A0A3BD] text-sm">Used</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-[#A0A3BD] text-sm mb-1">Spent</p>
                <p className="text-2xl text-white">${spent.toLocaleString()}</p>
              </div>
              <div className="text-center">
                <p className="text-[#A0A3BD] text-sm mb-1">Remaining</p>
                <p className="text-2xl text-[#00D9A5]">${remaining.toLocaleString()}</p>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-[#A0A3BD] text-sm">Budget: ${monthlyBudget.toLocaleString()}/month</p>
              <p className="text-[#00D9A5] text-sm mt-1">✓ On Track · 10 days left</p>
            </div>
          </div>
        </div>

        {/* Category Budgets */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg">Budget by Category</h3>
            <button className="text-[#4C6FFF] text-sm flex items-center gap-1">
              <Plus className="w-4 h-4" strokeWidth={2} />
              Add
            </button>
          </div>

          <div className="space-y-3">
            {categoryBudgets.map((category) => {
              const categoryPercentage = Math.round((category.spent / category.budget) * 100);
              const status =
                categoryPercentage > 100
                  ? "over"
                  : categoryPercentage > 80
                  ? "warning"
                  : "safe";

              return (
                <div
                  key={category.name}
                  className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048] hover:border-[#4C6FFF]/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                        style={{ background: `${category.color}20` }}
                      >
                        {category.emoji}
                      </div>
                      <div>
                        <p className="text-white">{category.name}</p>
                        <p className="text-[#A0A3BD] text-xs">
                          ${category.spent} / ${category.budget}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-sm ${
                          status === "over"
                            ? "text-[#FF5757]"
                            : status === "warning"
                            ? "text-[#FFB800]"
                            : "text-[#00D9A5]"
                        }`}
                      >
                        {categoryPercentage}%
                      </p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 bg-[#0A0E27] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        status === "over"
                          ? "bg-[#FF5757]"
                          : status === "warning"
                          ? "bg-[#FFB800]"
                          : "bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF]"
                      }`}
                      style={{ width: `${Math.min(categoryPercentage, 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Budget Tips */}
        <div className="bg-gradient-to-br from-[#00D9A5]/20 to-[#00D9A5]/10 rounded-[24px] p-6 border border-[#00D9A5]/30">
          <h3 className="text-white text-lg mb-3">💡 Budget Tips</h3>
          <p className="text-[#A0A3BD] text-sm leading-relaxed">
            You're spending well within your budget. Consider allocating the extra $1,140 to
            your savings goals to maximize your financial growth.
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
