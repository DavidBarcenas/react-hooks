import React, { useState } from 'react'
import { MultipleCustomHook } from '../useFetch/MultipleCustomHook'

export const FocusScreen = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="text-center p-5">
      <h1 className="text-success">Focus Screen</h1>
      <hr/>
      { show && <MultipleCustomHook /> }
      <button className="btn btn-danger mt-2" onClick={() => setShow(!show)}>show / hide</button>
    </div>
  )
}
