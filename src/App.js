import React, { useEffect, useRef, useState } from "react";
import successSound from "./assets/success.mp3";
import failureSound from "./assets/failure.mp3";
import "./App.css";

import DigitInput from "./DigitInput";

const CODE = "1234";

function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const failureRef = useRef();

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const allEntered =
      first !== "" && second !== "" && third !== "" && fourth !== "";
    const checkCode = `${first}${second}${third}${fourth}` === CODE;
    setSuccess(checkCode);
    if (allEntered && !checkCode) {
      failureRef.current.play();
    } else {
      if (first === "") firstRef.current && firstRef.current.focus();
      else if (second === "") secondRef.current && secondRef.current.focus();
      else if (third === "") thirdRef.current && thirdRef.current.focus();
      else if (fourth === "") fourthRef.current && fourthRef.current.focus();
    }
  }, [first, second, third, fourth]);

  return (
    <div className="App">
      <header className="App-header">
        <DigitInput
          digit={first}
          setDigit={setFirst}
          ref={firstRef}
        ></DigitInput>
        <DigitInput
          digit={second}
          setDigit={setSecond}
          ref={secondRef}
        ></DigitInput>
        <DigitInput
          digit={third}
          setDigit={setThird}
          ref={thirdRef}
        ></DigitInput>
        <DigitInput
          digit={fourth}
          setDigit={setFourth}
          ref={fourthRef}
        ></DigitInput>
        <audio controls={success}>
          <source src={successSound} />
        </audio>
        <audio ref={failureRef}>
          <source src={failureSound} />
        </audio>
      </header>
    </div>
  );
}

export default App;
