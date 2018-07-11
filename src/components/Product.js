import React from 'react';

const Product = (props) => {
  const product = props.product;
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">{product.name}</a>
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
