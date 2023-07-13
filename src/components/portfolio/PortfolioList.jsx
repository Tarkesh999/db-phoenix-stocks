import React, { useEffect } from "react";

import PortfolioListItem from "./PortfolioListItem/PortfolioListItem";


import styles from "./PortfolioList.module.css";

const PortfolioList = ({ portfolio }) => {
  console.log("****protfolio",portfolio)
  const renderListItems = () => {
    return portfolio.map((portfolio) => (
      <PortfolioListItem portfolio={portfolio} key={portfolio?.ticker} />
    ));
  };


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.heading}>Portfolio</h1>
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

export default PortfolioList;
