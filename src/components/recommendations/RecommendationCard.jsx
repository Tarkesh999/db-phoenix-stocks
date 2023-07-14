import React, { useEffect, useState } from "react";

import styles from "./Recommendations.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as StockListIcon } from "../../assets/icons/chart-pie-alt.svg";
import axios from "axios";
import { getCurrentYear } from "../../helpers";


const RecommendationCard = ({ recommendations }) => {

  const renderListItems = () => {
    return recommendations?.map((exchange) => {
      return (
        <div style={{overflow:"hidden" ,overflowWrap:"break-word", marginBottom: 30, position:"relative"}}>
        <li className={styles.listItem} key={exchange.stockId} style={{float:"left", border:"1px solid black", borderRadius: "4px", padding: 4}}>
          <div className={styles.name} onClick={() => console.log("stock clicked")}>
          <Link to={`/`} className={styles.link}>{exchange.stockName}</Link>
          </div>
          {/* <div className={styles.index}>{exchange.rank}</div> */}
          <div style={{whiteSpace:"pre-wrap",overflowWrap:"break-word"}}>
            <p>{exchange?.reason}</p>
          </div>
          {/* <div className={styles.index}>{exchange.recommendationAction}</div> */}
        </li>
        <div className={exchange.recommendationAction === "buy" ? styles.buy : styles.sell} style={{marginTop: 13, marginLeft: 10, float:"left"}}>{exchange.recommendationAction}</div>
        </div>
      );
    });
  };

  return (
    <div className={styles.container} style={{maxHeight: 600, borderRadius:30, border:20, borderColor:"black",whiteSpace:"pre-wrap",overflowWrap:"break-word"}}>
      <ul className={styles.exchangeList}>{renderListItems()}</ul>
    </div>
  );      
  };
  
  export default RecommendationCard;
  