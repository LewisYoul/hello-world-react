import React, { Component } from 'react';
import ProductList from './components/ProductList'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewBasket: false,
      selectedProducts: [],
      products: [
        {id: 1, name: 'AirMax 90', brand: 'Nike'},
        {id: 2, name: 'Stan Smith', brand: 'Adidas'},
        {id: 3, name: 'Classic', brand: 'Reebok'},
      ]
    }
  }

  handleProductSelect = (product) => {
    this.setState(prevState => {
      return {
        selectedProducts: prevState.selectedProducts.concat(product)
      }
    });
  }

  toggleBasket = () => {
    let oldBasket = this.state.viewBasket
    this.setState({
      viewBasket: !oldBasket
    });
  }

  render() {
    return(
      <div className="App">
        <h1>My Shop!</h1>
        <p>You have selected {this.state.selectedProducts.length} products</p>
        <a onClick={this.toggleBasket}>View Basket</a>
        <ProductList
          products={this.state.products}
          onProductSelect={this.handleProductSelect}
        />
      </div>
    );
  }
}
