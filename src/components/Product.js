import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
  const product = props.product;
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
          <Link to={`/details/${product._id}`} className="">
          <a className="navbar-brand" href="#">{product.name}</a>
      </Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Product</a></li>
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Product;
