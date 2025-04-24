import transactionsData from "../data/transactions.json";
import TransactionItem from "./TransactionItem";

const TransactionsList = () => {
  return (
    <div className="bg-white shadow mt-4 rounded">
      <h3 className="p-4 font-bold text-gray-700">Latest Transactions</h3>
      {transactionsData.transactions.map((tx) => (
        <TransactionItem key={tx.id} tx={tx} />
      ))}
    </div>
  );
};

export default TransactionsList;