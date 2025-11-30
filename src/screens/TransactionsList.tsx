import { useState } from "react";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { BottomNavigation } from "../components/BottomNavigation";
import { useApp } from "../context/AppContext";

interface TransactionsListProps {
  navigate: (screen: string, data?: any) => void;
}

export function TransactionsList({ navigate }: TransactionsListProps) {
  const { transactions } = useApp();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("transactions");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Today", "This Week", "This Month", "Custom"];

  const groupedTransactions = transactions.reduce((groups: any, transaction) => {
    const date = transaction.date.toDateString();
    const label =
      date === new Date().toDateString()
        ? "Today"
        : date === new Date(Date.now() - 86400000).toDateString()
        ? "Yesterday"
        : transaction.date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

    if (!groups[label]) {
      groups[label] = [];
    }
    groups[label].push(transaction);
    return groups;
  }, {});

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(tab);
  };

  return (
    <div className="h-full w-full bg-[#0A0E27] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("home")}
            className="w-10 h-10 bg-[#151B3D] rounded-2xl flex items-center justify-center hover:bg-[#1a2048] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          </button>
          <h1 className="text-2xl text-white flex-1">All Transactions</h1>
          <button className="w-10 h-10 bg-[#151B3D] rounded-2xl flex items-center justify-center hover:bg-[#1a2048] transition-colors">
            <SlidersHorizontal className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 bg-[#151B3D] rounded-[20px] pl-12 pr-4 text-white placeholder-[#A0A3BD] border-2 border-transparent focus:border-[#4C6FFF] outline-none transition-colors"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm transition-all ${
                selectedFilter === filter
                  ? "bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF] text-white"
                  : "bg-[#151B3D] text-[#A0A3BD] hover:bg-[#1a2048]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Transaction List */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        {Object.entries(groupedTransactions).map(([date, txns]: [string, any]) => (
          <div key={date} className="mb-6">
            <h3 className="text-[#A0A3BD] text-sm mb-3">{date}</h3>
            <div className="space-y-2">
              {txns.map((transaction: any) => (
                <button
                  key={transaction.id}
                  onClick={() => navigate("transaction-detail", transaction)}
                  className="w-full bg-[#151B3D] rounded-[18px] p-4 border border-[#1a2048] hover:border-[#4C6FFF]/50 transition-all flex items-center gap-3"
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl"
                    style={{ background: `${transaction.categoryColor}20` }}
                  >
                    {transaction.category === "Food & Dining" ? "🍔" :
                     transaction.category === "Shopping" ? "🛍️" :
                     transaction.category === "Income" ? "💰" :
                     transaction.category === "Transportation" ? "🚗" : "🛒"}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-white">{transaction.merchant}</p>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: `${transaction.categoryColor}20`,
                          color: transaction.categoryColor,
                        }}
                      >
                        {transaction.category}
                      </span>
                      <span className="text-[#A0A3BD] text-xs">{transaction.time}</span>
                    </div>
                  </div>
                  <p
                    className={`text-base ${
                      transaction.type === "income" ? "text-[#00D9A5]" : "text-[#FF5757]"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
