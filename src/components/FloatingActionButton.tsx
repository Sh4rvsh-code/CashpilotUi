import { Plus } from "lucide-react";
import { useState } from "react";

export function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const actions = [
    { label: "Add Expense", emoji: "💰" },
    { label: "Add Income", emoji: "💵" },
    { label: "Add Bill", emoji: "🧾" },
  ];

  return (
    <div className="fixed bottom-24 right-5 z-40">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 space-y-2 mb-2">
          {actions.map((action, index) => (
            <button
              key={index}
              className="flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#252525] text-white px-4 py-3 rounded-2xl shadow-2xl shadow-black/50 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
              onClick={() => setIsExpanded(false)}
            >
              <span className="text-lg">{action.emoji}</span>
              <span className="text-sm">{action.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 bg-gradient-to-br from-[#3A7CFF] to-[#6AA8FF] rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
          isExpanded ? "rotate-45 shadow-[#3A7CFF]/60" : "shadow-[#3A7CFF]/40"
        }`}
      >
        <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
      </button>
    </div>
  );
}
