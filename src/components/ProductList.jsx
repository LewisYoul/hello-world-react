import React from 'react';
import PropTypes from 'prop-types';

const ProductList = (props) => {
  return(
    <ul>
      {
        props.products.map(product => (
        <li onClick={() => props.onProductSelect(product)} key={product.id}>
          Product: {product.name} - Brand: {product.brand}
        </li>
        ))
      }
    </ul>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onProductSelect: PropTypes.func.isRequired
};

export default ProductList;
