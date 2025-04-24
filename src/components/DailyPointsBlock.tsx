const calculatePoints = () => {
    const day = new Date().getDate();
    if (day === 1) return 2;
    if (day === 2) return 3;
    return Math.round(2 + 0.6 * 3);
  };
  
  const DailyPointsBlock = () => {
    const points = calculatePoints();
    return (
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-sm font-bold text-gray-800">Daily Points</h2>
        <p className="text-2xl font-medium text-gray-500">
          {points > 999 ? `${Math.round(points / 1000)}K` : points}
        </p>
      </div>
    );
  };
  
  export default DailyPointsBlock;