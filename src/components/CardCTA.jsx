import React from "react";
import CardDetails from "./CardDetails.jsx";
import "./CardCTA.css";
import { useState } from "react";
const CardCTA = () => {
  const [fullName, setFullName] = useState("");
  const [fullNameIsValid, setFullNameIsValid] = useState("");
  const [fullNameIsTouched, setFullNameIsTouched] = useState(false);

  const hasError = !fullNameIsValid && fullNameIsTouched;
  //
  let fullNameErrorText = "Can't be empty";
  const nameChangeHandler = (e) => {
    setFullName(e.target.value);
    console.log(fullName);
  };
  //
  const validateFullName = (value) => {
    if (value.trim() === "" || !value.trim().includes(" ")) {
      fullNameErrorText =
        value.trim() === "" ? "Can't be empty" : "Please enter full name";
      setFullNameIsValid(false);
    } else {
      setFullNameIsValid(true);
    }
  };
  //
  const formSubmitHandler = (e) => {
    e.preventDefault();
    validateFullName(fullName);
    console.log(fullName);

    if (hasError) {
      //set input styles to invalid, show error text
    }
    //otherwise, display completed logo,
  };
  //
  const fullNameBlurHandler = () => {
    setFullNameIsTouched(true);
  };
  //Error styles
  let fullNameInputStyle = "input-style";
  fullNameInputStyle = hasError ? "input-error input-style" : "input-style";
  return (
    <section className="main-container">
      <CardDetails />
      <form className="form-container" onSubmit={formSubmitHandler}>
        <div className="cardholder-name">
          <label className="label" htmlFor="">
            {" "}
            CARDHOLDER NAME
          </label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={nameChangeHandler}
            className={fullNameInputStyle}
            onBlur={fullNameBlurHandler}
          />
          {hasError && <p className="error-message">{fullNameErrorText}</p>}
        </div>
        <div className="cardholder-number">
          <label className="label" htmlFor="">
            {" "}
            CARDHOLDER NUMBER
          </label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            className="input-style"
          />
        </div>
        <div className="date-cvc">
          <span className="span__exp-date">
            <label className="label exp" htmlFor="">
              EXP DATE (MM/YY)
            </label>
            <span className="MM-YY">
              <input
                type="text"
                placeholder="MM"
                className="exp-date MM-input input-style"
              />
              <input
                type="text"
                placeholder="YY"
                className="exp-date YY-input input-style"
              />
            </span>
          </span>
          <span>
            <label className="label" htmlFor="">
              CVC
            </label>
            <input type="text" placeholder="e.g. 123" className="input-style" />
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
