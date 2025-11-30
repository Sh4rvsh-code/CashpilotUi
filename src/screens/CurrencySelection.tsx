import { useState } from "react";
import { Search, Check } from "lucide-react";
import { useApp } from "../context/AppContext";

interface CurrencySelectionProps {
  onComplete: () => void;
}

export function CurrencySelection({ onComplete }: CurrencySelectionProps) {
  const { setCurrency } = useApp();
  const [selected, setSelected] = useState("USD");
  const [searchQuery, setSearchQuery] = useState("");

  const currencies = [
    { code: "USD", name: "US Dollar", symbol: "$", flag: "🇺🇸" },
    { code: "EUR", name: "Euro", symbol: "€", flag: "🇪🇺" },
    { code: "GBP", name: "British Pound", symbol: "£", flag: "🇬🇧" },
    { code: "INR", name: "Indian Rupee", symbol: "₹", flag: "🇮🇳" },
    { code: "JPY", name: "Japanese Yen", symbol: "¥", flag: "🇯🇵" },
    { code: "CAD", name: "Canadian Dollar", symbol: "C$", flag: "🇨🇦" },
    { code: "AUD", name: "Australian Dollar", symbol: "A$", flag: "🇦🇺" },
    { code: "CHF", name: "Swiss Franc", symbol: "CHF", flag: "🇨🇭" },
  ];

  const filteredCurrencies = currencies.filter(
    (currency) =>
      currency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      currency.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContinue = () => {
    setCurrency(selected);
    onComplete();
  };

  return (
    <div className="h-full w-full bg-[#0A0E27] flex flex-col">
      {/* Header */}
      <div className="pt-16 px-6 pb-6">
        <div className="text-[#A0A3BD] text-sm mb-2">Step 3 of 3</div>
        <h1 className="text-3xl text-white mb-2">
          Choose Your Currency
        </h1>
        <p className="text-[#A0A3BD]">Select your primary currency</p>
      </div>

      {/* Search bar */}
      <div className="px-6 mb-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          <input
            type="text"
            placeholder="Search currency..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 bg-[#151B3D] rounded-2xl pl-12 pr-4 text-white placeholder-[#A0A3BD] border-2 border-transparent focus:border-[#4C6FFF] outline-none transition-colors"
          />
        </div>
      </div>

      {/* Currency list */}
      <div className="flex-1 overflow-y-auto px-6">
        <div className="space-y-2 pb-24">
          {filteredCurrencies.map((currency) => (
            <button
              key={currency.code}
              onClick={() => setSelected(currency.code)}
              className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all ${
                selected === currency.code
                  ? "bg-gradient-to-r from-[#4C6FFF]/20 to-[#7B61FF]/20 border-2 border-[#4C6FFF]"
                  : "bg-[#151B3D] border-2 border-transparent hover:border-[#1a2048]"
              }`}
            >
              <span className="text-3xl">{currency.flag}</span>
              <div className="flex-1 text-left">
                <div className="text-white">{currency.name}</div>
                <div className="text-[#A0A3BD] text-sm">
                  {currency.code} · {currency.symbol}
                </div>
              </div>
              {selected === currency.code && (
                <Check className="w-6 h-6 text-[#4C6FFF]" strokeWidth={2.5} />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Continue button */}
      <div className="px-6 pb-8 pt-4 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27] to-transparent">
        <button
          onClick={handleContinue}
          className="w-full h-14 bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF] rounded-2xl text-white hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all active:scale-95"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
