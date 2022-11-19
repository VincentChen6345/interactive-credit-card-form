import React from "react";
import CardFront from "../images/bg-card-front.png";
import CardBack from "../images/bg-card-back.png";
import "./CardDetails.css";

const CardDetails = (props) => {
  let currentVariables = props.stateVariables;

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
            <p>{currentVariables.cardNumber}</p>
          </div>
          <div className="details-lower">
            <span className="full-name">{currentVariables.fullName}</span>
            <span className="card-expiry-date">
              {currentVariables.expMonth}/{currentVariables.expYear}
            </span>
          </div>
        </div>
      </span>
      <div style={{ position: "relative" }}>
        <img src={CardBack} alt="card background back" className="card-back" />
        <span className="CVC-number">
          <p>{currentVariables.CVC}</p>
        </span>
      </div>
    </div>
  );
};
export default CardDetails;
