import React from 'react'
import { useState } from 'react'

export const Counter = () => {

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  })

  const {counter1, counter2} = state;

  return (
    <div className="text-center p-5">
      <h1>Counter 1: {counter1}</h1>
      <h1>Counter 2: {counter2}</h1>
      <hr/>
      <button className="btn btn-primary" onClick={() => setState({ ...state, counter1: counter1 + 5})}>+1</button>
    </div>
  )
}
