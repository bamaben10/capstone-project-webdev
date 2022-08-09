import React, { useState } from "react";
// import axios from "axios";
import "./index.css";
import { ApiClient, DefaultApi } from "finnhub";
import Stock from "../Stock";

function StockAPI() {
  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState("");
  const [stockQuote, setStockQuote] = useState({});

  console.log(stocks);

  // useEffect(() => {
  //   const api_key = ApiClient.instance.authentications["api_key"];
  //   api_key.apiKey = "cblab4iad3i4fg7gtm60";
  //   const finnhubClient = new DefaultApi();
  //   finnhubClient.quote("AAPL", (error, data, response) => {
  //     setStockQuote(data);
  //   });
  // }, []);
  // console.log(stockQuote);

  const getQuote = (e) => {
    console.log(search);
    e.preventDefault();
    const api_key = ApiClient.instance.authentications["api_key"];
    api_key.apiKey = "cblab4iad3i4fg7gtm60";
    const finnhubClient = new DefaultApi();
    finnhubClient.quote(`${search.toUpperCase()}`, (error, data, response) => {
      console.log(data);
      setStockQuote(data);
    });
  };
  console.log(stockQuote);

  // useState(() => {
  //   axios
  //     .get(`https://finnhub.io/docs/api/${stockQuote}`)
  //     .then((res) => setStockQuote(res.data));
  // }, []);

  // return <div>{<h1 className="symbol">symbol</h1>}</div>;

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  //   const HomeScreen = () => {
  //     const navigate = useNavigate()

  //     const handleClick = () => {
  //         alert("button clicked")
  //         navigate("")
  //     }

  //   const filteredStocks = stocks.filter((stock) =>
  //     stock.name.toLowerCase().includes(search.toLowerCase())
  //   );

  return (
    <div className="stock-app">
      <div className="stock-search">
        <h1 className="stock-text">Search a stock</h1>
        <form onSubmit={(e) => getQuote(e)}>
          <input
            type="text"
            placeholder="Search"
            className="stock-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <Stock
        close={stockQuote.c}
        daily={stockQuote.d}
        dailyPercent={stockQuote.dp}
        high={stockQuote.h}
        low={stockQuote.l}
        open={stockQuote.o}
        previousClose={stockQuote.pc}
      />
    </div>
  );
}

export default StockAPI;
