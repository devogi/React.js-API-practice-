import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h4> {counter} </h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add}> Add Value </button>
    </div>
  );
}

export default App;
