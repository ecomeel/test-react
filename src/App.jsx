import React, { useState } from "react";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import Counter from "./components/Counter/Counter";
import MyButton from "./components/Button/Button";
import Logs from "./components/Logs/Logs";

const INITIAL_COUNTER_VALUE = 0;
const COUNTER_STEP = 1;
const MAX_COUNTER_VALUE = 5;
const MIN_COUNTER_VALUE = -5;

function App() {
    const [counter, setCounter] = useState(INITIAL_COUNTER_VALUE);
    const [logs, setLogs] = useState([]);

    let id = 0;

    function handleclick() {
        console.log("button clicked");
    }

    function handleMinusBtnClick() {
        const newCounter = counter - COUNTER_STEP;

        const log = {
          id: id,
          action: 'minus',
          prevValue: counter,
          value: newCounter
        }

        setCounter(newCounter);
        setLogs([...logs, log]);
    }

    function handlePlusBtnClick() {
        const newCounter = counter + COUNTER_STEP;

        const log = {
          action: 'plus',
          prevValue: counter,
          value: newCounter
        } 

        setCounter(newCounter);
        setLogs([...logs, log]);
    }

    function isMinusBtnDisabled() {
        return counter <= MIN_COUNTER_VALUE;
    }

    function isPlusBtnDisabled() {
        return counter >= MAX_COUNTER_VALUE;
    }

    function isCounterOutLimit() {
        return counter <= MIN_COUNTER_VALUE || counter >= MAX_COUNTER_VALUE;
    }

    return (
        <>
            <h1>Hello worlds!</h1>
            <HeaderSection />
            <MyButton text={"Clicke me"} onClick={handleclick} />

            <Counter value={counter} isDanger={isCounterOutLimit()} />
            <MyButton
                text={"-"}
                isDisabled={isMinusBtnDisabled()}
                onClick={handleMinusBtnClick}
            />
            <MyButton
                text={"+"}
                isDisabled={isPlusBtnDisabled()}
                onClick={handlePlusBtnClick}
            />
            <Logs logs={logs} />
        </>
    );
}

export default App;
