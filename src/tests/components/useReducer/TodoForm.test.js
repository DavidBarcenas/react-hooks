import '@testing-library/jest-dom';
import React from 'react'
import { shallow } from 'enzyme';
import { TodoForm } from '../../../components/useReducer/TodoForm';
import { act } from '@testing-library/react-hooks';


describe('<TodoForm /> testing', () => {

  const handleAddTodo = jest.fn()
  const wrapper = shallow(<TodoForm  handleAddTodo={handleAddTodo} />)
  
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
  
  test('should not call handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({preventDefault(){}})

    expect(handleAddTodo).toHaveBeenCalledTimes(0)
  })

  
  test('should call handleAddTodo', () => {
    const value = 'aprender react'
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'desc'
      }
    })

    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({preventDefault(){}})

    expect(handleAddTodo).toHaveBeenCalledTimes(1)
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object))
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    })
    expect(wrapper.find('input').prop('value')).toBe('')
  }) 

})
