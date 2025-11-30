import { Receipt, Coffee, ShoppingBag } from "lucide-react";

export function TransactionsWidget() {
  const transactions = [
    {
      icon: Coffee,
      name: "Starbucks",
      category: "Food",
      amount: -12.50,
      color: "#F59E0B",
    },
    {
      icon: ShoppingBag,
      name: "Amazon",
      category: "Shopping",
      amount: -89.99,
      color: "#8B5CF6",
    },
  ];

  return (
    <div className="bg-[#141414] rounded-[20px] p-4 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 transition-all duration-200">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Receipt className="w-4 h-4 text-[#3A7CFF]" strokeWidth={2} />
        <h3 className="text-sm text-white">Recent</h3>
      </div>

      {/* Transactions */}
      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${transaction.color}20` }}
            >
              <transaction.icon className="w-4 h-4" style={{ color: transaction.color }} strokeWidth={2} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate">{transaction.name}</p>
              <p className="text-xs text-[#808080]">{transaction.category}</p>
            </div>
            <p className="text-sm text-rose-400">
              ${Math.abs(transaction.amount).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <button className="w-full mt-4 pt-3 border-t border-[#1A1A1A] text-xs text-[#3A7CFF] hover:text-[#6AA8FF] transition-colors">
        View all transactions →
      </button>
    </div>
  );
}
