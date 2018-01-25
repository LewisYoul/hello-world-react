import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let wrapper, products;

beforeEach(() => {

  products = [
    {id: 1, name: 'AirMax 90', brand: 'Nike'},
    {id: 2, name: 'Stan Smith', brand: 'Adidas'},
    {id: 3, name: 'Classic', brand: 'Reebok'},
  ]

  wrapper = shallow(
    <App />
  )
});

describe('App', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Contains an <h1> tag", () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });
  it("Contains an <h1> tag that has the text 'My Shop!'", () => {
    expect(wrapper.find('h1').first().contains("My Shop!")).toEqual(true);
  });
  it("Is instantiated with the correct products in state", () => {
    expect(wrapper.state('products')).toEqual(products)
  });
});
