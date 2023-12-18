import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter >= 1) setCounter(counter - 1);
  };
  return (
    <>
      <h1>Learn React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add</button>&nbsp;
      <button onClick={removeValue}>Remove</button>
    </>
  );
}

export default App;
