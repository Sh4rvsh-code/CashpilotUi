import { TransactionsWidget } from "./TransactionsWidget";
import { AccountsWidget } from "./AccountsWidget";

export function QuickWidgets() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TransactionsWidget />
      <AccountsWidget />
    </div>
  );
}
