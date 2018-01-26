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

  describe('#render', () => {
    it("Contains an <h1> tag", () => {
      expect(wrapper.find('h1').length).toEqual(1);
    });
    it("Contains an <h1> tag that has the text 'My Shop!'", () => {
      expect(wrapper.find('h1').first().contains("My Shop!")).toEqual(true);
    });
    it("Renders the number of selected products", () => {
      wrapper.setState({ selectedProducts: ["one", "two"] })
      expect(wrapper.find('p').first().contains("You have selected 2 products"))
    });
    it("Contains an <a> element with the text 'View Basket'", () => {
      expect(wrapper.find('a').first().contains("View Basket")).toEqual(true);
    });
  });

  describe('#state', () => {
    it("Is instantiated with the correct products in state", () => {
      expect(wrapper.state('products')).toEqual(products)
    });
    it("Is instantiated with 'selectedProducts' and an empty array", () => {
      expect(wrapper.state('selectedProducts').length).toEqual(0)
    });
  });

  describe('#handleProductSelect', () => {
    it('Adds the given product to the selectedProducts array when called', () => {
      let instance = wrapper.instance();
      instance.handleProductSelect("Shoes")
      expect(instance.state.selectedProducts[0]).toEqual("Shoes")
    });
  });

  describe('#toggleBasket', () => {
    it("sets 'viewBasket' to be true when triggered", () => {
      let instance = wrapper.instance();
      instance.toggleBasket();
      expect(instance.state.viewBasket).toEqual(true)
    });
    it("sets 'viewBasket' to be false when triggered twice", () => {
      let instance = wrapper.instance();
      instance.toggleBasket();
      instance.toggleBasket();
      expect(instance.state.viewBasket).toEqual(false)
    });
  });

  describe("<a>View Basket</a>", () => {
    it("doesn't render a <div> if not clicked", () => {
      expect(wrapper.find('.basket').length).toEqual(0)
    });
    it("renders a new <div> when clicked", () => {
      const el = wrapper.find('a');
      el.simulate('click')
      expect(wrapper.find('.basket').length).toEqual(1)
    });
  });
});
