import React from 'react';
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'; 
import renderer from 'react-test-renderer';
import Nav from '../Nav'


const setup = (props={}, state=null) => {
    const wrapper = shallow(<Nav {...props} />)
    if( state ) wrapper.setState(state);
    return wrapper;
  }

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  }

describe("<Nav />", () => {


  let wrapper;
  beforeEach(() => wrapper = shallow(<Nav />));
  
  it('Renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
  })
  

 
})