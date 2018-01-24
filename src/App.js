import React, { Component } from 'react';
import ProductList from './components/ProductList'
import './App.css';

export default class App extends Component {

  render() {
    return(
      <div className="App">
        <h1>My Shop!</h1>
        <ProductList />
      </div>
    );
  }
}
