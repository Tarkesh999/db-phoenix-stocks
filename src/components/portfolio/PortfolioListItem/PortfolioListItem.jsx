import React from "react";

import { Link } from "react-router-dom";

import styles from "../PortfolioList.module.css";

const PortfolioListItem = ({ portfolio }) => {

  var mapper = {
    "PL":"P & L"
  };
  return (
    <li className={styles.listItem} key={portfolio.ticker}>
      <div className={styles.link}>
        <div className={styles.listItemName}>{portfolio.name}</div>
        <div className={styles.listItemTicker}>{portfolio.Qty}</div>
        <div className={styles.listItemAsk}>{portfolio.Invested}</div>
        <div className={styles.listItemBid}>{portfolio.Current}</div>
        <div className={styles.listItemDps}>{portfolio["P&L"]}</div>
        <div className={styles.listItemDp1000Spent}>{portfolio["Avg. Price"]}</div>
        <div className={styles.listItemDp1000Spent}>{portfolio.sector}</div>
      </div>
    </li>
  );
};

export default PortfolioListItem;
