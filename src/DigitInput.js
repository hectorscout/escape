import React, { forwardRef } from "react";

const DigitInput = forwardRef(({ setDigit, digit }, ref) => {
  const onChange = e => {
    const val = e.target.value.slice(-1);
    isNaN(parseInt(val, 10)) ? setDigit("") : setDigit(val);
  };
  return <input onChange={onChange} value={digit} ref={ref}></input>;
});

export default DigitInput;
