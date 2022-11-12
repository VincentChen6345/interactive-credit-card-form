import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
    setEnteredValueIsTouched(false);
  };
  const valueBlurHandler = () => {
    setEnteredValueIsTouched(true);
  };
  const valueReset = () => {
    setEnteredValue("");
    setEnteredValueIsTouched(false);
  };
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && enteredValueIsTouched;

  const keyUpHandler = () => {
    let cardArray = enteredValue.split("");
    console.log(cardArray);

    if (
      cardArray.filter((value) => value !== " ").length % 4 === 0 &&
      cardArray.length > 0
    ) {
      cardArray.push(" ");
      setEnteredValue(cardArray.join(""));
      console.log(enteredValue);
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
