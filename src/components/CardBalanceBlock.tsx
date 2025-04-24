import React from "react";

interface Props {
  balance: number;
  maxLimit: number;
}

const CardBalanceBlock: React.FC<Props> = ({ balance, maxLimit }) => {
  const available = maxLimit - balance;
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-bold mb-1">Card Balance</h2>
      <p className="text-2xl font-semibold text-blue-600">${balance.toFixed(2)}</p>
      <p className="text-sm text-gray-600">{`$${available.toFixed(2)} Available`}</p>
    </div>
  );
};

export default CardBalanceBlock;