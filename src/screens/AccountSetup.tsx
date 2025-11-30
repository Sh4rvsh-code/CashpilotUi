import { useState } from "react";
import { Wallet, Building2, CreditCard, Smartphone, Plus, Check } from "lucide-react";
import { useApp } from "../context/AppContext";

interface AccountSetupProps {
  onComplete: () => void;
}

export function AccountSetup({ onComplete }: AccountSetupProps) {
  const { setAccounts } = useApp();
  const [selectedAccounts, setSelectedAccounts] = useState<any[]>([
    { type: "cash", name: "Cash", balance: "", icon: Wallet, color: "#00D9A5" },
  ]);

  const accountTypes = [
    { type: "cash", label: "Cash", icon: Wallet, color: "#00D9A5" },
    { type: "bank", label: "Bank Account", icon: Building2, color: "#4C6FFF" },
    { type: "card", label: "Credit Card", icon: CreditCard, color: "#7B61FF" },
    { type: "wallet", label: "UPI Wallet", icon: Smartphone, color: "#FFB800" },
  ];

  const updateAccount = (index: number, field: string, value: string) => {
    const updated = [...selectedAccounts];
    updated[index] = { ...updated[index], [field]: value };
    setSelectedAccounts(updated);
  };

  const addAccount = (type: any) => {
    setSelectedAccounts([
      ...selectedAccounts,
      { type: type.type, name: type.label, balance: "", icon: type.icon, color: type.color },
    ]);
  };

  const handleComplete = () => {
    const accounts = selectedAccounts
      .filter((acc) => acc.name && acc.balance)
      .map((acc, index) => ({
        id: index + 1,
        name: acc.name,
        type: acc.type,
        balance: Number(acc.balance),
        color: acc.color,
      }));
    setAccounts(accounts);
    onComplete();
  };

  return (
    <div className="h-full w-full bg-[#0A0E27] flex flex-col">
      {/* Header */}
      <div className="pt-16 px-6 pb-6">
        <h1 className="text-3xl text-white mb-2">
          Add Your Accounts
        </h1>
        <p className="text-[#A0A3BD]">Set up your financial accounts</p>
      </div>

      {/* Account list */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        <div className="space-y-4">
          {selectedAccounts.map((account, index) => {
            const Icon = account.icon;
            return (
              <div
                key={index}
                className="bg-[#151B3D]/50 backdrop-blur-xl rounded-[20px] p-4 border-2 border-[#1a2048]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${account.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: account.color }} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={account.name}
                      onChange={(e) => updateAccount(index, "name", e.target.value)}
                      placeholder="Account name"
                      className="w-full bg-transparent text-white outline-none text-base"
                    />
                  </div>
                </div>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A3BD]">$</span>
                  <input
                    type="number"
                    value={account.balance}
                    onChange={(e) => updateAccount(index, "balance", e.target.value)}
                    placeholder="0.00"
                    className="w-full h-12 bg-[#0A0E27] rounded-xl pl-10 pr-4 text-white outline-none border-2 border-transparent focus:border-[#4C6FFF] transition-colors"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Add account buttons */}
        <div className="mt-6 space-y-2">
          <p className="text-[#A0A3BD] text-sm mb-3">Add another account:</p>
          {accountTypes.map((type) => {
            const Icon = type.icon;
            const isAdded = selectedAccounts.some((acc) => acc.type === type.type);
            return (
              <button
                key={type.type}
                onClick={() => !isAdded && addAccount(type)}
                disabled={isAdded}
                className={`w-full p-4 rounded-2xl flex items-center gap-3 transition-all ${
                  isAdded
                    ? "bg-[#151B3D]/30 opacity-50"
                    : "bg-[#151B3D] hover:bg-[#1a2048]"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${type.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: type.color }} strokeWidth={2} />
                </div>
                <span className="flex-1 text-left text-white">{type.label}</span>
                {isAdded ? (
                  <Check className="w-5 h-5 text-[#00D9A5]" strokeWidth={2.5} />
                ) : (
                  <Plus className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Complete button */}
      <div className="fixed bottom-0 left-0 right-0 px-6 pb-8 pt-4 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27] to-transparent">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleComplete}
            className="w-full h-14 bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF] rounded-2xl text-white hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all active:scale-95"
          >
            Complete Setup
          </button>
        </div>
      </div>
    </div>
  );
}
