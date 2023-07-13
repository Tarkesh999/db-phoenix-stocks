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
  const [recommendations, setRecommendations] = useState([]);

  const getData = () => {
    axios({
      method: 'get',
      url: `https://stock-recommendation-4pctc4z25q-uc.a.run.app/getRecommendations`,
      withCredentials: false
    }).then((res) => {
      console.log("**********getUserPortfolio",res,res?.data);
      setRecommendations(res?.data);
    });
    axios({
      method: 'get',
      url: `https://stock-recommendation-4pctc4z25q-uc.a.run.app/getAllStocks`,
      withCredentials: false
    }).then((res) => {
      console.log("**********getUserstocks",res,res?.data);
      setStocks(res?.data);
    });
    axios({
      method: 'get',
      url: `https://stock-recommendation-4pctc4z25q-uc.a.run.app/getUserPortfolio`,
      withCredentials: false
    }).then((res) => {
      console.log("**********getUserPortfolio",res,res?.data);
      setUserPortfolio(res?.data);
    });

    const exchanges = data?.exchanges;
    const stocks = data?.stocks;
    const userPortfolio = data?.portfolio;
    const recommendations = data?.recommendations;

    return {
      exchanges,
      stocks,
      userPortfolio,
      recommendations
    };
  };

  useEffect(() => {
    const { exchanges, stocks, userPortfolio, recommendations } = getData();
    setExchanges(exchanges);
    setStocks(stocks);
    setUserPortfolio(userPortfolio);
    setRecommendations(recommendations);
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
              portfolio={userPortfolio}
              recommendations={recommendations}
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
