import React from "react";
import "../Styles/MarketCap.css";
const MarketDetail = () => {
  return (
    <div className="market-cap">
      <div className="h2-div">
        <h2>
          MARKET CAP <br /> $1.34T
        </h2>
        <h2>
          EXCHANGE VOL <br /> $55.04B
        </h2>
        <h2>
          ASSETS <br /> 2,295
        </h2>
        <h2>
          EXCHANGES <br /> 73
        </h2>
        <h2>
          MARKETS <br /> 13,989
        </h2>
        <h2>
          BTC DOM INDEX <br /> 31.7%
        </h2>
      </div>
    </div>
  );
};

export default MarketDetail;
