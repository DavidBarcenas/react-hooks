import '@testing-library/jest-dom';
import React from 'react'
import { shallow, mount } from 'enzyme';
import { Todo } from '../../../components/useReducer/Todo';
import { demoTodos } from '../../fixtures/demoTodos'
import { act } from '@testing-library/react';

describe('<Todo /> testing', () => {
  
  const wrapper = shallow(<Todo />)

  Storage.prototype.setItem = jest.fn()

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  
  test('should add ToDo', () => {
    // da el contexto en el cual se esta montanto (el documento)
    const wrapper = mount(<Todo />)

    act(() => {
      wrapper.find('TodoForm').prop('handleAddTodo')(demoTodos[0])
      wrapper.find('TodoForm').prop('handleAddTodo')(demoTodos[1])
    })

    expect(wrapper.find('h1').text().trim()).toBe(`Todo App (${demoTodos.length})`)
    expect(localStorage.setItem).toHaveBeenCalledTimes(2)
  })
})
