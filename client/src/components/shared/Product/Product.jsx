/* eslint-disable no-underscore-dangle */
import React from 'react';

import PropTypes from 'prop-types';

import ProductItem from './ProductItem';

import './Product.scss';

const Product = ({ currentPosts }) => {
  React.useEffect(() => {}, [currentPosts]);
  return (
    <div className="product">
      {currentPosts.map((product) => (
        <ProductItem
          key={product._id}
          id={product._id}
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

Product.propTypes = {
  currentPosts: PropTypes.objectOf({
    _id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};
export default Product;
