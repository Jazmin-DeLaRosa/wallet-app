import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const TransactionItem = ({ tx }: { tx: any }) => {
    const navigate = useNavigate();
    const handleClick = () => navigate("/detail", { state: tx });

    const date = new Date(tx.date);
    const isRecent = (Date.now() - date.getTime()) / (1000 * 3600 * 24) < 7;
    const formattedDate = isRecent
        ? date.toLocaleDateString(undefined, { weekday: "long" })
        : date.toLocaleDateString();

    const amount = tx.type === "Payment" ? `+$${tx.amount}` : `$${tx.amount}`;
    const showPending = tx.pending ? "Pending: " : "";

    return (
        <div
            className="flex justify-between items-center p-4 border-t hover:bg-gray-50 cursor-pointer"
            onClick={handleClick}
        >
            <div className="flex gap-3 items-start">
                <div className="bg-gray-800 text-white p-2 rounded-full flex items-center justify-center h-10 w-10">
                    <FontAwesomeIcon icon={faBuildingColumns} />
                </div>
                <div>
                    <p className="font-semibold">
                        {tx.pending && "Pending: "}
                        {tx.name}
                    </p>
                    <p className="text-xs text-gray-600">
                        {tx.description}
                        {tx.authorizedUser ? ` • ${tx.authorizedUser}` : ""}
                    </p>
                    <p className="text-xs text-gray-400">
                        {isRecent
                            ? date.toLocaleDateString(undefined, { weekday: "long" })
                            : date.toLocaleDateString()}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <p className="text-sm font-semibold min-w-[60px] text-right">
                    {tx.type === "Payment"
                        ? `+$${tx.amount.toFixed(2)}`
                        : `$${tx.amount.toFixed(2)}`}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>{tx.quality ? `${tx.quality}%` : ""}</span>
                    <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                </div>
            </div>
        </div>
    );
};

export default TransactionItem;