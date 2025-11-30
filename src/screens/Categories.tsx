import { ArrowLeft, Plus, MoreVertical } from "lucide-react";

interface CategoriesProps {
  navigate: (screen: string) => void;
}

export function Categories({ navigate }: CategoriesProps) {
  const defaultCategories = [
    { name: "Food & Dining", emoji: "🍔", color: "#FFB800", count: 45, total: 886 },
    { name: "Transportation", emoji: "🚗", color: "#4C6FFF", count: 32, total: 506 },
    { name: "Shopping", emoji: "🛍️", color: "#7B61FF", count: 28, total: 456 },
    { name: "Bills", emoji: "📄", color: "#FF5757", count: 12, total: 380 },
    { name: "Entertainment", emoji: "🎬", color: "#00D9A5", count: 18, total: 230 },
    { name: "Health", emoji: "⚕️", color: "#FFB800", count: 8, total: 145 },
    { name: "Groceries", emoji: "🛒", color: "#00D9A5", count: 15, total: 320 },
    { name: "Education", emoji: "📚", color: "#4C6FFF", count: 5, total: 180 },
  ];

  const customCategories = [
    { name: "Coffee", emoji: "☕", color: "#7B61FF", count: 24, total: 120 },
    { name: "Gym", emoji: "💪", color: "#00D9A5", count: 12, total: 150 },
  ];

  return (
    <div className="h-full w-full bg-[#0A0E27] overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("settings")}
            className="w-10 h-10 bg-[#151B3D] rounded-2xl flex items-center justify-center hover:bg-[#1a2048] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          </button>
          <h1 className="text-2xl text-white flex-1">Categories</h1>
          <button className="w-10 h-10 bg-gradient-to-br from-[#4C6FFF] to-[#7B61FF] rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all">
            <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Default Categories */}
      <div className="px-6 mb-8">
        <h3 className="text-[#A0A3BD] text-sm mb-4">Default Categories</h3>
        <div className="grid grid-cols-2 gap-3">
          {defaultCategories.map((category) => (
            <div
              key={category.name}
              className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048] hover:border-[#4C6FFF]/50 transition-all relative"
            >
              <button className="absolute top-3 right-3 w-6 h-6 bg-[#0A0E27] rounded-lg flex items-center justify-center hover:bg-[#1a2048] transition-colors">
                <MoreVertical className="w-4 h-4 text-[#A0A3BD]" strokeWidth={2} />
              </button>

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-3"
                style={{ background: `${category.color}20` }}
              >
                {category.emoji}
              </div>

              <p className="text-white mb-1 pr-6">{category.name}</p>
              <p className="text-[#A0A3BD] text-xs">{category.count} transactions</p>
              <p className="text-white text-sm mt-2">${category.total}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Categories */}
      <div className="px-6 pb-8">
        <h3 className="text-[#A0A3BD] text-sm mb-4">My Categories</h3>
        <div className="grid grid-cols-2 gap-3">
          {customCategories.map((category) => (
            <div
              key={category.name}
              className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048] hover:border-[#4C6FFF]/50 transition-all relative"
            >
              <button className="absolute top-3 right-3 w-6 h-6 bg-[#0A0E27] rounded-lg flex items-center justify-center hover:bg-[#1a2048] transition-colors">
                <MoreVertical className="w-4 h-4 text-[#A0A3BD]" strokeWidth={2} />
              </button>

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-3"
                style={{ background: `${category.color}20` }}
              >
                {category.emoji}
              </div>

              <p className="text-white mb-1 pr-6">{category.name}</p>
              <p className="text-[#A0A3BD] text-xs">{category.count} transactions</p>
              <p className="text-white text-sm mt-2">${category.total}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
