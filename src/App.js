import React, { Component } from 'react';
import ProductList from './components/ProductList'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {id: 1, name: 'AirMax 90', brand: 'Nike'},
        {id: 2, name: 'Stan Smith', brand: 'Adidas'},
        {id: 3, name: 'Classic', brand: 'Reebok'},
      ]
    }
  }

  render() {
    return(
      <div className="App">
        <h1>My Shop!</h1>
        <ProductList products={this.state.products}/>
      </div>
    );
  }
}
