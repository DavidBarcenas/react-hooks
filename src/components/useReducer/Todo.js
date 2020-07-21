import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './useReducer.css'

const initialState = [{
  id: new Date().getTime(),
  desc: 'Learning useReducer',
  done: false
}]

export const Todo = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState)

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      desc: 'New ToDo',
      done: false
    }
    
    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action);
  }

  return (
    <div className="text-center p-5">
      <h1 className="text-primary">Todo App ({todos.length})</h1>
      <hr/>

      {/* Form */}

      <form className="mb-3" onSubmit={handleSubmit}>
        <input type="text" name="desc" placeholder="ToDo "/>
        <button type="submit" className="btn btn-success btn-sm mb-1">Add ToDo</button>
      </form>

      <ul className="list-group text-left">
        {
          todos.map((todo, i) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between">
            <label className="m-0">{i + 1} - {todo.desc}</label>
            <button className="btn btn-danger btn-sm">X</button>
          </li>
          ))
        }
      </ul>

    </div>
  )
}
