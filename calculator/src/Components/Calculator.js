import React, { useState } from "react";
import { Container, Screen, Previous, Current, Button } from "../styles/Main";

const Calculator = () => {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operations, setOperations] = useState("");
  const appendValueHandler = (e) => {
    const value = e.target.getAttribute("data");
    if (value === "." && current.includes(".")) {
      return;
    }
    setCurrent(current + value);
  };
  const deleteHandler = () => {
    setCurrent(String(current).slice(0, -1));
  };

  const allClearHandler = () => {
    setCurrent("");
    setOperations("");
    setPrevious("");
  };

  const operationHandler = (el) => {
    if (current === "") return;
    if (previous !== "") {
      let val = compute();
      setPrevious(val);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
  };

  const equalHandler = () => {
    let val = compute();
    if (val === undefined || val == null) return;
    setCurrent(val);
    setPrevious("");
    setOperations("");
  };

  const compute = () => {
    let result;
    let previousNum = parseFloat(previous);
    let currentNum = parseFloat(current);
    if (isNaN(previousNum) || isNaN(currentNum)) return;
    switch (operations) {
      case "÷":
        result = previousNum / currentNum;
        break;
      case "x":
        result = previousNum * currentNum;
        break;
      case "-":
        result = previousNum - currentNum;
        break;
      case "+":
        result = previousNum + currentNum;
        break;
      default:
        return;
    }
    return result;
  };
  return (
    <>
      <Container>
        <Screen>
          <Previous>
            {previous} {operations}
          </Previous>
          <Current>{current}</Current>
        </Screen>
        <Button onClick={allClearHandler} gridSpan={2}>
          AC
        </Button>
        <Button onClick={deleteHandler} deleteKey>
          DEL
        </Button>
        <Button data={"÷"} onClick={operationHandler} operation>
          ÷
        </Button>
        <Button data={7} onClick={appendValueHandler}>
          7
        </Button>
        <Button data={8} onClick={appendValueHandler}>
          8
        </Button>
        <Button data={9} onClick={appendValueHandler}>
          9
        </Button>
        <Button data={"x"} onClick={operationHandler} operation>
          X
        </Button>
        <Button data={4} onClick={appendValueHandler}>
          4
        </Button>
        <Button data={5} onClick={appendValueHandler}>
          5
        </Button>
        <Button data={6} onClick={appendValueHandler}>
          6
        </Button>
        <Button data={"+"} onClick={operationHandler} operation>
          +
        </Button>
        <Button data={1} onClick={appendValueHandler}>
          1
        </Button>
        <Button data={2} onClick={appendValueHandler}>
          2
        </Button>
        <Button data={3} onClick={appendValueHandler}>
          3
        </Button>
        <Button data={"-"} onClick={operationHandler} operation>
          -
        </Button>
        <Button data={"."} onClick={appendValueHandler} decimal>
          .
        </Button>
        <Button data={0} onClick={appendValueHandler}>
          0
        </Button>
        <Button onClick={equalHandler} gridSpan={2} equals>
          =
        </Button>
      </Container>
    </>
  );
};

export default Calculator;
