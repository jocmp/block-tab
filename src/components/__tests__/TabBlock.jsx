import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TabBlock from '../TabBlock';
import { tabGroup } from './fixtures';

describe('Quiz Feedback', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TabBlock tabGroup={ tabGroup() } fetchTabGroup={ jest.fn() } />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});