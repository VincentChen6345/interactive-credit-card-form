import React, { useState, useContext } from "react";
import CardDetails from "./CardDetails.jsx";
import "./CardCTA.css";
import useInput from "../hooks/use-input";
import { ReactComponent as CompletedIcon } from "../images/icon-complete.svg";

const CardCTA = () => {
  const initialCardDetails = {
    fullName: "JANE APPLESEED",
    cardNumber: "0000 0000 0000 0000",
    expMonth: "00",
    expYear: "00",
    CVC: "123",
  };
  const [formIsValid, setFormIsValid] = useState("");
  const [stateVariables, setStateVariables] = useState(initialCardDetails);
  /////////
  const continueFN = () => {
    setFormIsValid("");
    setStateVariables(initialCardDetails);
  };
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
  } = useInput(
    (value) =>
      !isNaN(+value.trim().split(" ").join("")) &&
      value.trim().split(" ").join("").length === 16
  );
  const {
    value: expMonth,
    hasError: expMonthHasError,
    isValid: expMonthIsValid,
    isTouched: expMonthIsTouched,
    valueChangeHandler: expMonthChangeHandler,
    valueBlurHandler: expMonthBlurHandler,
    valueReset: expMonthReset,
  } = useInput(
    (value) =>
      value.trim().length === 2 && !isNaN(+value.trim().split(" ").join(""))
  );
  const {
    value: expYear,
    hasError: expYearHasError,
    isValid: expYearIsValid,
    isTouched: expYearIsTouched,
    valueChangeHandler: expYearChangeHandler,
    valueBlurHandler: expYearBlurHandler,
    valueReset: expYearReset,
  } = useInput(
    (value) =>
      value.trim().length === 2 && !isNaN(+value.trim().split(" ").join(""))
  );
  const {
    value: CVC,
    hasError: CVCHasError,
    isValid: CVCIsValid,
    isTouched: CVCIsTouched,
    valueChangeHandler: CVCChangeHandler,
    valueBlurHandler: CVCBlurHandler,
    valueReset: CVCReset,
  } = useInput(
    (value) =>
      (value.trim().length === 3) & !isNaN(+value.trim().split(" ").join(""))
  );
  //

  //
  const formSubmitHandler = (e) => {
    e.preventDefault();
    nameBlurHandler();
    cardNumberBlurHandler();
    expMonthBlurHandler();
    expYearBlurHandler();
    CVCBlurHandler();
    if (
      nameIsValid &&
      cardNumberIsValid &&
      expMonthIsValid &&
      expYearIsValid &&
      CVCIsValid
    ) {
      setFormIsValid(true);

      setStateVariables({ fullName, cardNumber, expMonth, expYear, CVC });
    }
    if (nameIsValid) nameReset();
    if (cardNumberIsValid) cardNumberReset();
    if (expMonthIsValid) expMonthReset();
    if (expYearIsValid) expYearReset();
    if (CVCIsValid) CVCReset();

    //store all state variables in an object and store that object in the context
  };
  //
  //ERROR TEXTS//
  let fullNameErrorText = "Can't be empty";
  fullNameErrorText =
    fullName.trim() === "" ? "Can't be empty" : "Please enter full name";
  let cardNumberErrorText =
    cardNumber.trim() === ""
      ? "Can't be empty"
      : "Wrong format, please enter 16 digit card number ";

  let expMonthErrorText =
    expMonth.trim() === "" || expYear.trim() === ""
      ? "Can't be empty"
      : "Invalid";

  let CVCErrorText = CVC.trim() === "" ? "Can't be empty" : "Invalid";
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
  let expMonthInputStyle = "exp-date MM-input input-style";
  if (expMonthHasError) {
    expMonthInputStyle += " input-error";
  } else if (!expMonthHasError && expMonthIsTouched) {
    expMonthInputStyle += " valid-input";
  }
  let expYearInputStyle = "exp-date YY-input input-style";
  if (expYearHasError) {
    expYearInputStyle += " input-error";
  } else if (!expYearHasError && expYearIsTouched) {
    expYearInputStyle += " valid-input";
  }
  let CVCInputStyle = "input-style";
  if (CVCHasError) {
    CVCInputStyle += " input-error";
  } else if (!CVCHasError && CVCIsTouched) {
    CVCInputStyle += " valid-input";
  }
  let content = !formIsValid ? (
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
              className={expMonthInputStyle}
              maxLength={2}
              onChange={expMonthChangeHandler}
              onBlur={expMonthBlurHandler}
              value={expMonth}
            />

            <input
              type="text"
              placeholder="YY"
              className={expYearInputStyle}
              maxLength={2}
              onChange={expYearChangeHandler}
              onBlur={expYearBlurHandler}
              value={expYear}
            />
          </span>{" "}
          {(expMonthHasError || expYearHasError) && (
            <p className={errorMessageStyle}>{expMonthErrorText}</p>
          )}
        </span>
        <span>
          <label className="label" htmlFor="">
            CVC
          </label>
          <input
            type="text"
            placeholder="e.g. 123"
            className={CVCInputStyle}
            maxLength={3}
            onChange={CVCChangeHandler}
            onBlur={CVCBlurHandler}
            value={CVC}
          />
          {CVCHasError && <p className={errorMessageStyle}>{CVCErrorText}</p>}
        </span>
      </div>

      <button type="submit" className="btn">
        Confirm
      </button>
    </form>
  ) : (
    <div className="completed-container">
      <CompletedIcon className="completed-icon" />
      <p className="primary-text">THANK YOU!</p>
      <p className="secondary-text">We've added your card details</p>

      <button className="continue btn" onClick={continueFN}>
        Continue
      </button>
    </div>
  );
  return (
    <section className="main-container">
      <CardDetails stateVariables={stateVariables} />
      {content}
    </section>
  );
};

export default CardCTA;
