import React, {useState} from 'react'
import { useCounter } from '../../hooks/useCounter'
import { SmallCounter } from './SmallCounter'

export const Memorize = () => {

  const {counter, increment} = useCounter(10)
  const [show, setShow] = useState(true)

  return (
    <div className="text-center p-5">
      <h1 className="text-primary">Memorize <SmallCounter value={counter} /></h1>
      <hr/>
      <button className="btn btn-success" onClick={increment}>+1</button>
      <button className="btn btn-danger ml-3" onClick={() => setShow(!show)}>show/hide</button>
    </div>
  )
}
