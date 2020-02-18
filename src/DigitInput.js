import React from "react";

const DigitInput = ({ setDigit, digit }) => {
  const onChange = e => {
    const val = e.target.value.slice(-1);
    isNaN(parseInt(val, 10)) ? setDigit("") : setDigit(val);
  };
  return <input onChange={onChange} value={digit}></input>;
};

export default DigitInput;
