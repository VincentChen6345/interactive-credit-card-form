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

    if (
      cardArray.filter((value) => value !== " ").length % 4 === 0 &&
      cardArray.length > 0
    ) {
      cardArray.push(" ");
      setEnteredValue(cardArray.join(""));

      console.log(
        "removing all spaces",
        +enteredValue.trim().split(" ").join(""),
        "this is type ",
        typeof +enteredValue.trim().split(" ").join(""),
        "length",
        enteredValue.trim().split(" ").join("").length
      );
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
