import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Carousel from '../Carousel';
import { tabs } from './fixtures';

describe('Carousel', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Carousel tabs={ tabs() } onTabClick={ jest.fn() } />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('responds to click events', () => {
    const onTabClick = jest.fn();
    const wrapper = shallow(<Carousel tabs={ tabs() } onTabClick={ onTabClick } />);
    wrapper.find('.carousel__tab').first().simulate('click');
    expect(onTabClick).toHaveBeenCalled();
  });

  it('handles an empty tab', () => {
    const wrapper = shallow(<Carousel tabs={ [...tabs(), {}] } onTabClick={ jest.fn() } />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});