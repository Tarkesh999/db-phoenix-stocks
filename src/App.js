import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import data from "./data";

import Dashboard from "./pages/Dashboard/Dashboard";
import StockView from "./pages/StockView/StockView";
import axios from 'axios';

function App() {
  const [exchanges, setExchanges] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [userPortfolio,setUserPortfolio] = useState([]);

  const getData = () => {
    axios({
      url: "",
      method: "GET"
    }).then((res) => {
      console.log("**********getUserPortfolio",res,res?.data);
      setUserPortfolio(res);
    });
    const exchanges = data.exchanges;
    const stocks = data.stocks;

    return {
      exchanges,
      stocks,
    };
  };

  useEffect(() => {
    const { exchanges, stocks } = getData();

    setExchanges(exchanges);
    setStocks(stocks);
  }, []);

  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <div>
            <Dashboard
              exchanges={exchanges}
              stocks={stocks}
              setStocks={setStocks}
              {...props}
            />
            </div>
          )}
        />
        <Route
          path="/stocks/:ticker"
          render={(props) => <StockView {...props} stocks={stocks} />}
        />
      </Router>
    </div>
  );
}

export default App;
