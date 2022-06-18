import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Pagination from '@material-ui/lab/Pagination';

import Product from './Product';

import { allProducts } from '../store/actions/product';

import './styles/Feed.scss';

// eslint-disable-next-line no-shadow
function Feed({ allProducts, product }) {
  const [productItems, setProductItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  const [catValue, setCatValue] = useState('0');
  const handleCatValue = (e) => {
    setCatValue(e.currentTarget.attributes['data-value'].value);
  };
  useEffect(() => {
    allProducts();
    // eslint-disable-next-line
  }, []);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  useEffect(() => {
    setProductItems([...product]);
    if (product) {
      setLoading(false);
    }

    if (catValue === '0') {
      const sortByDate = product.sort((a, b) => new Date(b.date) - new Date(a.date));
      setProductItems([...sortByDate]);
    } else if (catValue === '1') {
      const sortMoney = product.sort((a, b) => a.price - b.price);
      setProductItems([...sortMoney].reverse());
    } else if (catValue === '2') {
      const sortMoney = product.sort((a, b) => a.price - b.price);
      setProductItems([...sortMoney]);
    }
  }, [product, catValue]);
  const currentPosts = productItems.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (event, value) => setCurrentPage(value);
  return (
    <div className="feed">
      <div className="feed__header">
        <h3>محصولات</h3>
        <div className="feed__category">
          <InputLabel id="label" style={{ fontFamily: 'IRANSans' }}>
            دسته بندی
          </InputLabel>
          <Select labelId="label" style={{ fontFamily: 'IRANSans' }} id="select" value={catValue}>
            <MenuItem style={{ fontFamily: 'IRANSans' }} value="0" onClick={handleCatValue}>
              تازه ترین ها
            </MenuItem>
            <MenuItem style={{ fontFamily: 'IRANSans' }} value="1" onClick={handleCatValue}>
              گران ترین
            </MenuItem>
            <MenuItem style={{ fontFamily: 'IRANSans' }} value="2" onClick={handleCatValue}>
              ارزان ترین
            </MenuItem>
          </Select>
        </div>
      </div>
      <div className="feed__content">
        {loading ? (
          <Loader type="Oval" color="#212121" height={100} width={100} />
        ) : (
          <div className="feed__products">
            <Product currentPosts={currentPosts} />

            <Pagination
              style={{ direction: 'ltr' }}
              count={Math.ceil(productItems.length / postPerPage)}
              onChange={paginate}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.product.items,
});
const mapDispatchToProps = (dispatch) => ({
  allProducts: () => dispatch(allProducts()),
});
Feed.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropTypes.object.isRequired,
  allProducts: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Feed);
