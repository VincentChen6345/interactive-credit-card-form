import React from "react";
import CardDetails from "./CardDetails.jsx";
import "./CardCTA.css";
import useInput from "../hooks/use-input";

const CardCTA = () => {
  /////////////////////////////////////////
  //Extracting key variables for each input
  const {
    value: fullName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    isValid: nameIsValid,
    isTouched: nameIsTouched,
    valueReset: nameReset,
  } = useInput((value) => value.trim() !== "" && value.trim().includes(" "));
  const {
    value: cardNumber,
    hasError: cardNumberInputHasError,
    isValid: cardNumberIsValid,
    isTouched: cardNumberIsTouched,
    valueChangeHandler: cardNumberChangeHandler,
    valueBlurHandler: cardNumberBlurHandler,
    valueReset: cardNumberReset,
    keyUpHandler: cardNumberKeyUp,
  } = useInput((value) => typeof value.trim() === "number");

  //
  let formIsValid = false;
  if (nameIsValid) {
    formIsValid = true;
  }

  //
  const formSubmitHandler = (e) => {
    e.preventDefault();
    nameBlurHandler();
    if (nameIsValid) {
      nameReset();
    }
  };
  //
  //
  let fullNameErrorText = "Can't be empty";
  fullNameErrorText =
    fullName.trim() === "" ? "Can't be empty" : "Please enter full name";
  let cardNumberErrorText =
    cardNumber.trim() === ""
      ? "Can't be empty"
      : "Wrong format, please enter 12 digit card number ";
  let errorMessageStyle = nameIsValid ? "hidden" : "error-message";
  //Error styles
  let fullNameInputStyle = "input-style";
  if (nameInputHasError) {
    fullNameInputStyle = "input-error input-style";
  } else if (!nameInputHasError && nameIsTouched) {
    fullNameInputStyle = "valid-input input-style";
  }
  let cardNumberInputStyle = "input-style";
  if (cardNumberInputHasError) {
    cardNumberInputStyle = "input-error input-style";
  } else if (!cardNumberInputHasError && cardNumberIsTouched) {
    cardNumberInputStyle = "valid-input input-style";
  }

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
            onBlur={nameBlurHandler}
            value={fullName}
          />
          {nameInputHasError && (
            <p className={errorMessageStyle}>{fullNameErrorText}</p>
          )}
        </div>
        <div className="cardholder-number">
          <label className="label" htmlFor="">
            {" "}
            CARDHOLDER NUMBER
          </label>
          <input
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
            className={cardNumberInputStyle}
            onChange={cardNumberChangeHandler}
            onBlur={cardNumberBlurHandler}
            value={cardNumber}
            onKeyUp={cardNumberKeyUp}
            maxLength={19}
          />
          {cardNumberInputHasError && (
            <p className={errorMessageStyle}>{cardNumberErrorText}</p>
          )}
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
