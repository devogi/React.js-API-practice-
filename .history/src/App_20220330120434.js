import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () =>{
    dispatch(actions.increment)
  }
  const decrement = () =>{
    dispatch(actions.decrement)
  }
  const increme = () =>{
    dispatch(actions.increme)
  }
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
