import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { demoTodos } from '../../fixtures/demoTodos';
import { TodoListItem } from '../../../components/useReducer/TodoListItem';

describe('<TodoListItem /> testing', () => {

  const handleToogle = jest.fn()
  const handleDelete = jest.fn()
  
  const wrapper = shallow(
    <TodoListItem 
      todo={demoTodos[0]} 
      i={demoTodos[0].id} 
      handleToogle={handleToogle} 
      handleDelete={handleDelete} 
    />)
  
  
  test('should render correctly', () => {
    const index = wrapper.find('label').text().split('-')[0]
    expect(wrapper).toMatchSnapshot()
    expect(index - 1).toBe(demoTodos[0].id)
  })

  
  test('should call the delete function', () => {
    wrapper.find('button').simulate('click')
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
  })
  
  
  test('should call the toggle function', () => {
    wrapper.find('label').simulate('click')
    expect(handleToogle).toHaveBeenCalledWith(demoTodos[0].id)
  })
 
  
  test('should show text correctly', () => {
    const text = wrapper.find('label').text()
    expect(text).toBe(`${demoTodos[0].id + 1} - ${demoTodos[0].desc}`)
  })
  

  test('should have the complete class', () => {
    expect(wrapper.find('label').hasClass('complete')).toBeTruthy()
  })
  
})
