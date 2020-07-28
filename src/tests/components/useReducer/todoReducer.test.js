import '@testing-library/jest-dom';
import { todoReducer } from '../../../components/useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos'

describe('<todoReducer /> testing', () => {
  
  test('should return state default', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos)
  })
  
  
  test('should add ToDo', () => {
    const payload = {
      id: 3,
      desc: 'Learning Node',
      done: false
    }
    const state = todoReducer(demoTodos, {type: 'add', payload});

    expect(state.length).toBe(3)
    expect(state).toEqual([...demoTodos, payload])
  })

  
  test('should remove ToDo', () => {
    const state = todoReducer(demoTodos, {type: 'delete', payload: 1});
    expect(state.length).toBe(1)
    expect(state[0]).toEqual(demoTodos[1])
  })
  
  
  test('should make the change of the ToDo', () => {
    const state = todoReducer(demoTodos, {type: 'toggle', payload: 2});
    expect(state[1].done).toBe(true)
  })
  
  
})
