import React, {useState} from "react";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import Counter from "./components/Counter/Counter";
import MyButton from "./components/Button/Button";

function App() {
  const [counter, setCounter] = useState(0)

  function handleclick() {
    console.log('button clicked')
  }

  function handleMinusBtnClick() {
    setCounter(counter - 1)
  }

  function handlePlusBtnClick() {
    setCounter(counter + 1)
  }

  function isMinusBtnDisabled() {
    return counter === -5
  }

  function isPlusBtnDisabled() {
    return counter === 5
  }

  return (
    <>
      <h1>Hello worlds!</h1>
      <HeaderSection />
      <MyButton 
        text={'Clicke me'}
        onClick={handleclick}
      />

      <Counter value={counter}/>
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
