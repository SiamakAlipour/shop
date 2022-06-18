/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import LoadingButton from '@mui/lab/LoadingButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CheckoutItem from '../components/CheckoutItem';
import { allCheckout } from '../store/actions/checkout';

import './styles/Checkout.scss';

// eslint-disable-next-line no-shadow
function Checkout({ allCheckout, checkout }) {
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState(false);
  const handlePrice = (price) => {
    const nf = new Intl.NumberFormat();
    const pc = nf.format(price);
    return pc;
  };
  useEffect(() => {
    allCheckout();
  }, []);

  useEffect(() => {
    let temp = 0;
    checkout.forEach((co) => {
      temp += co.count * co.unitPrice;
    });
    setTotalCost(handlePrice(temp));
  }, [checkout]);

  return (
    <div className="checkout">
      <div className="checkout__header">
        <h3>سبد خرید</h3>
        <div className="checkout__wraper">
          <LoadingButton
            endIcon={<ShoppingCartIcon />}
            onClick={() => setLoading(true)}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            نهایی کردن خرید
          </LoadingButton>
          <p className="text-success">مجموع خرید : {totalCost}</p>
        </div>
      </div>
      <div className="container">
        <div className="checkout__products">
          {checkout.map((co) => (
            <CheckoutItem
              id={co._id}
              key={co._id}
              name={co.name}
              description={co.description}
              unitCost={co.unitPrice}
              countCh={co.count}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  checkout: state.checkout.items,
});
const mapDispatchToProps = (dispatch) => ({
  allCheckout: () => dispatch(allCheckout()),
});
Checkout.propTypes = {
  checkout: PropTypes.objectOf({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    unitCost: PropTypes.number,
    countCh: PropTypes.number,
  }).isRequired,
  allCheckout: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
