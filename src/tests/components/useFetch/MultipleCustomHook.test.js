import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import React from 'react'
import { shallow } from 'enzyme';
import { MultipleCustomHook } from '../../../components/useFetch/MultipleCustomHook';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')


describe('<MultipleCustomHook /> testing', () => {

  useCounter.mockReturnValue({
    counter: 10
  })
  
  test('should render correctly', () => {

    useFetch.mockReturnValue({
      data: null, loading: true, error: null
    })

    const wrapper = shallow(<MultipleCustomHook />)
    expect(wrapper).toMatchSnapshot()
  })

  
  test('should show info', () => {
    useFetch.mockReturnValue({
      data: [{
         author: 'Daveepro', 
         quote: 'Hello World'
      }], 
      loading: false, 
      error: null
    })

    const wrapper = shallow(<MultipleCustomHook />)
    expect(wrapper.find('.spinner-border').exists()).toBe(false)
  })
  
  

}) 
