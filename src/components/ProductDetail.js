import React, { Component } from 'react';
import { getProductDetails } from '../Client'
class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      fetched: true,
      product: []
    }
  }
  componentDidMount() {
    this.getProduct();
  }
  getProduct = async () => {
    const { product } = await getProductDetails('5aec58965a39460004b3f6dd');
    this.setState({
        product,
        fetched: true,
    })
  };
  render() {
    console.log(this.state);
    return (
      <div>
        
      </div>
    );
  }
}

export default ProductDetail;
