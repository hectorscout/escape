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
  const successRef = useRef();
  const failureRef = useRef();

  const [success, setSuccess] = useState(false);

  const allEntered =
    first !== "" && second !== "" && third !== "" && fourth !== "";

  useEffect(() => {
    const checkCode = `${first}${second}${third}${fourth}` === CODE;
    setSuccess(checkCode);
    if (allEntered) {
      if (checkCode) {
        successRef.current.play();
      } else {
        failureRef.current.play();
        setTimeout(() => {
          setFirst("");
          setSecond("");
          setThird("");
          setFourth("");
        }, 2000);
      }
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
        <div className="App-digits">
          <DigitInput
            digit={first}
            setDigit={setFirst}
            ref={firstRef}
            invalid={allEntered && !success}
          ></DigitInput>
          <DigitInput
            digit={second}
            setDigit={setSecond}
            ref={secondRef}
            invalid={allEntered && !success}
          ></DigitInput>
          <DigitInput
            digit={third}
            setDigit={setThird}
            ref={thirdRef}
            invalid={allEntered && !success}
          ></DigitInput>
          <DigitInput
            digit={fourth}
            setDigit={setFourth}
            ref={fourthRef}
            invalid={allEntered && !success}
          ></DigitInput>
        </div>
        <audio controls={success} ref={successRef}>
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
