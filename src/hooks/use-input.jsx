import { useState } from "react";
////////////////////////////////
//because the validation logic for each type of input is very similar, we create a template for the logic using a custom hook that we can dynamically configure
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);
  ////functionality when the input value changes
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    setEnteredValueIsTouched(false);
  };

  ////when the user leaves an input field
  const valueBlurHandler = () => {
    setEnteredValueIsTouched(true);
  };
  ////when a valid input field is submitted
  const valueReset = () => {
    setEnteredValue("");
    setEnteredValueIsTouched(false);
  };
  ////variables used for validation logic
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && enteredValueIsTouched;

  ////functionality for cardholder number input field- adds the space after every 4 digits
  const keyUpHandler = () => {
    let cardArray = enteredValue.split("");

    if (
      cardArray.filter((value) => value !== " ").length % 4 === 0 &&
      cardArray.length > 0
    ) {
      cardArray.push(" ");
      setEnteredValue(cardArray.join(""));
    }
  };
  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    isTouched: enteredValueIsTouched,
    valueChangeHandler,
    valueBlurHandler,
    valueReset,
    keyUpHandler,
  };
};
export default useInput;
