import React, { useState } from "react";

import { ConditionallyRender } from "react-util-kit";

import Header from "../../components/Header/Header";
import Subheader from "../../components/Subheader/Subheader";
import ExchangeList from "../../components/ExchangeList/ExchangeList";
import TopFiveDividendStocksList from "../../components/TopFiveDividendStocksList/TopFiveDividendStocksList";
import InfoCard from "../../components/InfoCard/InfoCard";
import StockList from "../../components/StockList/StockList";
import PortfolioList from "../../components/portfolio/PortfolioList";
import Layout from "../../components/Layout/Layout";
import logo from "../../assets/icons/genie_lamp.png"
import { getTopFiveDividendStocks, getInfoCardData } from "./helpers";

import styles from "./Dashboard.module.css";
import { Modal } from "../../components/modal/Modal";
import RecommendationCard from "../../components/recommendations/RecommendationCard";

const Dashboard = ({ portfolio, exchanges, recommendations, stocks, setStocks }) => {
  
  const [modalShow, setModalShow] = useState(false);

  const imgOnClick = () => {
    setModalShow(true);
  };

  const modalClose = () => {
      setModalShow(false);
  };

  return (
    <div style={{position: "relative", zIndex: 0}} >
      <div style={{position:"fixed",bottom: 60, right: 40, cursor:"pointer", zIndex: 100}}>
        <img alt="genie-lamp" src={logo} width={140} height={90} onClick={imgOnClick} />
        <Modal show={modalShow} handleClose={modalClose}>
          {/* <ExchangeList exchanges={exchanges} /> */}
          <RecommendationCard recommendations={recommendations}/>
        </Modal>
      </div>
      <Header />
      <div style={{height:1}} />
      <Subheader>
        <ExchangeList exchanges={exchanges} />
        <TopFiveDividendStocksList stocks={getTopFiveDividendStocks(stocks)} />
        <div className={styles.infoCardContainer}>
          <InfoCard
            title="Highest dividend yield in current year"
            stock={getInfoCardData("yieldcurrent", stocks)}
          />
          <InfoCard
            title="Highest dividend yield all time"
            stock={getInfoCardData("yieldcompounded", stocks)}
          />
          <InfoCard
            title="Highest dividend yield growth in past 3 years"
            stock={getInfoCardData("growth", stocks)}
            darkmode
          />
        </div>
      </Subheader>
      <Layout>
        <ConditionallyRender
          ifTrue={stocks.length}
          show={
          <PortfolioList portfolio={portfolio} />}
        />
      </Layout>
      <Layout>
        <ConditionallyRender
          ifTrue={stocks.length}
          show={<StockList stocks={stocks} setStocks={setStocks} />}
        />
      </Layout>
    </div>
  );
};

export default Dashboard;
