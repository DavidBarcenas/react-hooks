import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterCustomHook = () => {

  const { state, increment, decrement, reset } = useCounter();

  return (
    <div className="text-center">
      <h1>Counter Custom Hook <span className="d-block">{state}</span></h1>
      <button className="btn btn-success mr-2" onClick={() => increment(2)}>+1</button>
      <button className="btn btn-primary mr-2" onClick={() => decrement(2)}>-1</button>
      <button className="btn btn-warning" onClick={reset}>Reset</button>
    </div>
  )
}
