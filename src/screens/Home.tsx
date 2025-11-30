import { useState } from "react";
import { Settings, TrendingUp, TrendingDown, Plus, ChevronRight } from "lucide-react";
import { BottomNavigation } from "../components/BottomNavigation";
import { useApp } from "../context/AppContext";

interface HomeProps {
  navigate: (screen: string, data?: any) => void;
}

export function Home({ navigate }: HomeProps) {
  const { accounts, transactions } = useApp();
  const [activeTab, setActiveTab] = useState("home");

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);
  const todaySpent = 850;
  const weekSpent = 5240;
  const budgetUsed = 62;
  const savings = 12000;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(tab);
  };

  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="h-full w-full bg-[#0A0E27] overflow-y-auto pb-32">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl text-white mb-1">
              Good Evening 👋
            </h1>
            <p className="text-[#A0A3BD] text-sm">Sunday, Nov 30</p>
          </div>
          <button
            onClick={() => navigate("settings")}
            className="w-10 h-10 bg-[#151B3D] rounded-2xl flex items-center justify-center hover:bg-[#1a2048] transition-colors"
          >
            <Settings className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Balance Card */}
      <div className="px-6 mb-6">
        <div className="bg-gradient-to-br from-[#151B3D] to-[#1a2048] rounded-[28px] p-6 border border-[#1a2048] relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#4C6FFF]/20 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <p className="text-[#A0A3BD] text-sm mb-2">Total Balance</p>
            <h2 className="text-4xl text-white mb-4">
              ${totalBalance.toLocaleString()}
            </h2>
            <div className="flex items-center gap-2 text-[#00D9A5]">
              <TrendingUp className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-sm">+$5,200 this month</span>
            </div>
          </div>

          {/* Account chips */}
          <div className="flex gap-2 mt-4 relative z-10">
            {accounts.slice(0, 3).map((account) => (
              <div
                key={account.id}
                className="flex-1 bg-[#0A0E27]/50 backdrop-blur-sm rounded-xl p-2"
              >
                <p className="text-[#A0A3BD] text-xs truncate">{account.name}</p>
                <p className="text-white text-sm">${account.balance.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048]">
            <p className="text-[#A0A3BD] text-xs mb-1">Today's Spending</p>
            <p className="text-xl text-white">${todaySpent}</p>
          </div>
          <div className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048]">
            <p className="text-[#A0A3BD] text-xs mb-1">This Week</p>
            <p className="text-xl text-white">${weekSpent.toLocaleString()}</p>
          </div>
          <div className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048]">
            <p className="text-[#A0A3BD] text-xs mb-1">Budget Used</p>
            <div className="flex items-center gap-2">
              <p className="text-xl text-white">{budgetUsed}%</p>
              <div className="flex-1 h-1.5 bg-[#0A0E27] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF]" style={{ width: `${budgetUsed}%` }} />
              </div>
            </div>
          </div>
          <div className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048]">
            <p className="text-[#A0A3BD] text-xs mb-1">Savings</p>
            <p className="text-xl text-white">${savings.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Monthly Overview */}
      <div className="px-6 mb-6">
        <div className="bg-[#151B3D] rounded-[20px] p-5 border border-[#1a2048]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white">November 2025</h3>
            <button className="text-[#4C6FFF] text-sm">View Details</button>
          </div>
          
          {/* Mini bar chart */}
          <div className="flex items-end gap-1.5 h-20">
            {[45, 60, 40, 75, 55, 85, 65, 90].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-[#4C6FFF] to-[#7B61FF] rounded-t-lg opacity-70 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg">Recent Transactions</h3>
          <button
            onClick={() => navigate("transactions")}
            className="text-[#4C6FFF] text-sm flex items-center gap-1"
          >
            See All
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        <div className="space-y-2">
          {recentTransactions.map((transaction) => (
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

      {/* Floating Action Button */}
      <button
        onClick={() => navigate("add-transaction")}
        className="fixed bottom-28 right-6 z-40 w-14 h-14 bg-gradient-to-br from-[#4C6FFF] to-[#7B61FF] rounded-[20px] flex items-center justify-center shadow-2xl shadow-[#4C6FFF]/50 hover:scale-110 active:scale-95 transition-all"
      >
        <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
      </button>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
