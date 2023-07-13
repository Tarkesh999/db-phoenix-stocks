import React, { useEffect } from "react";

import Select from "../Select/Select";
import StockListItem from "./PortfolioListItem/PortfolioListItem";

import {
  sortStocksByDividendYield,
  sortStocksByCompoundedYield,
} from "../../helpers";

import styles from "./PortfolioList.module.css";

const StockList = ({ stocks, setStocks }) => {
  useEffect(() => {
    setStocksByDividendYieldCurrentYear();
  }, []);

  const renderListItems = () => {
    return stocks.map((stock) => (
      <StockListItem stock={stock} key={stock.ticker} />
    ));
  };

  const getOptions = () => {
    return [
      {
        displayValue: "Highest dividend yield 2020",
        value: "dividendyieldcurrentyear",
      },
      {
        displayValue: "Highest dividend yield overall",
        value: "dividendyieldoverall",
      },
    ];
  };

  const setStocksByDividendYieldOverall = () => {
    const sorted = sortStocksByCompoundedYield(stocks);
    setStocks(sorted);
  };

  const setStocksByDividendYieldCurrentYear = () => {
    const sorted = sortStocksByDividendYield(stocks);
    setStocks(sorted);
  };

  const onSelectChange = (e) => {
    const descriptor = e.target.value;

    if (descriptor === "dividendyieldoverall") {
      setStocksByDividendYieldOverall();
    } else if (descriptor === "dividendyieldcurrentyear") {
      setStocksByDividendYieldCurrentYear();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Portfolio</h1>
        <Select
          options={getOptions()}
          onChange={onSelectChange}
          className={styles.select}
        />
      </div>

      <div className={styles.listContainer}>
        <div className={styles.listHeaders}>
          <div className={styles.nameHeader}>Name</div>
          <div className={styles.tickerHeader}>Qty</div>
          <div className={styles.askHeader}>Invested</div>
          <div className={styles.bidHeader}>Current</div>
          <div className={styles.dpsHeader}>P&L</div>
          <div className={styles.dpspentHeader}>Avg. Price</div>
          <div className={styles.sectorHeader}>Sector</div>
        </div>
        <ul className={styles.stockList}>{renderListItems()}</ul>
      </div>
    </div>
  );
};

export default StockList;
