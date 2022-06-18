/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { Link, Redirect } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import PropTypes from 'prop-types';

import Option from './Option';
import { userService } from '../service/user.service';

import './styles/Account.scss';

function Account({ isLoggedIn, user }) {
  const [option, setOption] = useState(2);
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
  // React.useEffect(() => {
  // 	const user = JSON.parse(localStorage.getItem('user'))
  // 	console.log(user)
  // })
  React.useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem('user'));
    if (userLocal) {
      const decodedJwt = parseJwt(userLocal.token);
      const fiveMinutes = 5 * 60;
      if (decodedJwt.exp * 1000 - Date.now() < fiveMinutes) {
        userService.logout();
        window.location.reload();
      }
    }
  }, []);
  if (!isLoggedIn) {
    return <Redirect to="/account/login" />;
  }
  return (
    <div className="account">
      <div className="account__sideOptions">
        <ul>
          <Link to="/" className="active">
            <li>خانه</li>
          </Link>
          <li onClick={() => setOption(2)}>پروفایل</li>
          {user.admin ? <li onClick={() => setOption(0)}>اضافه کردن کالا</li> : null}
          {user.admin ? <li onClick={() => setOption(1)}>مدیریت کاربران</li> : null}
          <Link to="/checkout">
            <li>سبد خرید</li>
          </Link>
          <li
            onClick={() => {
              userService.logout();
              window.location.reload();
            }}
          >
            خروج از حساب کاربری
          </li>
        </ul>
      </div>
      <div className="account__content">
        <Option option={option} />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { isLoggedIn, user } = state.auth;
  return {
    isLoggedIn,
    user,
  };
};

Account.propTypes = {
  user: PropTypes.objectOf({ admin: PropTypes.bool }).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps)(Account);
