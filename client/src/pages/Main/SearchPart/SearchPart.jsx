import React, { useEffect, useState } from 'react';

import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';

import { allProducts } from '../../../store/actions/product';

import Product from '../../../components/shared/Product/Product';

import './SearchPart.scss';

// eslint-disable-next-line no-shadow
const SearchPart = ({ product, allProducts }) => {
  const search = useSelector((state) => state.search);
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    allProducts();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setSearchList(product.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())));
  }, [search, searchList]);

  return (
    <div className="searchPart">
      <h3>جستجو برای : {search}</h3>
      <div className="searchPart__content">
        <div className="searchPart__products">
          <Product currentPosts={searchList} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product.items,
});
const mapDispatchToProps = (dispatch) => ({
  allProducts: () => dispatch(allProducts()),
});

SearchPart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropTypes.object.isRequired,
  allProducts: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchPart);
