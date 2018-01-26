import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Description from '../Description';

describe('Description', () => {
  const tab = () => (
    { id: '0101', title: 'Title 3', description: "<p>Description here</p>", media: "fake://img.con" }
  );

  it('renders correctly', () => {
    const { description, media } = tab();
    const wrapper = shallow(<Description description={ description } media={ media } />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
