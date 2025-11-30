import { useState } from "react";
import { Splash } from "./screens/Splash";
import { Onboarding } from "./screens/Onboarding";
import { SetupPin } from "./screens/SetupPin";
import { CurrencySelection } from "./screens/CurrencySelection";
import { BudgetSetup } from "./screens/BudgetSetup";
import { AccountSetup } from "./screens/AccountSetup";
import { Home } from "./screens/Home";
import { TransactionsList } from "./screens/TransactionsList";
import { TransactionDetail } from "./screens/TransactionDetail";
import { AddTransaction } from "./screens/AddTransaction";
import { Analytics } from "./screens/Analytics";
import { Budget } from "./screens/Budget";
import { Categories } from "./screens/Categories";
import { Accounts } from "./screens/Accounts";
import { Bills } from "./screens/Bills";
import { Goals } from "./screens/Goals";
import { Subscriptions } from "./screens/Subscriptions";
import { ExportReports } from "./screens/ExportReports";
import { Settings } from "./screens/Settings";
import { AppProvider } from "./context/AppContext";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("splash");
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);

  const navigate = (screen: string, data?: any) => {
    if (data) {
      if (screen === "transaction-detail") {
        setSelectedTransaction(data);
      }
    }
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash":
        return <Splash onComplete={() => navigate("onboarding")} />;
      case "onboarding":
        return <Onboarding onComplete={() => navigate("setup-pin")} />;
      case "setup-pin":
        return <SetupPin onComplete={() => navigate("currency")} />;
      case "currency":
        return <CurrencySelection onComplete={() => navigate("budget-setup")} />;
      case "budget-setup":
        return <BudgetSetup onComplete={() => navigate("account-setup")} />;
      case "account-setup":
        return <AccountSetup onComplete={() => navigate("home")} />;
      case "home":
        return <Home navigate={navigate} />;
      case "transactions":
        return <TransactionsList navigate={navigate} />;
      case "transaction-detail":
        return <TransactionDetail transaction={selectedTransaction} navigate={navigate} />;
      case "add-transaction":
        return <AddTransaction navigate={navigate} />;
      case "analytics":
        return <Analytics navigate={navigate} />;
      case "budget":
        return <Budget navigate={navigate} />;
      case "categories":
        return <Categories navigate={navigate} />;
      case "accounts":
        return <Accounts navigate={navigate} />;
      case "bills":
        return <Bills navigate={navigate} />;
      case "goals":
        return <Goals navigate={navigate} />;
      case "subscriptions":
        return <Subscriptions navigate={navigate} />;
      case "export":
        return <ExportReports navigate={navigate} />;
      case "settings":
        return <Settings navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <AppProvider>
      <div className="relative w-full h-screen overflow-hidden bg-[#0A0E27]">
        <div className="w-full h-full max-w-md mx-auto relative">
          {renderScreen()}
        </div>
      </div>
    </AppProvider>
  );
}
