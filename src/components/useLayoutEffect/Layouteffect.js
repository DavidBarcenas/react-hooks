import React, { useLayoutEffect, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
  const { author, quote } = !!data && data[0];
  const pBox = useRef();

  useLayoutEffect(() => {
    console.log(pBox.current.getBoundingClientRect().width)
  }, [quote])

  return (
    <div className="text-center p-5">
      <h1 className="text-primary">Layout Effect</h1>
      <hr/>
          
      <blockquote className="blockquote m-1 d-flex">
        <p ref={pBox} className="mb-0">{ quote }</p>
        <footer className="blockquote-footer">{ author }</footer>
      </blockquote>

      <button className="btn btn-success mt-4" onClick={increment}>Next</button>
    </div>
  )
}
