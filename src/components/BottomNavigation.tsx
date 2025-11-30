import { Home, Receipt, BarChart3, Wallet, Menu } from "lucide-react";

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "transactions", label: "Transactions", icon: Receipt },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "budget", label: "Budget", icon: Wallet },
    { id: "settings", label: "More", icon: Menu },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-md mx-auto px-4 pb-6">
        <div className="bg-[#151B3D]/80 backdrop-blur-xl rounded-[28px] border border-[#1a2048] shadow-2xl shadow-black/50 p-2">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`flex flex-col items-center justify-center gap-1 px-3 py-2.5 rounded-2xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-br from-[#4C6FFF]/30 to-[#7B61FF]/30"
                      : "hover:bg-[#1a2048]/50"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive ? "text-[#4C6FFF]" : "text-[#A0A3BD]"
                    }`}
                    strokeWidth={2}
                  />
                  <span
                    className={`text-[10px] transition-colors ${
                      isActive ? "text-[#4C6FFF]" : "text-[#A0A3BD]"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
