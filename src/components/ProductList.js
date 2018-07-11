import React, { Component } from 'react';
import { getProducts } from '../Client';
import Product from './Product.js';
import Waypoint from 'react-waypoint';// http://brigade.github.io/react-waypoint/#infinite-scroll
class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      products: [],
      currentIndex: 0,
    }
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async (index = 1) => {
    this.setState({
      isLoading: true
    })
    const { products } = await getProducts(index);
    this.setState(prvState => {
      return {
        products: [...prvState.products, ...products],
        isLoading: false,
        currentIndex: index + 1
      }
    })
  };
  _loadMoreItems = () => {
    this.setState({
      isLoading: true
    })
   this.getProducts(this.state.currentIndex);
  }
  _renderItems = () => {
    return this.state.products.map(function(product, index) {
      return (
        <Product
          product={product}
          key={index}
        />
      );
    });
  }
  _renderWaypoint = () => {
    if (!this.state.isLoading) {
      return (
        <Waypoint
          onEnter={this._loadMoreItems}
        />
      );
    }
  }
  render() {
    // console.log(this.state);
    return (
      <div>
         {this._renderItems()}
        {this._renderWaypoint()}
        Loading more items…
      </div>
    );
  }
}

export default ProductList;
