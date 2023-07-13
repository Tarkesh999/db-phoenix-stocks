import styles from "./Recommendations.module.css";
import { Link } from "react-router-dom";


const RecommendationCard = ({ recommendations }) => {

  const stockClick = (stockId) => {
  }

  const renderListItems = () => {
    return recommendations?.map((exchange) => {
      return (
        <div style={{overflowWrap:"break-word", marginBottom: 30}}>
        <li className={styles.listItem} key={exchange.stockId} style={{border:"1px solid black", borderRadius: "4px", padding: 4}}>
          <div className={styles.name} onClick={stockClick(exchange.stockId)}>
          <Link to={`/stock/${exchange.ticker}`} className={styles.link}>{exchange.stockName}</Link>
          </div>
          <div className={styles.index}>{exchange.rank}</div>
          <span style={{whiteSpace:"pre-wrap",overflowWrap:"break-word"}}>
            <p>high performance stock for 2</p>
          </span>
          <div className={styles.index}>{exchange.recommendationAction}</div>
          <div className={exchange.recommendationAction === "buy" ? styles.buy : styles.sell} >{exchange.recommendationAction}</div>
        </li>
        </div>
      );
    });
  };

  return (
    <div className={styles.container} style={{maxHeight: 400, overflowY: "scroll", maxWidth: 1200, borderRadius:30, border:20, borderColor:"black",whiteSpace:"pre-wrap",overflowWrap:"break-word"}}>
      <ul className={styles.exchangeList}>{renderListItems()}</ul>
    </div>
  );      
  };
  
  export default RecommendationCard;
  