import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Description from '../Description';

describe('Description', () => {
  const tab = () => (
    { id: '0101', title: 'Title 3', description: "<p>Description here</p>", media: "fake://img.con" }
  );

  it('renders correctly', () => {
    const wrapper = shallow(<Description tab={ tab() } active={ true } />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('handles empty description', () => {
    const wrapper = shallow(<Description tab={ {} } active={ true } />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders inactive state', () => {
    const wrapper = shallow(<Description tab={ {} } active={ false } />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
