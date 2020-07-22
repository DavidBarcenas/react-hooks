import React from 'react'
import PropTypes from 'prop-types'

export const TodoListItem = ({todo, i, handleToogle, handleDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <label className={`${todo.done && 'complete'} mb-0`} onClick={() => handleToogle(todo.id)}>{i + 1} - {todo.desc}</label>
      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(todo.id)}>X</button>
    </li>
  )
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  handleToogle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}