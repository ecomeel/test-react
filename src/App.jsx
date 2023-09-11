import React, {useState} from "react";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import Counter from "./components/Counter/Counter";
import MyButton from "./components/Button/Button";

const INITIAL_COUNTER_VALUE = 0;
const COUNTER_STEP = 3
const MAX_COUNTER_VALUE = 5;
const MIN_COUNTER_VALUE = -5

function App() {
  const [counter, setCounter] = useState(INITIAL_COUNTER_VALUE)

  function handleclick() {
    console.log('button clicked')
  }

  function handleMinusBtnClick() {
    setCounter(counter - COUNTER_STEP)
  }

  function handlePlusBtnClick() {
    setCounter(counter + COUNTER_STEP)
  }

  function isMinusBtnDisabled() {
    return counter <= MIN_COUNTER_VALUE
  }

  function isPlusBtnDisabled() {
    return counter >= MAX_COUNTER_VALUE
  }

  function isCounterOutLimit() {
    return counter <= MIN_COUNTER_VALUE || counter >= MAX_COUNTER_VALUE
  }

  return (
    <>
      <h1>Hello worlds!</h1>
      <HeaderSection />
      <MyButton 
        text={'Clicke me'}
        onClick={handleclick}
      />

      <Counter 
        value={counter}
        isDanger={isCounterOutLimit()}/>
      <MyButton
        text = {'-'}
        isDisabled = {isMinusBtnDisabled()}
        onClick = {handleMinusBtnClick}
      />
      <MyButton
        text = {'+'}
        isDisabled={isPlusBtnDisabled()}
        onClick = {handlePlusBtnClick}
      />
    </>
  )
}

export default App
