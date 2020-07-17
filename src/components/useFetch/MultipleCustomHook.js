import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

export const MultipleCustomHook = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
  const { author, quote } = !!data && data[0];

  return (
    <div className="text-center p-5">
      <h1 className="text-primary">useFetch - BreakingBad</h1>
      <hr/>
      
      {
        loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <blockquote className="blockquote m-1">
              <p className="mb-0">{ quote }</p>
              <footer className="blockquote-footer">{ author }</footer>
            </blockquote>

            <button className="btn btn-success mt-4" onClick={increment}>Next</button>
          </>
        )
      }
    </div>
  )
}
