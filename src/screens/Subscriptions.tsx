import { ArrowLeft, Plus } from "lucide-react";

interface SubscriptionsProps {
  navigate: (screen: string) => void;
}

export function Subscriptions({ navigate }: SubscriptionsProps) {
  const subscriptions = [
    { name: "Spotify Premium", amount: 9.99, renewal: "Dec 15", emoji: "🎵", color: "#00D9A5", status: "active" },
    { name: "Netflix", amount: 19.99, renewal: "Dec 5", emoji: "🎬", color: "#FF5757", status: "active" },
    { name: "Adobe Creative Cloud", amount: 54.99, renewal: "Dec 20", emoji: "🎨", color: "#7B61FF", status: "active" },
    { name: "Amazon Prime", amount: 14.99, renewal: "Dec 10", emoji: "📦", color: "#FFB800", status: "active" },
    { name: "Apple Music", amount: 9.99, renewal: "Dec 1", emoji: "🎵", color: "#4C6FFF", status: "canceled" },
  ];

  const totalMonthly = subscriptions
    .filter((sub) => sub.status === "active")
    .reduce((sum, sub) => sum + sub.amount, 0);

  const activeSubs = subscriptions.filter((sub) => sub.status === "active");
  const canceledSubs = subscriptions.filter((sub) => sub.status === "canceled");

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
          <h1 className="text-2xl text-white flex-1">Subscriptions</h1>
          <button className="w-10 h-10 bg-gradient-to-br from-[#4C6FFF] to-[#7B61FF] rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all">
            <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Monthly Cost Summary */}
      <div className="px-6 mb-6">
        <div className="bg-gradient-to-br from-[#151B3D] to-[#1a2048] rounded-[24px] p-6 border border-[#1a2048] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4C6FFF]/20 to-transparent rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <p className="text-[#A0A3BD] text-sm mb-2">Total Monthly Cost</p>
            <h2 className="text-4xl text-white mb-1">${totalMonthly.toFixed(2)}</h2>
            <p className="text-[#A0A3BD] text-sm">{activeSubs.length} active subscriptions</p>
          </div>
        </div>
      </div>

      {/* Active Subscriptions */}
      <div className="px-6 mb-8">
        <h3 className="text-white text-lg mb-4">Active Subscriptions</h3>
        <div className="space-y-3">
          {activeSubs.map((sub, index) => (
            <div
              key={index}
              className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048] hover:border-[#4C6FFF]/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${sub.color}20` }}
                >
                  {sub.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-white">{sub.name}</p>
                  <p className="text-[#A0A3BD] text-sm">${sub.amount}/month</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 bg-[#00D9A5]/20 text-[#00D9A5] rounded-lg text-xs">
                    Active
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1a2048] flex items-center justify-between">
                <p className="text-[#A0A3BD] text-sm">Next renewal: {sub.renewal}</p>
                <button className="text-[#FF5757] text-sm hover:underline">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Canceled Subscriptions */}
      {canceledSubs.length > 0 && (
        <div className="px-6">
          <h3 className="text-white text-lg mb-4">Canceled</h3>
          <div className="space-y-3">
            {canceledSubs.map((sub, index) => (
              <div
                key={index}
                className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048] opacity-50"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${sub.color}20` }}
                  >
                    {sub.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-white">{sub.name}</p>
                    <p className="text-[#A0A3BD] text-sm">Canceled</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
