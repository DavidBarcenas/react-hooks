import '@testing-library/jest-dom';
import React from 'react'
import { mount } from 'enzyme';
import { UserContext } from '../../../components/useContext/UserContext';
import { LoginScreen } from '../../../components/useContext/LoginScreen';

describe('<LoginScreen /> testing', () => {

  const setUser = jest.fn()

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  )

  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  

  test('should run setUser with argument', () => {
    wrapper.find('button').simulate('click')
    expect(setUser).toHaveBeenCalledWith({
      id: 1234,
      name: 'Daveepro',
      email: 'daveepro@outook.com'
    })
  })
  
})
