import { useState } from "react";
import { ArrowLeft, Plus, Wallet, Building2, CreditCard } from "lucide-react";
import { BottomNavigation } from "../components/BottomNavigation";
import { useApp } from "../context/AppContext";

interface AccountsProps {
  navigate: (screen: string) => void;
}

export function Accounts({ navigate }: AccountsProps) {
  const { accounts } = useApp();
  const [activeTab, setActiveTab] = useState("accounts");

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  const getAccountIcon = (type: string) => {
    switch (type) {
      case "cash":
        return Wallet;
      case "bank":
        return Building2;
      case "card":
        return CreditCard;
      default:
        return Wallet;
    }
  };

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
          <h1 className="text-2xl text-white flex-1">Accounts & Balances</h1>
          <button className="w-10 h-10 bg-gradient-to-br from-[#4C6FFF] to-[#7B61FF] rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all">
            <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        {/* Total Balance Card */}
        <div className="bg-gradient-to-br from-[#151B3D] to-[#1a2048] rounded-[28px] p-6 border border-[#1a2048] mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#4C6FFF]/20 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <p className="text-[#A0A3BD] text-sm mb-2">Total Balance Across All Accounts</p>
            <h2 className="text-4xl text-white mb-4">${totalBalance.toLocaleString()}</h2>
            
            {/* Distribution */}
            <div className="flex gap-2">
              {accounts.map((account, index) => (
                <div
                  key={account.id}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: `${(account.balance / totalBalance) * 100}%`,
                    background: account.color,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Account List */}
        <div className="space-y-3">
          {accounts.map((account) => {
            const Icon = getAccountIcon(account.type);
            
            return (
              <div
                key={account.id}
                className="bg-[#151B3D] rounded-[20px] p-5 border border-[#1a2048] hover:border-[#4C6FFF]/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${account.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: account.color }} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-lg">{account.name}</p>
                    <p className="text-[#A0A3BD] text-sm capitalize">{account.type}</p>
                  </div>
                  <button className="w-8 h-8 bg-[#0A0E27] rounded-lg flex items-center justify-center hover:bg-[#1a2048] transition-colors">
                    <span className="text-[#A0A3BD]">⋯</span>
                  </button>
                </div>

                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-[#A0A3BD] text-xs mb-1">Current Balance</p>
                    <p className="text-white text-2xl">${account.balance.toLocaleString()}</p>
                  </div>
                  <p className="text-[#A0A3BD] text-xs">Updated just now</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
