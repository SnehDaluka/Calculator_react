import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [exp, setExp] = useState("");
  const [show, setShow] = useState(false);

  const handleEvent = (e) => {
    if (result !== "Error") {
      if (
        e.target.value === "1" ||
        e.target.value === "2" ||
        e.target.value === "3" ||
        e.target.value === "4" ||
        e.target.value === "5" ||
        e.target.value === "6" ||
        e.target.value === "7" ||
        e.target.value === "8" ||
        e.target.value === "9" ||
        e.target.value === "0" ||
        e.target.value === "/" ||
        e.target.value === "*" ||
        e.target.value === "+" ||
        e.target.value === "-" ||
        e.target.value === "." ||
        e.target.value === "00"
      ) {
        if (show === false) {
          if (exp.length + 1 <= 20) {
            setExp(exp + e.target.value);
          }
        } else if (
          e.target.value === "/" ||
          e.target.value === "*" ||
          e.target.value === "+" ||
          e.target.value === "-"
        ) {
          if (exp.length + 1 <= 20) {
            setExp(eval(exp) + e.target.value);
            setShow(false);
          }
        }
      } else if (e.target.value === "eql") {
        try {
          if (exp !== "") setResult(eval(exp));
        } catch (error) {
          setResult("Error");
        }
        setShow(true);
      } else if (e.target.value === "del") {
        if (show) {
          setExp(eval(exp));
          setShow(false);
        } else {
          setExp(exp.substring(0, exp.length - 1));
        }
      } else if (e.target.innerHTML === "AC") {
        setResult("0");
        setExp("");
        setShow(false);
      }
    } else if (result === "Error") {
      if (e.target.innerHTML === "AC") {
        setResult("0");
        setExp("");
        setShow(false);
      }
    }
  };

  return (
    <>
      <div className="box">
        <h1>Calculator</h1>
        <div className="output">
          <div className="preData">{show ? exp : null}</div>
          <div className="currData">
            {show ? result : exp === "" ? "0" : exp}
          </div>
        </div>
        <div className="input">
          <button type="button" id="item1" onClick={handleEvent}>
            AC
          </button>
          <button type="button" value="/" id="item2" onClick={handleEvent}>
            <i className="fa-solid fa-divide"></i>
          </button>
          <button type="button" value="*" id="item3" onClick={handleEvent}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button type="button" value="del" id="item4" onClick={handleEvent}>
            <i className="fa-solid fa-delete-left"></i>
          </button>
          <button type="button" id="item5" value="7" onClick={handleEvent}>
            7
          </button>
          <button type="button" value="8" id="item6" onClick={handleEvent}>
            8
          </button>
          <button type="button" value="9" id="item7" onClick={handleEvent}>
            9
          </button>
          <button type="button" value="-" id="item8" onClick={handleEvent}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <button type="button" value="4" id="item9" onClick={handleEvent}>
            4
          </button>
          <button type="button" value="5" id="item10" onClick={handleEvent}>
            5
          </button>
          <button type="button" value="6" id="item11" onClick={handleEvent}>
            6
          </button>
          <button type="button" value="+" id="item12" onClick={handleEvent}>
            <i className="fa-solid fa-plus"></i>
          </button>
          <button type="button" value="1" id="item13" onClick={handleEvent}>
            1
          </button>
          <button type="button" value="2" id="item14" onClick={handleEvent}>
            2
          </button>
          <button type="button" value="3" id="item15" onClick={handleEvent}>
            3
          </button>
          <button type="button" value="eql" id="item16" onClick={handleEvent}>
            <i className="fa-solid fa-equals"></i>
          </button>
          <button type="button" value="." id="item17" onClick={handleEvent}>
            .
          </button>
          <button type="button" value="0" id="item18" onClick={handleEvent}>
            0
          </button>
          <button type="button" value="00" id="item19" onClick={handleEvent}>
            00
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
