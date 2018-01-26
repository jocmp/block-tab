import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TabBlock from '../TabBlock';

describe('Quiz Feedback', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TabBlock />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});