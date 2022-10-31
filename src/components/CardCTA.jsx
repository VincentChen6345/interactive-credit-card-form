import React from "react";
import CardFront from "../images/bg-card-front.png";
import CardBack from "../images/bg-card-back.png";
import "./CardCTA.css";
const CardCTA = () => {
  return (
    <section className="main-container">
      <div className="image-container">
        <img src={CardFront} alt="card background front" />
        <img src={CardBack} alt="card background back" />
      </div>
      <form className="form-container">
        <div className="cardholder-name">
          <label htmlFor=""> CARDHOLDER NAME</label>
          <input type="text" placeholder="e.g. Jane Appleseed" />
        </div>
        <div className="cardholder-number">
          <label htmlFor=""> CARDHOLDER NUMBER</label>
          <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
        </div>
        <div className="date-cvc">
          <span>
            <label htmlFor="">EXP DATE (MM/YY)</label>
            <span className="MM-YY">
              <input type="number" placeholder="MM" />
              <input type="number" placeholder="YY" />
            </span>
          </span>
          <span>
            <label htmlFor="">CVC</label>
            <input type="number" placeholder="e.g. 123" />
          </span>
        </div>

        <button type="submit" className="confirm-btn">
          Confirm
        </button>
      </form>
    </section>
  );
};

export default CardCTA;
