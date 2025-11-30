import { useState } from "react";
import { X, Calendar, FileText, Camera, Image } from "lucide-react";

interface AddTransactionProps {
  navigate: (screen: string) => void;
}

export function AddTransaction({ navigate }: AddTransactionProps) {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"expense" | "income">("expense");
  const [selectedCategory, setSelectedCategory] = useState("Food & Dining");
  const [note, setNote] = useState("");

  const categories = [
    { name: "Food & Dining", emoji: "🍔", color: "#FFB800" },
    { name: "Transportation", emoji: "🚗", color: "#4C6FFF" },
    { name: "Shopping", emoji: "🛍️", color: "#7B61FF" },
    { name: "Bills", emoji: "📄", color: "#FF5757" },
    { name: "Entertainment", emoji: "🎬", color: "#00D9A5" },
    { name: "Health", emoji: "⚕️", color: "#FFB800" },
    { name: "Groceries", emoji: "🛒", color: "#00D9A5" },
    { name: "Others", emoji: "📦", color: "#A0A3BD" },
  ];

  const handleNumberClick = (num: string) => {
    if (num === "." && amount.includes(".")) return;
    setAmount(amount + num);
  };

  const handleDelete = () => {
    setAmount(amount.slice(0, -1));
  };

  const handleSave = () => {
    // Save transaction logic
    navigate("home");
  };

  return (
    <div className="h-full w-full bg-[#0A0E27] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 flex items-center justify-between">
        <h1 className="text-2xl text-white">
          Add {type === "expense" ? "Expense" : "Income"}
        </h1>
        <button
          onClick={() => navigate("home")}
          className="w-10 h-10 bg-[#151B3D] rounded-2xl flex items-center justify-center hover:bg-[#1a2048] transition-colors"
        >
          <X className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
        </button>
      </div>

      {/* Amount Display */}
      <div className="px-6 mb-6">
        <div className="text-center py-8">
          <p className="text-[#A0A3BD] text-sm mb-2">Amount</p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-4xl text-[#A0A3BD]">$</span>
            <span className="text-5xl text-white">
              {amount || "0"}
            </span>
          </div>
        </div>
      </div>

      {/* Type Toggle */}
      <div className="px-6 mb-6">
        <div className="bg-[#151B3D] rounded-[20px] p-1.5 flex">
          <button
            onClick={() => setType("expense")}
            className={`flex-1 py-2.5 rounded-[16px] transition-all ${
              type === "expense"
                ? "bg-gradient-to-r from-[#FF5757] to-[#FF5757]/80 text-white"
                : "text-[#A0A3BD]"
            }`}
          >
            Expense
          </button>
          <button
            onClick={() => setType("income")}
            className={`flex-1 py-2.5 rounded-[16px] transition-all ${
              type === "income"
                ? "bg-gradient-to-r from-[#00D9A5] to-[#00D9A5]/80 text-white"
                : "text-[#A0A3BD]"
            }`}
          >
            Income
          </button>
        </div>
      </div>

      {/* Category Selector */}
      <div className="px-6 mb-6">
        <p className="text-[#A0A3BD] text-sm mb-3">Category</p>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex-shrink-0 px-4 py-3 rounded-[16px] flex items-center gap-2 transition-all ${
                selectedCategory === category.name
                  ? "border-2"
                  : "bg-[#151B3D] border-2 border-transparent"
              }`}
              style={{
                background: selectedCategory === category.name ? `${category.color}20` : undefined,
                borderColor: selectedCategory === category.name ? category.color : undefined,
              }}
            >
              <span className="text-xl">{category.emoji}</span>
              <span
                className={`text-sm whitespace-nowrap ${
                  selectedCategory === category.name ? "text-white" : "text-[#A0A3BD]"
                }`}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Date & Note */}
      <div className="px-6 mb-6 space-y-3">
        <button className="w-full bg-[#151B3D] rounded-[16px] p-4 flex items-center gap-3 hover:bg-[#1a2048] transition-colors">
          <Calendar className="w-5 h-5 text-[#4C6FFF]" strokeWidth={2} />
          <span className="text-white">Today, 2:30 PM</span>
        </button>

        <div className="bg-[#151B3D] rounded-[16px] p-4 flex items-start gap-3">
          <FileText className="w-5 h-5 text-[#4C6FFF] mt-1" strokeWidth={2} />
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add a note..."
            className="flex-1 bg-transparent text-white placeholder-[#A0A3BD] outline-none"
          />
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-[#151B3D] rounded-[16px] p-4 flex items-center justify-center gap-2 hover:bg-[#1a2048] transition-colors">
            <Camera className="w-5 h-5 text-[#4C6FFF]" strokeWidth={2} />
            <span className="text-[#A0A3BD] text-sm">Camera</span>
          </button>
          <button className="flex-1 bg-[#151B3D] rounded-[16px] p-4 flex items-center justify-center gap-2 hover:bg-[#1a2048] transition-colors">
            <Image className="w-5 h-5 text-[#4C6FFF]" strokeWidth={2} />
            <span className="text-[#A0A3BD] text-sm">Gallery</span>
          </button>
        </div>
      </div>

      {/* Number Pad */}
      <div className="flex-1" />
      <div className="px-6 pb-8">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="aspect-square bg-[#151B3D] rounded-[16px] text-white text-xl hover:bg-[#1a2048] active:scale-95 transition-all"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleNumberClick(".")}
            className="aspect-square bg-[#151B3D] rounded-[16px] text-white text-xl hover:bg-[#1a2048] active:scale-95 transition-all"
          >
            .
          </button>
          <button
            onClick={() => handleNumberClick("0")}
            className="aspect-square bg-[#151B3D] rounded-[16px] text-white text-xl hover:bg-[#1a2048] active:scale-95 transition-all"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="aspect-square bg-[#151B3D] rounded-[16px] text-white text-xl hover:bg-[#1a2048] active:scale-95 transition-all"
          >
            ←
          </button>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={!amount || amount === "0"}
          className="w-full h-14 bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF] rounded-[20px] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all active:scale-95"
        >
          Save Transaction
        </button>
      </div>
    </div>
  );
}
