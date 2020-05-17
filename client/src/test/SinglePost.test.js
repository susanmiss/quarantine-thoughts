import React from 'react';
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'; 
import renderer from 'react-test-renderer';
import SinglePost from '../SinglePost'


const setup = (props={}, state=null) => {
    const wrapper = shallow(<SinglePost {...props} />)
    if( state ) wrapper.setState(state);
    return wrapper;
  }

  const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  }

describe("<SinglePost />", () => {


  it('renders correctly', () => {
      const tree = renderer
          .create(<SinglePost />)
          .toJSON();
      expect(tree).toMatchSnapshot();
  });
  let wrapper;
  beforeEach(() => wrapper = shallow(<SinglePost />));
  
  it('Renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
  })
  
  it('should render a <div />', () => { 
      expect(wrapper.find('div').length).toEqual(1);
  });


})