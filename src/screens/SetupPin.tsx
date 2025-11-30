import { useState } from "react";
import { Fingerprint } from "lucide-react";

interface SetupPinProps {
  onComplete: () => void;
}

export function SetupPin({ onComplete }: SetupPinProps) {
  const [pin, setPin] = useState("");
  const [confirming, setConfirming] = useState(false);
  const [firstPin, setFirstPin] = useState("");

  const handleNumberClick = (num: string) => {
    if (pin.length < 6) {
      const newPin = pin + num;
      setPin(newPin);

      if (newPin.length === 6) {
        setTimeout(() => {
          if (!confirming) {
            setFirstPin(newPin);
            setConfirming(true);
            setPin("");
          } else {
            if (newPin === firstPin) {
              onComplete();
            } else {
              // Error state
              setPin("");
              setTimeout(() => {
                setConfirming(false);
                setFirstPin("");
              }, 500);
            }
          }
        }, 200);
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <div className="h-full w-full bg-[#0A0E27] flex flex-col">
      {/* Header */}
      <div className="pt-16 px-6 pb-8">
        <div className="text-[#A0A3BD] text-sm mb-2">
          Step {confirming ? "2" : "1"} of 3
        </div>
        <h1 className="text-3xl text-white mb-2">
          {confirming ? "Confirm Your PIN" : "Create Your PIN"}
        </h1>
        <p className="text-[#A0A3BD]">
          {confirming ? "Enter your PIN again" : "Secure your financial data"}
        </p>
      </div>

      {/* PIN Display */}
      <div className="flex-1 flex flex-col items-center justify-start pt-12">
        <div className="flex gap-4 mb-16">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                index < pin.length
                  ? "bg-[#4C6FFF] border-[#4C6FFF] scale-110"
                  : "border-[#151B3D]"
              }`}
            />
          ))}
        </div>

        {/* Numeric Keypad */}
        <div className="w-full px-12">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumberClick(num.toString())}
                className="aspect-square rounded-2xl bg-[#151B3D] hover:bg-[#1a2048] text-white text-2xl flex items-center justify-center transition-all active:scale-95"
              >
                {num}
              </button>
            ))}
            <button className="aspect-square" />
            <button
              onClick={() => handleNumberClick("0")}
              className="aspect-square rounded-2xl bg-[#151B3D] hover:bg-[#1a2048] text-white text-2xl flex items-center justify-center transition-all active:scale-95"
            >
              0
            </button>
            <button
              onClick={handleDelete}
              className="aspect-square rounded-2xl bg-[#151B3D] hover:bg-[#1a2048] text-white flex items-center justify-center transition-all active:scale-95"
            >
              ←
            </button>
          </div>
        </div>

        {/* Biometric option */}
        <button className="mt-12 flex items-center gap-2 text-[#4C6FFF] hover:text-[#7B61FF] transition-colors">
          <Fingerprint className="w-5 h-5" strokeWidth={2} />
          <span className="text-sm">Use Face ID / Fingerprint</span>
        </button>
      </div>
    </div>
  );
}
