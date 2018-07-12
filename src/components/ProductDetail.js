import React, { Component } from "react";
import * as _ from "lodash";
import { getProductDetails } from "../Client";
class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      id: "",
      product: [
        {
          attributes: [],
          options: []
        }
      ]
    };
  }
  componentDidMount() {
    this.getProduct();
  }
  getProduct = async () => {
    const product = await getProductDetails(this.props.match.params.id);
    this.setState({
      product: [product],
      isLoading: true
    });
  };
  render() {
    const product = this.state.product;
    const mergedOptions = _.map(product[0].attributes, function(p) {
      return _.merge(p, {
        options: [
          ..._.filter(product[0].options, { attrib_id: p._id }).map(opt => {
            return { name: opt.name, _id: opt._id };
          })
        ]
      }, {
        selectedOptions: product[0].selected_option_ids
      });
    });
    return mergedOptions.map((opt, i) => {
      return (
        <ul>
          <li>{opt.name}</li>
            {opt.options.map(o => <span style={{
              backgroundColor: opt.selectedOptions.indexOf(o._id) > -1 ? 'green' : 'grey'
            }}>{o.name}</span>)}
        </ul>
      );
    });
  }
}

export default ProductDetail;
