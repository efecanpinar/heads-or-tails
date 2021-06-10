import React from "react";
import "./Coin.css";
import CoinTura from "../../Assets/coin-head.gif";
import CoinYazi from "../../Assets/coin-tail.gif";

const Coin = (props) => {
  return (
    <div className="Coin-container" >
      <div className={`Coin ${props.flipping ? "Coin-rotate" : ""}`}>
        <img
          src={CoinTura}
          className={props.side === "tail" ? "Coin-back" : "Coin-front"}
        />
        <img
          src={CoinYazi}
          className={props.side === "tail" ? "Coin-front" : "Coin-back"}
        />
      </div>
    </div>
  );
};

export default Coin;