import React, { useState, useRef } from 'react';

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import {
  removeCheckoutItem,
  checkoutCount,
  checkoutTotalPrice,
} from '../../../store/actions/checkout';

import { addMessage } from '../../../store/actions/message';

import './styles/CheckoutItem.scss';

function CheckoutItem({ id, name, description, unitCost, countCh }) {
  const countInput = useRef();
  const [count, setCount] = useState(countCh);
  const [totalTemp, setTotalTemp] = useState(unitCost * countCh);
  const dispatch = useDispatch();
  const handleTotalCost = (e) => {
    const totalCostValue = countInput.current.value * unitCost;
    setCount(e.target.value);
    setTotalTemp(totalCostValue);
    dispatch(checkoutCount(id, parseInt(countInput.current.value, 10)));
    dispatch(checkoutTotalPrice(id, totalCostValue));
  };

  const handlePrice = (price) => {
    const nf = new Intl.NumberFormat();
    const pc = nf.format(price);
    return pc;
  };
  return (
    <div className="checkoutItem">
      <div className="checkoutItem__info">
        {/* name */}
        <h4>{name}</h4>
        {/* description */}
        <p>{description}</p>
      </div>
      <div className="checkoutItem__buyInfo">
        {/* cost one product */}
        <div className="checkoutItem__unitCost">قیمت واحد : {handlePrice(unitCost)} </div>
        {/* cost all product */}
        <div className="checkoutItem__totalCost">قیمت کل : {handlePrice(totalTemp)}</div>
        {/* edit count */}

        <input
          type="number"
          min="1"
          className="form-control"
          ref={countInput}
          value={count}
          onChange={handleTotalCost}
        />

        {/* delete */}
        <IconButton
          color="error"
          onClick={() => {
            dispatch(removeCheckoutItem(id));
            dispatch(addMessage('alert-danger', 'از سبد کالا حذف شد'));
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}

CheckoutItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  unitCost: PropTypes.number.isRequired,
  countCh: PropTypes.number.isRequired,
};

export default CheckoutItem;
