import React from "react";
import CardFront from "../images/bg-card-front.png";
import CardBack from "../images/bg-card-back.png";
import "./CardDetails.css";
const CardDetails = (props) => {
  return (
    <div className="image-container">
      <span className="card-front-container">
        <div style={{ position: "relative" }}>
          <img
            src={CardFront}
            alt="card background front"
            className="card-front"
          />
          <div className="card-details">
            <span className="logo-container">
              <div className="big-circle"></div>
              <div className="hollow-circle"></div>
            </span>
          </div>
          <div className="card-number">
            <p>0000 0000 0000 0000</p>
          </div>
          <div className="details-lower">
            <span className="full-name">Jane Appleseed</span>
            <span className="card-expiry-date">00/00</span>
          </div>
        </div>
      </span>
      <div style={{ position: "relative" }}>
        <img src={CardBack} alt="card background back" className="card-back" />
        <span className="CVC-number">
          <p>000</p>
        </span>
      </div>
    </div>
  );
};
export default CardDetails;
