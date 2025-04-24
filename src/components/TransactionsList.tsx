import transactionsData from "../data/transactions.json";
import TransactionItem from "./TransactionItem";

const TransactionsList = () => (
    <div className="bg-white shadow mt-4 rounded">
        <h3 className="p-4 font-bold text-gray-700">Latest Transactions</h3>

        <div className="max-h-[520px] overflow-y-auto">
            {transactionsData.transactions.map((tx) => (
                <TransactionItem key={tx.id} tx={tx} />
            ))}
        </div>
    </div>
);

export default TransactionsList;
