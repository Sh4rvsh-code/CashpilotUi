import { useState } from "react";
import { ArrowLeft, Download, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { BottomNavigation } from "../components/BottomNavigation";

interface AnalyticsProps {
  navigate: (screen: string) => void;
}

export function Analytics({ navigate }: AnalyticsProps) {
  const [activeTab, setActiveTab] = useState("analytics");
  const [selectedMonth, setSelectedMonth] = useState("November 2025");

  const categories = [
    { name: "Food & Dining", amount: 886.90, percentage: 35, color: "#FFB800", emoji: "🍔" },
    { name: "Transportation", amount: 506.80, percentage: 20, color: "#4C6FFF", emoji: "🚗" },
    { name: "Shopping", amount: 456.10, percentage: 18, color: "#7B61FF", emoji: "🛍️" },
    { name: "Bills", amount: 380.10, percentage: 15, color: "#FF5757", emoji: "📄" },
    { name: "Others", amount: 304.10, percentage: 12, color: "#00D9A5", emoji: "📦" },
  ];

  const topExpenses = [
    { merchant: "Whole Foods", amount: 156.80, category: "Groceries", emoji: "🛒" },
    { merchant: "Amazon", amount: 89.99, category: "Shopping", emoji: "🛍️" },
    { merchant: "Uber", amount: 45.30, category: "Transportation", emoji: "🚗" },
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
          <h1 className="text-2xl text-white flex-1">Analytics</h1>
          <button className="w-10 h-10 bg-[#151B3D] rounded-2xl flex items-center justify-center hover:bg-[#1a2048] transition-colors">
            <Download className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          </button>
        </div>

        {/* Month Selector */}
        <button className="w-full bg-[#151B3D] rounded-[16px] p-3 flex items-center justify-between hover:bg-[#1a2048] transition-colors">
          <span className="text-white">{selectedMonth}</span>
          <span className="text-[#A0A3BD]">▼</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-[#151B3D] rounded-[18px] p-4 border border-[#1a2048]">
            <div className="flex items-center gap-1 mb-1">
              <TrendingDown className="w-3.5 h-3.5 text-[#FF5757]" strokeWidth={2.5} />
              <p className="text-[#A0A3BD] text-xs">Spent</p>
            </div>
            <p className="text-white text-lg">$2,534</p>
          </div>
          <div className="bg-[#151B3D] rounded-[18px] p-4 border border-[#1a2048]">
            <div className="flex items-center gap-1 mb-1">
              <TrendingUp className="w-3.5 h-3.5 text-[#00D9A5]" strokeWidth={2.5} />
              <p className="text-[#A0A3BD] text-xs">Income</p>
            </div>
            <p className="text-white text-lg">$4,500</p>
          </div>
          <div className="bg-[#151B3D] rounded-[18px] p-4 border border-[#1a2048]">
            <div className="flex items-center gap-1 mb-1">
              <DollarSign className="w-3.5 h-3.5 text-[#4C6FFF]" strokeWidth={2.5} />
              <p className="text-[#A0A3BD] text-xs">Saved</p>
            </div>
            <p className="text-white text-lg">$1,966</p>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-[#151B3D] rounded-[24px] p-6 border border-[#1a2048] mb-6">
          <h3 className="text-white text-lg mb-6">Category Breakdown</h3>

          {/* Donut Chart Placeholder */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-[20px] border-[#0A0E27]">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#FFB800"
                  strokeWidth="20"
                  strokeDasharray="88 176"
                  strokeDashoffset="0"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#4C6FFF"
                  strokeWidth="20"
                  strokeDasharray="50 214"
                  strokeDashoffset="-88"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#7B61FF"
                  strokeWidth="20"
                  strokeDasharray="45 219"
                  strokeDashoffset="-138"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#FF5757"
                  strokeWidth="20"
                  strokeDasharray="38 226"
                  strokeDashoffset="-183"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#00D9A5"
                  strokeWidth="20"
                  strokeDasharray="30 234"
                  strokeDashoffset="-221"
                />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white text-2xl">$2,534</p>
                <p className="text-[#A0A3BD] text-xs">Total Spent</p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: `${category.color}20` }}
                  >
                    {category.emoji}
                  </div>
                  <div>
                    <p className="text-white text-sm">{category.name}</p>
                    <p className="text-[#A0A3BD] text-xs">{category.percentage}%</p>
                  </div>
                </div>
                <p className="text-white">${category.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Spending Trends */}
        <div className="bg-[#151B3D] rounded-[24px] p-6 border border-[#1a2048] mb-6">
          <h3 className="text-white text-lg mb-4">Spending Trends</h3>
          
          {/* Line chart placeholder */}
          <div className="h-40 flex items-end gap-2">
            {[45, 60, 40, 75, 55, 85, 65, 90, 70, 95, 80, 75].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col gap-1 items-center">
                <div
                  className="w-full bg-gradient-to-t from-[#4C6FFF] to-[#7B61FF] rounded-t-lg"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-[#A0A3BD] text-xs">Jan</span>
            <span className="text-[#A0A3BD] text-xs">Dec</span>
          </div>
        </div>

        {/* Top Expenses */}
        <div className="bg-[#151B3D] rounded-[24px] p-6 border border-[#1a2048] mb-6">
          <h3 className="text-white text-lg mb-4">Highest Expenses</h3>
          <div className="space-y-3">
            {topExpenses.map((expense, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0A0E27] rounded-xl flex items-center justify-center text-lg">
                    {expense.emoji}
                  </div>
                  <div>
                    <p className="text-white">{expense.merchant}</p>
                    <p className="text-[#A0A3BD] text-xs">{expense.category}</p>
                  </div>
                </div>
                <p className="text-[#FF5757]">-${expense.amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="bg-gradient-to-br from-[#4C6FFF]/20 to-[#7B61FF]/20 rounded-[24px] p-6 border border-[#4C6FFF]/30">
          <h3 className="text-white text-lg mb-4">💡 Smart Insights</h3>
          <div className="space-y-3">
            <div className="bg-[#0A0E27]/50 backdrop-blur-sm rounded-[16px] p-4">
              <p className="text-white text-sm">You spent 40% more on food this month</p>
            </div>
            <div className="bg-[#0A0E27]/50 backdrop-blur-sm rounded-[16px] p-4">
              <p className="text-white text-sm">Weekend spending is 2x higher than weekdays</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
