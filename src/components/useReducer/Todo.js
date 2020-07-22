import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hooks/useForm'
import './useReducer.css'
import { TodoList } from './TodoList'

// const initialState = [{
//   id: new Date().getTime(),
//   desc: 'Learning useReducer',
//   done: false
// }]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const Todo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)
  const [{desc}, handleInputchange, reset] = useForm({
    desc: ''
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (todoID) => {
    const action = { type: 'delete', payload: todoID }
    dispatch(action);
  }

  const handleToogle = (todoID) => dispatch({ type: 'toggle', payload: todoID });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(desc.trim().length <= 1) { return; }

    const newTodo = { id: new Date().getTime(), desc, done: false }
    const action = { type: 'add', payload: newTodo }
    
    dispatch(action);
    reset();
  }

  return (
    <div className="text-center p-5">
      <h1 className="text-primary">Todo App ({todos.length})</h1>
      <hr/>

      {/* Form */}

      <form className="mb-3" onSubmit={handleSubmit}>
        <input type="text" name="desc" placeholder="ToDo" value={desc} onChange={handleInputchange}/>
        <button type="submit" className="btn btn-success btn-sm mb-1">Add ToDo</button>
      </form>

      <TodoList 
        todos={todos}
        handleToogle={handleToogle}
        handleDelete={handleDelete} 
      />
    </div>
  )
}
