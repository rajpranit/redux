import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const isShowCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  const incrementHandler = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const increaseHandler = () => {
    dispatch({ type: "INCREASE", value: 5 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShowCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>Increase by 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
