import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'

const initialState = [{
  id: new Date().getTime(),
  desc: 'Learning useReducer',
  done: false
}]

export const Todo = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  return (
    <div className="text-center p-5">
      <h1 className="text-primary">Todo App</h1>
      <hr/>

      <ul className="list-group text-left">
        {
          todos.map(todo => (
          <li key={todo.id} className="list-group-item">
            <label className="m-0">{todo.desc}</label>
          </li>
          ))
        }
      </ul>
    </div>
  )
}
