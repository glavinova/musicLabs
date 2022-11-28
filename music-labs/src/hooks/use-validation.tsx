import { useState } from "react";

export interface IUseValidation {
  value: string;
  isValid: boolean;
  hasError: boolean;
  isEmpty: boolean;
  valueChangeHandler: (event: any) => void;
  inputBlurHandler: () => void;
  reset: () => void;
}

const useValidation = (
  validateValue: (value: string) => boolean
): IUseValidation => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const isEmpty = enteredValue.length === 0 && isTouched;
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event: any) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => setIsTouched(true);

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    isEmpty,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useValidation;
