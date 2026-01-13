import { useState } from 'react'
import './App.css'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from "./features/counter/counterSlice.js"

function App() {
  
  const[amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function handleIncrement(){
    dispatch(increment())
  }

  function handleDecrement(){
    dispatch(decrement())
  }

  function handleReset(){
    dispatch(reset())
  }

  function handleUpdateCounter(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <p>Counter : {count}</p>
      <button onClick={handleDecrement}>-</button>
      <br /><br />
      <input value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} type="Number" placeholder='Enter the amount'/> 
      <br /><br />
      <button onClick={handleUpdateCounter}>Update</button><br /><br />
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
