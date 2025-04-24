import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const Details = () => {
    const { state: tx } = useLocation();
    const navigate = useNavigate();

    const formatDate = (iso: string) => {
        const date = new Date(iso);
        return date.toLocaleDateString(undefined, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }) + ", " + date.toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-gray-100 min-h-screen space-y-6">

            <div className="w-full flex items-start">
                <button onClick={() => navigate(-1)} className="text-blue-600">
                    <ArrowLeft className="h-6 w-6" />
                </button>
            </div>

            <div className="text-center">
                <h1 className="text-5xl font-bold text-black mb-1">${tx.amount.toFixed(2)}</h1>
                <p className="text-gray-700 text-lg">{tx.name}</p>
                <p className="text-gray-500 text-sm">{formatDate(tx.date)}</p>
            </div>

            <div className="bg-white p-4 rounded-xl w-full space-y-4 shadow-md">
                <div>
                    <p className="text-gray-500 text-sm">Status:</p>
                    <p className="text-gray-900 font-semibold">{tx.pending ? "Pending" : "Approved"}</p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">Authorized:</p>
                    <p className="text-gray-900 font-semibold">{tx.authorizedUser || "You"}</p>
                </div>
                <div className="border-t pt-2">
                    <p className="text-gray-500 text-sm">Total:</p>
                    <p className="text-black font-bold text-lg">${tx.amount.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;