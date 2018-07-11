import React, { Component } from 'react';
import { getProducts } from '../Client';
import Product from './Product.js';
import Waypoint from 'react-waypoint';// http://brigade.github.io/react-waypoint/#infinite-scroll
class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      products: []
    }
  }
  componentDidMount() {
    this.getProducts();
  }
  getProducts = async () => {
    const { products } = await getProducts();
    this.setState({
        products,
        isLoading: true,
    })
  };
  _renderItems = () => {
    return this.state.products.map(function(product, index) {
      return (
        <Product
          // src={}
          // alt="CATS AND ROBOTS... "
          // style={{ height: 480 }}
          // key={index}
          className="infinite-scroll-example__list-item" />
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
