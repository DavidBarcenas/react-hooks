import '@testing-library/jest-dom';
import React, { useState } from 'react'
import { shallow } from 'enzyme';
import { FocusScreen } from '../../../components/useRef/FocusScreen';

describe('<FocusScreen /> testing', () => {
  const wrapper = shallow(<FocusScreen />)
  
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
  
  
  test('should show MultipleCustomHook component', () => {
    wrapper.find('button').simulate('click')
    expect(wrapper.find('MultipleCustomHook').exists()).toBe(true)
  })

})
