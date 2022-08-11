import React from "react";
// import SearchBar from "../SearchBar";
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
// import Cube from '../Login/Cube';
import StockAPI from "./StockAPI";
import StockCandles from "./StockCandles";

const Home = () => {
  return (
    <div className="Header">
      <header>
        <h2>STOCK TRACKER</h2>
        <div>
          <Link to="/">
            <button className="nav-btn">Home</button>
          </Link>
          <Link to="/">
            <button className="nav-btn">Track Trades</button>
          </Link>
          <Link to="/">
            <button className="nav-btn">Logout</button>
          </Link>
        </div>
      </header>
      <div>
        <StockAPI />
        <StockCandles />
      </div>
    </div>
  );
};

export default Home;
