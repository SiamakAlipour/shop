/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';

import PropTypes from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';

import { login } from '../../store/actions/auth';

import SignLayout from '../../layouts/SignLayout/SignLayout';

const Login = ({ isLoggedIn }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (value) => {
    setLoading(true);
    dispatch(login(value.username, value.password))
      .then(() => {
        history.push('/account');
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (isLoggedIn) {
    console.log('Login');
    return <Redirect to="/account" />;
  }
  const SigninSchema = Yup.object().shape({
    username: Yup.string()

      .min(2, 'نام کاربری حداقل ')

      .required('لطفا وارد نمایید'),

    password: Yup.string()

      .min(2, 'رمز عبور وارد شده کوتاه است!')

      .required('لطفا وارد نمایید'),
  });
  return (
    <SignLayout schema={SigninSchema} handle={handleLogin}>
      <Field name="username" className="signLayout__input form-control" placeholder="نام کاربری" />
      {/* {errors.username && touched.username ? (
        <div className="signLayout__text text-danger">{errors.username}</div>
      ) : null} */}
      <Field
        type="password"
        name="password"
        className="signLayout__input form-control"
        placeholder="رمز عبور"
      />
      {/* {errors.password && touched.password ? (
        <div className="signLayout__text text-danger">{errors.password}</div>
      ) : null} */}
      <div className="signLayout__formCheck">
        <Field type="checkbox" name="checkbox" className="form-check-input" id="rememberCheckBox" />
        <label htmlFor="rememberCheckBox"> مرا به خاطر بسپار</label>
      </div>
      <button type="submit" className="btn btn-success">
        {loading && <span className="spinner-border spinner-border-sm" />}
        <span>ورود</span>
      </button>{' '}
    </SignLayout>
  );
};

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
};
Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps)(Login);
