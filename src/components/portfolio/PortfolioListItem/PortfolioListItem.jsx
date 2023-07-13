import React from "react";

import { Link } from "react-router-dom";

import styles from "../PortfolioList.module.css";

const PortfolioListItem = ({ portfolio }) => {

  return (
    <li className={styles.listItem} key={portfolio.ticker}>
      <div className={styles.link}>
        <div className={styles.listItemName}>{portfolio.name}</div>
        <div className={styles.listItemTicker}>{portfolio.Qty}</div>
        <div className={styles.listItemAsk}>{portfolio.Invested}</div>
        <div className={styles.listItemBid}>{portfolio.Current}</div>
        <div className={styles.listItemDps}>{portfolio.PL}</div>
        <div className={styles.listItemDp1000Spent}>{portfolio.AvgPrice}</div>
        <div className={styles.listItemDp1000Spent}>{portfolio.Sector}</div>
      </div>
    </li>
  );
};

export default PortfolioListItem;
