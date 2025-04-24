import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const TransactionItem = ({ tx }: { tx: any }) => {
  const date = new Date(tx.date);
  const isRecent = (Date.now() - date.getTime()) / (1000 * 3600 * 24) < 7;

  return (
    <div className="flex justify-between items-center p-3 border-b">
      <div className="flex gap-2">
        <div className="bg-gray-800 text-white p-2 rounded-full">
          <FontAwesomeIcon icon={faBuildingColumns} />
        </div>
        <div>
          <p className="font-semibold">
            {tx.pending && "Pending: "}
            {tx.name} - ${tx.amount}
          </p>
          <p className="text-xs text-gray-600">
            {tx.description} {tx.authorizedUser && ` • ${tx.authorizedUser}`}
          </p>
          <p className="text-xs text-gray-400">
            {isRecent ? date.toLocaleDateString(undefined, { weekday: "long" }) : date.toLocaleDateString()}
          </p>
        </div>
      </div>
      <FontAwesomeIcon icon={faCircleInfo} className="text-gray-400" />
    </div>
  );
};

export default TransactionItem;