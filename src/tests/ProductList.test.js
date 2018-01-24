import React from 'react';
import {shallow} from 'enzyme';
import ProductList from '../components/ProductList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ProductList', () => {
  const mockProducts =[
    {id: 1, name: "Mock Product 1", brand: "Mock Brand 1"},
    {id: 2, name: "Mock Product 2", brand: "Mock Brand 2"},
    {id: 3, name: "Mock Product 3", brand: "Mock Brand 3"}
  ]
  const wrapper = shallow(<ProductList products={mockProducts} />)

  it('should render each product in a <li> element', () => {
    expect(wrapper.find('li').length).toEqual(mockProducts.length);
  });

});
