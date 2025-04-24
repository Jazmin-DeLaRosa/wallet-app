const getSeasonDay = () => {
    const day = new Date().getDate();
    return day <= 3 ? day : 3; // simplificado para demo
  };
  
  const calculatePoints = () => {
    const day = getSeasonDay();
    if (day === 1) return 2;
    if (day === 2) return 3;
    if (day === 3) return Math.round(2 + 0.6 * 3);
    return 0;
  };
  
  const DailyPointsBlock = () => {
    const points = calculatePoints();
    return (
      <div className="bg-yellow-100 p-4 rounded text-yellow-800 text-sm">
        <p>Daily Points: <strong>{points > 999 ? `${Math.round(points / 1000)}K` : points}</strong></p>
      </div>
    );
  };
  
  export default DailyPointsBlock;