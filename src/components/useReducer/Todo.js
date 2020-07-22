import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import './useReducer.css'

// const initialState = [{ id: new Date().getTime(), desc: 'Learning useReducer', done: false }]
const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const Todo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete  = (todoID) => dispatch({ type: 'delete', payload: todoID });
  const handleToogle  = (todoID) => dispatch({ type: 'toggle', payload: todoID });
  const handleAddTodo = (newTodo) => dispatch({ type: 'add', payload: newTodo });

  return (
    <div className="text-center p-5">
      <h1 className="text-primary">Todo App ({todos.length})</h1>
      <hr/>

      <TodoForm handleAddTodo={handleAddTodo} />

      <TodoList 
        todos={todos}
        handleToogle={handleToogle}
        handleDelete={handleDelete} 
      />
    </div>
  )
}
