import React from "react";
import Header from "./Header";

function myButton() {
  return (
    <button>Hello</button>
  )
}

function App() {
  return (
    <div className="">
      <h1>Hello worlds!</h1>
      <Header />
      <myButton />
    </div>
  )
}

export default App
