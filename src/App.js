import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

class App extends Component {

  getCategories(){
    return categories.map(category => <button>{category}</button>)
  }

  getInventory(){
    return inventory.map(product => <li><h2>{product.name}</h2><h3>${product.price}</h3><h4>{product.category}</h4></li>)
    }

  render() {
    return (
      <div className="App">
        <h1>Show products here!</h1>

        <ul>
          {this.getCategories()}
        </ul>

        <ul>
          {this.getInventory()}
        </ul>

      </div>
    );
  }
}

export default App;
