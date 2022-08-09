import React from "react";

const Stock = ({
  close,
  daily,
  dailyPercent,
  high,
  low,
  open,
  previousClose,
}) => {
  return (
    <div className="stock-container">
      <p>Open {open}</p>
      <p>High {high}</p>
      <p>Low {low}</p>
      <p>Close {close}</p>
      <p>Previous Close {previousClose}</p>
      <p>Daily {daily}</p>
      <p>Daily Percent {dailyPercent}</p>
    </div>
  );
};

export default Stock;
