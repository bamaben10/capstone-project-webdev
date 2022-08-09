import React, { useState } from "react";
import { ApiClient, DefaultApi } from "finnhub";

function StockCandles() {
  const [stockCandles, setStockCandles] = useState;
  const [search, setSearch] = useState;

  //   const Graph = () => {
  //     const finnhub = require("finnhub");

  //     const api_key = finnhub.ApiClient.instance.authentications["api_key"];
  //     api_key.apiKey = "cblab4iad3i4fg7gtm60";
  //     const finnhubClient = new finnhub.DefaultApi();

  //     console.log(graph);

  const getStockCandles = (e) => {
    e.preventDefault();
    const api_key = ApiClient.instance.authentications["api_key"];
    api_key.apiKey = "cblab4iad3i4fg7gtm60";
    const finnhubClient = new DefaultApi();
    finnhubClient.graph(`${search}`, (error, data, response) => {
      console.log(stockCandles);
    });
  };

  // finnhubClient.stockCandles(
  //   "AAPL",
  //   "D",
  //   1590988249,
  //   1591852249,
  //   (error, data, response) => {
  //     console.log(data);
  //   }
  // );

  return <div>StockCandles</div>;
}

export default StockCandles;
