import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoForm = ({handleAddTodo}) => {

  const [{desc}, handleInputchange, reset] = useForm({ desc: '' })

  const handleSubmit = (e) => {
    e.preventDefault();

    if(desc.trim().length <= 1) { return; }

    const newTodo = { id: new Date().getTime(), desc, done: false }
    
    handleAddTodo(newTodo);
    reset();
  }

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <input type="text" name="desc" placeholder="ToDo" value={desc} onChange={handleInputchange}/>
      <button type="submit" className="btn btn-success btn-sm mb-1">Add ToDo</button>
    </form>
  )
}
