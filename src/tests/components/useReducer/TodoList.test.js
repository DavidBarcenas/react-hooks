import '@testing-library/jest-dom';
import React from 'react'
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoList } from '../../../components/useReducer/TodoList';

describe('<TodoList /> testing', () => {
  
  const wrapper = shallow(
    <TodoList 
      todos={demoTodos}
      handleToogle={jest.fn()}
      handleDelete={jest.fn()}
    />
  )


  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  
  test('should have two listItems', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length)
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function))
    expect(wrapper.find('TodoListItem').at(0).prop('handleToogle')).toEqual(expect.any(Function))
  })
  
})
