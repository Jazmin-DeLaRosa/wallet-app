import CardBalanceBlock from "./components/CardBalanceBlock";
import DailyPointsBlock from "./components/DailyPointsBlock";
import NoPaymentBlock from "./components/NoPaymentBlock";
import TransactionsList from "./components/TransactionsList";

function App() {
  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 min-h-screen">
      <CardBalanceBlock balance={420.55} maxLimit={1500} />
      <NoPaymentBlock />
      <DailyPointsBlock />
      <TransactionsList />
    </div>
  );
}

export default App;