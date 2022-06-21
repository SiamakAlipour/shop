import React from 'react';

import PropTypes from 'prop-types';

import ProductAdd from './ProductAdd';
import Profile from './Profile';
import UsersManage from './UsersManage';

import './Option.scss';

// eslint-disable-next-line consistent-return
const Option = ({ option }) => {
  if (option === 0) {
    return (
      <div className="option">
        <ProductAdd />
      </div>
    );
  }
  if (option === 1) {
    return (
      <div className="option">
        <UsersManage />
      </div>
    );
  }
  if (option === 2) {
    return (
      <div className="option">
        <Profile />
      </div>
    );
  }
};

Option.propTypes = {
  option: PropTypes.number.isRequired,
};
export default Option;
