import React from 'react';

import PropTypes from 'prop-types';

import ProductAdd from '../../../container/Options/ProductAdd';
import Profile from '../../../container/Options/Profile';
import UsersManage from '../../../container/Options/UsersManage';

import './styles/Option.scss';

function Option({ option }) {
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
}

Option.propTypes = {
  option: PropTypes.number.isRequired,
};
export default Option;
