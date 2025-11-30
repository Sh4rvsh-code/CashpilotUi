import { ArrowLeft, Edit2, Trash2, Share2, Calendar, Wallet, FileText } from "lucide-react";

interface TransactionDetailProps {
  transaction: any;
  navigate: (screen: string) => void;
}

export function TransactionDetail({ transaction, navigate }: TransactionDetailProps) {
  if (!transaction) {
    navigate("transactions");
    return null;
  }

  return (
    <div className="h-full w-full bg-[#0A0E27] overflow-y-auto">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("transactions")}
            className="w-10 h-10 bg-[#151B3D] rounded-2xl flex items-center justify-center hover:bg-[#1a2048] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          </button>
          <h1 className="text-2xl text-white flex-1">Transaction Detail</h1>
        </div>

        {/* Type Badge */}
        <div className="flex justify-center mb-4">
          <span
            className={`px-4 py-2 rounded-full text-sm ${
              transaction.type === "income"
                ? "bg-[#00D9A5]/20 text-[#00D9A5]"
                : "bg-[#FF5757]/20 text-[#FF5757]"
            }`}
          >
            {transaction.type === "income" ? "Income" : "Expense"}
          </span>
        </div>

        {/* Amount */}
        <div className="text-center mb-8">
          <p
            className={`text-5xl ${
              transaction.type === "income" ? "text-[#00D9A5]" : "text-[#FF5757]"
            }`}
          >
            {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Transaction Info */}
      <div className="px-6 space-y-4">
        {/* Merchant */}
        <div className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048]">
          <p className="text-[#A0A3BD] text-xs mb-2">Merchant</p>
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: `${transaction.categoryColor}20` }}
            >
              {transaction.category === "Food & Dining" ? "🍔" :
               transaction.category === "Shopping" ? "🛍️" :
               transaction.category === "Income" ? "💰" :
               transaction.category === "Transportation" ? "🚗" : "🛒"}
            </div>
            <p className="text-white text-lg">{transaction.merchant}</p>
          </div>
        </div>

        {/* Category */}
        <div className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048]">
          <p className="text-[#A0A3BD] text-xs mb-2">Category</p>
          <span
            className="inline-flex px-3 py-1.5 rounded-full text-sm"
            style={{
              background: `${transaction.categoryColor}20`,
              color: transaction.categoryColor,
            }}
          >
            {transaction.category}
          </span>
        </div>

        {/* Date & Time */}
        <div className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048]">
          <p className="text-[#A0A3BD] text-xs mb-2">Date & Time</p>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#4C6FFF]" strokeWidth={2} />
            <p className="text-white">
              {transaction.date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              at {transaction.time}
            </p>
          </div>
        </div>

        {/* Account */}
        <div className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048]">
          <p className="text-[#A0A3BD] text-xs mb-2">Account</p>
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-[#4C6FFF]" strokeWidth={2} />
            <p className="text-white">{transaction.account}</p>
          </div>
        </div>

        {/* Note */}
        {transaction.note && (
          <div className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048]">
            <p className="text-[#A0A3BD] text-xs mb-2">Note</p>
            <div className="flex items-start gap-2">
              <FileText className="w-5 h-5 text-[#4C6FFF] mt-0.5" strokeWidth={2} />
              <p className="text-white">{transaction.note}</p>
            </div>
          </div>
        )}

        {/* Original SMS */}
        <div className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048]">
          <div className="flex items-center gap-2 mb-2">
            <p className="text-[#A0A3BD] text-xs">Original SMS</p>
            <span className="px-2 py-0.5 bg-[#4C6FFF]/20 text-[#4C6FFF] rounded text-xs">
              Auto-detected
            </span>
          </div>
          <p className="text-[#A0A3BD] text-sm leading-relaxed">
            Your account has been debited with ${transaction.amount.toFixed(2)} at {transaction.merchant}.
            Available balance: $5,280.00
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 py-8 space-y-3">
        <div className="flex gap-3">
          <button className="flex-1 h-12 bg-[#151B3D] rounded-[16px] flex items-center justify-center gap-2 hover:bg-[#1a2048] transition-colors">
            <Edit2 className="w-4 h-4 text-[#4C6FFF]" strokeWidth={2} />
            <span className="text-white">Edit</span>
          </button>
          <button className="flex-1 h-12 bg-[#151B3D] rounded-[16px] flex items-center justify-center gap-2 hover:bg-[#1a2048] transition-colors">
            <Share2 className="w-4 h-4 text-[#4C6FFF]" strokeWidth={2} />
            <span className="text-white">Share</span>
          </button>
        </div>
        <button className="w-full h-12 bg-[#FF5757]/20 rounded-[16px] flex items-center justify-center gap-2 hover:bg-[#FF5757]/30 transition-colors">
          <Trash2 className="w-4 h-4 text-[#FF5757]" strokeWidth={2} />
          <span className="text-[#FF5757]">Delete Transaction</span>
        </button>
      </div>
    </div>
  );
}
