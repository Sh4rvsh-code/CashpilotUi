import { Wallet, Building2, CreditCard } from "lucide-react";

export function AccountsWidget() {
  const totalBalance = 24567.45;
  const accountsConnected = 3;
  const percentage = 68;

  return (
    <div className="bg-[#141414] rounded-[20px] p-4 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 transition-all duration-200">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Wallet className="w-4 h-4 text-[#3A7CFF]" strokeWidth={2} />
        <h3 className="text-sm text-white">Accounts</h3>
      </div>

      {/* Total Balance */}
      <div className="mb-4">
        <p className="text-xs text-[#808080] mb-1">Total Balance</p>
        <p className="text-xl text-white">
          ${totalBalance.toLocaleString()}
        </p>
      </div>

      {/* Connected Accounts */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-3.5 h-3.5 text-[#808080]" strokeWidth={2} />
          <span className="text-xs text-[#808080]">
            {accountsConnected} banks connected
          </span>
        </div>
        <div className="flex items-center gap-2">
          <CreditCard className="w-3.5 h-3.5 text-[#808080]" strokeWidth={2} />
          <span className="text-xs text-[#808080]">2 cards linked</span>
        </div>
      </div>

      {/* Progress Indicator */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[#808080]">Budget used</span>
          <span className="text-xs text-[#3A7CFF]">{percentage}%</span>
        </div>
        <div className="h-1.5 bg-[#1A1A1A] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#3A7CFF] to-[#6AA8FF] rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
