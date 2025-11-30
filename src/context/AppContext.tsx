import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  currency: string;
  setCurrency: (currency: string) => void;
  monthlyBudget: number;
  setMonthlyBudget: (budget: number) => void;
  accounts: any[];
  setAccounts: (accounts: any[]) => void;
  transactions: any[];
  setTransactions: (transactions: any[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState("USD");
  const [monthlyBudget, setMonthlyBudget] = useState(3000);
  const [accounts, setAccounts] = useState([
    { id: 1, name: "Cash", type: "cash", balance: 1250, color: "#00D9A5" },
    { id: 2, name: "Chase Bank", type: "bank", balance: 15680, color: "#4C6FFF" },
    { id: 3, name: "Visa Card", type: "card", balance: 8350, color: "#7B61FF" },
  ]);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "expense",
      amount: 12.50,
      merchant: "Starbucks",
      category: "Food & Dining",
      categoryColor: "#FFB800",
      date: new Date(),
      time: "2:30 PM",
      account: "Visa Card",
      note: "Morning coffee",
    },
    {
      id: 2,
      type: "expense",
      amount: 89.99,
      merchant: "Amazon",
      category: "Shopping",
      categoryColor: "#7B61FF",
      date: new Date(),
      time: "11:45 AM",
      account: "Chase Bank",
    },
    {
      id: 3,
      type: "income",
      amount: 5000,
      merchant: "Salary",
      category: "Income",
      categoryColor: "#00D9A5",
      date: new Date(Date.now() - 86400000),
      time: "9:00 AM",
      account: "Chase Bank",
    },
    {
      id: 4,
      type: "expense",
      amount: 45.30,
      merchant: "Uber",
      category: "Transportation",
      categoryColor: "#4C6FFF",
      date: new Date(Date.now() - 86400000),
      time: "6:15 PM",
      account: "Cash",
    },
    {
      id: 5,
      type: "expense",
      amount: 156.80,
      merchant: "Whole Foods",
      category: "Groceries",
      categoryColor: "#00D9A5",
      date: new Date(Date.now() - 172800000),
      time: "3:20 PM",
      account: "Visa Card",
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency,
        monthlyBudget,
        setMonthlyBudget,
        accounts,
        setAccounts,
        transactions,
        setTransactions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
