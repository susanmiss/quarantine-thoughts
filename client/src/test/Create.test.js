import React from 'react';
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'; 
import renderer from 'react-test-renderer';
import Create from '../Create'


const setup = (props={}, state=null) => {
    const wrapper = shallow(<Create {...props} />)
    if( state ) wrapper.setState(state);
    return wrapper;
  }

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  }

describe("<Create />", () => {

  let wrapper;
  beforeEach(() => wrapper = shallow(<Create />));
  
  it('Renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
  })
  
  it('should render a <div >', () => { 
      expect(wrapper.find('div').length).toEqual(5);
  });

  it('should render a <form >', () => { 
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render a <button>', () => { 
     expect(wrapper.find('button').length).toEqual(1);
  });


})