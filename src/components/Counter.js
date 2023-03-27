import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const counter=useSelector(state=>state.counter)
  const dispatch=useDispatch()

  const incrementHandler=()=>{
    dispatch({type:'increment'})
  }

  const decrementHandler=()=>{
    dispatch({type:'decrement'})
  }

  const incrementHandler5=()=>{
    dispatch({type:'incrementt'})
  }

  const decrementHandler5=()=>{
    dispatch({type:'decrementt'})
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={incrementHandler5}>increment5</button>
        <button onClick={decrementHandler5}>decrement5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
