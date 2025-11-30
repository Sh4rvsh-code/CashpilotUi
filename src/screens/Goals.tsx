import { ArrowLeft, Plus, Target } from "lucide-react";

interface GoalsProps {
  navigate: (screen: string) => void;
}

export function Goals({ navigate }: GoalsProps) {
  const activeGoals = [
    { name: "New Laptop", current: 1500, target: 8000, emoji: "💻", deadline: "6 months", color: "#4C6FFF", status: "on-track" },
    { name: "Vacation to Bali", current: 2200, target: 5000, emoji: "✈️", deadline: "8 months", color: "#7B61FF", status: "on-track" },
    { name: "Emergency Fund", current: 3500, target: 10000, emoji: "🛡️", deadline: "12 months", color: "#00D9A5", status: "on-track" },
  ];

  const completedGoals = [
    { name: "New Phone", amount: 1200, emoji: "📱", color: "#FFB800" },
  ];

  return (
    <div className="h-full w-full bg-[#0A0E27] overflow-y-auto pb-8">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("settings")}
            className="w-10 h-10 bg-[#151B3D] rounded-2xl flex items-center justify-center hover:bg-[#1a2048] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          </button>
          <h1 className="text-2xl text-white flex-1">Savings Goals</h1>
          <button className="w-10 h-10 bg-gradient-to-br from-[#4C6FFF] to-[#7B61FF] rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all">
            <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Active Goals */}
      <div className="px-6 mb-8">
        <h3 className="text-white text-lg mb-4">Active Goals</h3>
        <div className="space-y-4">
          {activeGoals.map((goal, index) => {
            const percentage = Math.round((goal.current / goal.target) * 100);
            
            return (
              <div
                key={index}
                className="bg-[#151B3D] rounded-[24px] p-6 border border-[#1a2048] hover:border-[#4C6FFF]/50 transition-all"
              >
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: `${goal.color}20` }}
                  >
                    {goal.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-lg">{goal.name}</p>
                    <p className="text-[#A0A3BD] text-sm">{goal.deadline} left</p>
                  </div>
                </div>

                {/* Progress Ring */}
                <div className="relative w-32 h-32 mx-auto mb-4">
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
                      stroke={goal.color}
                      strokeWidth="8"
                      strokeDasharray={`${percentage * 2.51} 251`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl text-white">{percentage}%</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-[#A0A3BD] text-xs mb-1">Current</p>
                    <p className="text-white text-lg">${goal.current.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#A0A3BD] text-xs mb-1">Target</p>
                    <p className="text-white text-lg">${goal.target.toLocaleString()}</p>
                  </div>
                </div>

                {/* Add Money Button */}
                <button className="w-full h-11 bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF] rounded-[16px] text-white hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all active:scale-95 flex items-center justify-center gap-2">
                  <Plus className="w-4 h-4" strokeWidth={2.5} />
                  Add Money
                </button>

                {/* Status */}
                <div className="mt-3 flex items-center justify-center gap-2">
                  <Target className="w-4 h-4 text-[#00D9A5]" strokeWidth={2} />
                  <p className="text-[#00D9A5] text-sm">On Track</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Completed Goals */}
      <div className="px-6">
        <h3 className="text-white text-lg mb-4">Completed Goals 🎉</h3>
        <div className="space-y-3">
          {completedGoals.map((goal, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#00D9A5]/20 to-[#00D9A5]/10 rounded-[20px] p-4 border border-[#00D9A5]/30"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${goal.color}20` }}
                >
                  {goal.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-white">{goal.name}</p>
                  <p className="text-[#00D9A5] text-sm">✓ Completed</p>
                </div>
                <p className="text-white">${goal.amount.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
