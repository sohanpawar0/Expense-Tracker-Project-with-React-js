import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  // now we can change increment value
  const increaseByHandler = () => {
    dispatch(counterActions.increaseBy(10))
  };
  const decreaseByHandler = () => {
    dispatch(counterActions.decreaseBy(10))
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={increaseByHandler}>IncreaseBy 10</button>
        <button onClick={decreaseByHandler}>DecreaseBy 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;