import React, { useState } from "react";

function Calculator(props) {
  const [str, setStr] = useState("");
  const [num, setNum] = useState(0);

  return (
    <div>
      <div style={{height :"25px",margin:"10px"}}>
        <p>{str}</p>
      </div>
      
      <table>
        <tr>
          <td>
            <button onClick={() => setStr(str + "7")}>7</button>
          </td>
          <td>
            <button onClick={() => setStr(str + "8")}>8</button>
          </td>
          <td>
            <button onClick={() => setStr(str + "9")}>9</button>
          </td>
          <td>
            <button onClick={() => setStr(str + "/")}>/</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => setStr(str + "4")}>4</button>
          </td>
          <td>
            <button onClick={() => setStr(str + "5")}>5</button>
          </td>
          <td>
            <button onClick={() => setStr(str + "6")}>6</button>
          </td>
          <td>
            <button onClick={() => setStr(str + "*")}>*</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => setStr(str + "1")}>1</button>
          </td>
          <td>
            <button onClick={() => setStr(str + "2")}>2</button>
          </td>
          <td>
            <button onClick={() => setStr(str + "3")}>3</button>
          </td>
          <td>
            <button onClick={() => setStr(str + " - ")}>-</button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => setStr(str + "0")}>0</button>
          </td>
          <td>
            <button onClick={() => setStr(str + ".")}>.</button>
          </td>
          <td>
            <button onClick={() => setNum(eval(str))}>enter</button>
          </td>
          <td>
            <button onClick={() => setStr(str + " + ")}>+</button>
          </td>
        </tr>
      </table>

      <p>{num}</p>

      <button
        onClick={() => {
          setStr("");
          setNum(0);
        }}
      >
        RESET
      </button>
    </div>
  );
}

export default Calculator;
