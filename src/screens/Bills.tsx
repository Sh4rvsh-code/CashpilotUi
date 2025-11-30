import { ArrowLeft, Plus, Calendar, Check } from "lucide-react";

interface BillsProps {
  navigate: (screen: string) => void;
}

export function Bills({ navigate }: BillsProps) {
  const upcomingBills = [
    { name: "Netflix Subscription", amount: 19.99, due: "Dec 5", days: 5, category: "Entertainment", emoji: "🎬", color: "#00D9A5", status: "pending" },
    { name: "Electric Bill", amount: 85.50, due: "Dec 8", days: 8, category: "Bills", emoji: "⚡", color: "#FFB800", status: "pending" },
    { name: "Rent", amount: 1200, due: "Dec 1", days: 1, category: "Bills", emoji: "🏠", color: "#FF5757", status: "pending" },
  ];

  const paidBills = [
    { name: "Spotify Premium", amount: 9.99, paidOn: "Nov 28", category: "Entertainment", emoji: "🎵", color: "#00D9A5" },
    { name: "Internet Bill", amount: 59.99, paidOn: "Nov 25", category: "Bills", emoji: "📡", color: "#4C6FFF" },
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
          <h1 className="text-2xl text-white flex-1">Bills & Reminders</h1>
          <button className="w-10 h-10 bg-gradient-to-br from-[#4C6FFF] to-[#7B61FF] rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all">
            <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Upcoming Bills */}
      <div className="px-6 mb-8">
        <h3 className="text-white text-lg mb-4">Due Soon</h3>
        <div className="space-y-3">
          {upcomingBills.map((bill, index) => (
            <div
              key={index}
              className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048] hover:border-[#4C6FFF]/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${bill.color}20` }}
                >
                  {bill.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-white">{bill.name}</p>
                  <p className="text-[#A0A3BD] text-sm">{bill.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-white text-lg">${bill.amount}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#1a2048]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#A0A3BD]" strokeWidth={2} />
                  <p className="text-[#A0A3BD] text-sm">
                    Due {bill.due} · {bill.days} days
                  </p>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF] rounded-xl text-white text-sm hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all active:scale-95">
                  Mark as Paid
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Paid Bills */}
      <div className="px-6">
        <h3 className="text-white text-lg mb-4">Paid This Month</h3>
        <div className="space-y-3">
          {paidBills.map((bill, index) => (
            <div
              key={index}
              className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048] opacity-60"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${bill.color}20` }}
                >
                  {bill.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-white">{bill.name}</p>
                  <div className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-[#00D9A5]" strokeWidth={2.5} />
                    <p className="text-[#A0A3BD] text-sm">Paid on {bill.paidOn}</p>
                  </div>
                </div>
                <p className="text-white">${bill.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
