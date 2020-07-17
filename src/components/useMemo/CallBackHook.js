import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10);
  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  const increment = useCallback(
    (num) => {
      setCounter(c => c + num)
    },
    [setCounter],
  )

  return (
    <div className="text-center p-5">
      <h1>CallbackHook: {counter}  </h1>
      <hr/>
      <ShowIncrement increment={increment} />
    </div>
  )
}
