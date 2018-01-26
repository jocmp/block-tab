import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Description from '../Description';

describe('Description', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Description />);
    expect(toJson(wrapper)).toMatchSnapShot();
  });
});
