import React, {useState, useMemo} from 'react'
import { useCounter } from '../../hooks/useCounter'

export const MemoHook = () => {

  const {counter, increment} = useCounter(100)
  const [show, setShow] = useState(true)

  const hardProcess = (iterations) => {
    for(let i = 0; i<iterations; i++) {
      console.log('iteration....')
    }

    return `${iterations} Iterations`
  }

  const memoHardProcess = useMemo(() => hardProcess(counter), [counter]);

  return (
    <div className="text-center p-5">
      <h1 className="text-primary">useMemo {counter} </h1>
      <hr/>

      <p>{ memoHardProcess }</p>

      <button className="btn btn-success" onClick={increment}>+1</button>
      <button className="btn btn-danger ml-3" onClick={() => setShow(!show)}>show/hide</button>
    </div>
  )
}
