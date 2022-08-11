import React from "react";

const Candles = ({
  closePrices,
  highPrices,
  lowPrices,
  openPrices,
  status,
  timestamp,
  volume,
}) => {
  return (
    <div className="candle-container">
      <p>Close Prices{closePrices}</p>
      <p>High Prices{highPrices}</p>
      <p>Low Prices{lowPrices}</p>
      <p>Open Prices{openPrices}</p>
      <p>Status{status}</p>
      <p>Timestamp{timestamp}</p>
      <p>Volume{volume}</p>
    </div>
  );
};

export default Candles;
