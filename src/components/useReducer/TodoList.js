import React from 'react'
import PropTypes from 'prop-types';
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleToogle, handleDelete}) => {
  return (
    <ul className="list-group text-left">
      {
        todos.map((todo, i) => 
          <TodoListItem 
            key={todo.id} 
            todo={todo} 
            i={i} 
            handleToogle={handleToogle} 
            handleDelete={handleDelete} />
          )
      }
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToogle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}