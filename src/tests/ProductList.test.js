import React from 'react';
import {shallow} from 'enzyme';
import ProductList from '../components/ProductList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let mockProducts, wrapper, productSelectFn;

beforeEach(() => {
  mockProducts =[
    {id: 1, name: "Mock Product 1", brand: "Mock Brand 1"},
    {id: 2, name: "Mock Product 2", brand: "Mock Brand 2"},
    {id: 3, name: "Mock Product 3", brand: "Mock Brand 3"}
  ]

  productSelectFn = jest.fn();

  wrapper = shallow(
              <ProductList
                products={mockProducts}
                onProductSelect={productSelectFn}
              />
            )


});

afterEach(function() {
  productSelectFn.mockReset();
});

describe('ProductList', () => {

  it('should render each product in a <li> element', () => {
    expect(wrapper.find('li').length).toEqual(mockProducts.length);
  });
  it('should render the name inside each <li> element', () => {
    expect(wrapper.find('li').first().contains(mockProducts[0].name)).toEqual(true)
  });
  it('should render the brand inside each <li> element', () => {
    expect(wrapper.find('li').first().contains(mockProducts[0].brand)).toEqual(true)
  });
  it('should not call #props.onProductSelect if it hasnt been clicked', () => {
    expect(productSelectFn.mock.calls.length).toEqual(0)
  });
  it('should call #props.onProductSelect when an <li> is clicked', () => {
    const firstEl = wrapper.find('li').first();
    firstEl.simulate('click');
    expect(productSelectFn.mock.calls.length).toEqual(1)
  });

});
