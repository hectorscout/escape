import React, { useEffect, useState } from "react";
import "./App.css";

import DigitInput from "./DigitInput";

const CODE = "12";

function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");

  const checkCode = () => {
    console.log(`${first}${second}`);
    return `${first}${second}` === CODE;
  };

  useEffect(() => {
    const allEntered = first !== "" && second !== "";
    if (allEntered) {
      if (checkCode()) {
        console.log("got it");
      } else {
        console.log("nope");
      }
    }
  });

  console.log(first);

  return (
    <div className="App">
      <header className="App-header">
        <DigitInput digit={first} setDigit={setFirst}></DigitInput>
        <DigitInput digit={second} setDigit={setSecond}></DigitInput>
        <DigitInput digit={third} setDigit={setThird}></DigitInput>
        <DigitInput digit={fourth} setDigit={setFourth}></DigitInput>
      </header>
    </div>
  );
}

export default App;
