import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export function HeroCard() {
  const stats = {
    income: 8750.00,
    expenses: 5243.80,
    remaining: 3506.20,
  };

  const trendData = [30, 45, 35, 50, 42, 55, 48, 60, 52, 65, 58, 70];

  return (
    <div className="relative bg-gradient-to-br from-[#1A1A1A] to-[#141414] rounded-[22px] p-6 shadow-2xl shadow-black/50 overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#3A7CFF]/20 to-transparent rounded-full blur-3xl" />
      
      <div className="relative">
        {/* Title */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[#B3B3B3] text-sm tracking-wide">
            This Month's Overview
          </h2>
          <div className="px-3 py-1 bg-[#3A7CFF]/10 rounded-full">
            <span className="text-xs text-[#6AA8FF]">November 2025</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-5">
          {/* Income */}
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2.5} />
              <span className="text-xs text-[#808080]">Income</span>
            </div>
            <p className="text-lg text-white">
              ${stats.income.toLocaleString()}
            </p>
          </div>

          {/* Expenses */}
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5 text-rose-400" strokeWidth={2.5} />
              <span className="text-xs text-[#808080]">Expenses</span>
            </div>
            <p className="text-lg text-white">
              ${stats.expenses.toLocaleString()}
            </p>
          </div>

          {/* Remaining */}
          <div className="space-y-1">
            <div className="flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5 text-[#3A7CFF]" strokeWidth={2.5} />
              <span className="text-xs text-[#808080]">Remaining</span>
            </div>
            <p className="text-lg text-white">
              ${stats.remaining.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Mini Trend Graph */}
        <div className="h-16 flex items-end gap-1 mt-4">
          {trendData.map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-gradient-to-t from-[#3A7CFF] to-[#6AA8FF] rounded-t-sm opacity-60 hover:opacity-100 transition-opacity duration-200"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>

        {/* Trend Label */}
        <div className="mt-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-[#3A7CFF] rounded-full animate-pulse" />
          <span className="text-xs text-[#808080]">Spending trend</span>
        </div>
      </div>
    </div>
  );
}
