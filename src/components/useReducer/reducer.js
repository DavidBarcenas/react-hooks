const initialState = [{
  id: 1,
  todo: 'Create app',
  done: false
}]


const todoReducer = (state = initialState, action) => {

  if(action.type=== 'agregar') {
    return [...state, action.payload]
  }

  return state;
}

let todos;

const newTodo = {
  id: 2,
  todo: 'Add wallet',
  done: false
}

const action = {
  type: 'agregar',
  payload: newTodo
}

todos = todoReducer(todos, action)


console.log(todos)