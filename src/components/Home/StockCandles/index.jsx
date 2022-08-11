import React, { useState } from "react";
import { ApiClient, DefaultApi } from "finnhub";
import Candles from "./Candles";

function StockCandles() {
  const [stockCandles, setStockCandles] = useState([]);
  const [search, setSearch] = useState("");

  const getCandles = (e) => {
    e.preventDefault(search);
    const api_key = ApiClient.instance.authentications["api_key"];
    api_key.apiKey = "cblab4iad3i4fg7gtm60";
    const finnhubClient = new DefaultApi();
    finnhubClient.stockCandles(`${search()}`, (error, data, response) => {
      console.log(data);
      setStockCandles(data);
    });
  };
  console.log(stockCandles);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="stock-candles">
      <div className="stock-candles-search">
        <h1 className="stock-chart">Stock chart</h1>
        <Candles
          closePrices={stockCandles.c}
          highPrices={stockCandles.h}
          lowPrices={stockCandles.l}
          openPrices={stockCandles.o}
          status={stockCandles.s}
          timestamp={stockCandles.t}
          volume={stockCandles.v}
        />
      </div>
    </div>
  );
}

export default StockCandles;
