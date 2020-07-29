import '@testing-library/jest-dom';
import React from 'react'
import { shallow, mount } from 'enzyme';
import { HomeScreen } from '../../../components/useContext/HomeScreen';
import { UserContext } from '../../../components/useContext/UserContext';

describe('<HomeScreen /> testing', () => {

  const user = {
    name: 'David',
    email: 'daveepro@outlook.com'
  }

  const wrapper = mount(
    <UserContext.Provider value={{
      user
    }}>
      <HomeScreen />
    </UserContext.Provider>
  )
  
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  

})
