import { useLocation, useNavigate } from "react-router-dom";

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
    <div className="flex flex-col items-center p-6 bg-white min-h-screen">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-600">← Back</button>
      <h1 className="text-5xl font-semibold text-black mb-2">${tx.amount.toFixed(2)}</h1>
      <p className="text-gray-700 text-lg">{tx.name}</p>
      <p className="text-gray-500 text-sm mb-6">{formatDate(tx.date)}</p>

      <div className="bg-gray-100 p-4 rounded-lg w-full max-w-sm space-y-2 shadow-sm">
        <div>
          <p className="text-gray-500 text-sm">Status:</p>
          <p className="text-gray-800 font-medium">{tx.pending ? "Pending" : "Approved"}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Authorized:</p>
          <p className="text-gray-800 font-medium">{tx.authorizedUser || "You"}</p>
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