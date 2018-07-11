import React, { Component } from 'react';
import { getProducts } from '../Client'
class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      fetched: true,
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
        fetched: true,
    })
  };
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default ProductList;
