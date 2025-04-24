import CardBalanceBlock from "../components/CardBalanceBlock";
import DailyPointsBlock from "../components/DailyPointsBlock";
import NoPaymentBlock from "../components/NoPaymentBlock";
import TransactionsList from "../components/TransactionsList";

export default function Home() {
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 min-h-screen space-y-4">
      <div className="space-y-2">
        <CardBalanceBlock balance={420.55} maxLimit={1500} />
        <NoPaymentBlock />
        <DailyPointsBlock />
      </div>
      <TransactionsList />
    </div>
  );
}