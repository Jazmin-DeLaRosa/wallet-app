const calculatePoints = () => {
    const day = new Date().getDate();
    if (day === 1) return 2;
    if (day === 2) return 3;
    return Math.round(2 + 0.6 * 3);
  };
  
  const DailyPointsBlock = () => {
    const points = calculatePoints();
    return (
      <div className="bg-yellow-100 p-4 rounded text-yellow-800 text-sm">
        Daily Points: <strong>{points > 999 ? `${Math.round(points / 1000)}K` : points}</strong>
      </div>
    );
  };
  
  export default DailyPointsBlock;