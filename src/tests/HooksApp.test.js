import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('<HooksApp /> testing', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<HooksApp />)
    expect(wrapper).toMatchSnapshot()
  })
})
