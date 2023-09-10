import React, {useState} from "react";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import MyButton from "./components/Button/Button";

function App() {
  const [counter, setCounter] = useState(0)

  function handleclick() {
    console.log('button clicked')
  }

  function handleMinusBtnClick() {
    setCounter(counter - 1)
    console.log(counter)
  }

  function handlePlusBtnClick() {
    setCounter(counter + 1)
    console.log(counter)
  }

  return (
    <>
      <h1>Hello worlds!</h1>
      <HeaderSection />
      <MyButton 
        text={'Clicke me'}
        onClick={handleclick}
      />

      <p>{counter}</p>
      <MyButton
        text = {'-'}
        onClick = {handleMinusBtnClick}
      />
      <MyButton
        text = {'+'}
        onClick = {handlePlusBtnClick}
      />
    </>
  )
}

export default App
