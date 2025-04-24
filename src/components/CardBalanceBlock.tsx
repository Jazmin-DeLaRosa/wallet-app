interface Props {
    balance: number;
    maxLimit: number;
  }
  
  const CardBalanceBlock = ({ balance, maxLimit }: Props) => {
    const available = maxLimit - balance;
    return (
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-sm font-bold text-gray-700">Card Balance</h2>
        <p className="text-2xl font-bold text-gray-1000">${balance.toFixed(2)}</p>
        <p className="text-sm font-medium text-gray-500">${available.toFixed(2)} Available</p>
      </div>
    );
  };
  
  export default CardBalanceBlock;