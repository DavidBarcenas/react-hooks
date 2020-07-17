import React from 'react'

export const ShowIncrement = ({increment}) => {
  console.log('generete!!')
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>Increment</button>
  )
}
