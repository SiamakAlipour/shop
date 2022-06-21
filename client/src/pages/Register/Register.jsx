import React from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

import { register } from '../../store/actions/auth';

import './Register.scss';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleRegister = (value) => {
    dispatch(register(value.username, value.password, value.email))
      .then(() => {
        history.push('/account/login');
      })
      .catch(() => {});
  };

  const SignupSchema = Yup.object().shape({
    username: Yup.string('نام کاربری را وارد نمایید')

      .min(6, 'نام کاربری حداقل باید 6 حرف باشد.')

      .max(30, 'نام کاربری حداکثر باید 30 حرف باشد.')

      .required('لطفا نام کاربری را وارد نمایید'),

    password: Yup.string('رمز عبور را وارد نمایید')

      .min(8, 'رمز عبور حداقل باید 8 حرف باشد.')

      .required('لطفا رمز عبور را وارد نمایید'),

    passwordRepeat: Yup.string('تکرار رمز عبور را وارد نمایید')
      .when(
        ('password',
        {
          is: (val) => !!(val && val.length > 0),
          then: Yup.string().oneOf([Yup.ref('password')], 'تکرار رمز عبور صحیح نیست!'),
        }),
      )
      .required('تکرار رمز عبور را وارد نمایید.'),

    email: Yup.string('ایمیل را وارد نمایید')

      .email('ایمیل معتبر وارد نمایید')

      .required('لطفا ایمیل را وارد نمایید'),
    acceptTerms: Yup.boolean().oneOf([true], 'باید قوانین سایت را قبول کنید.'),
  });
  return (
    <div className="register">
      <div className="container">
        <Formik
          initialValues={{
            username: '',
            password: '',
            passwordRepeat: '',
            email: '',
            acceptTerms: false,
          }}
          validationSchema={SignupSchema}
          validationOnSubmit
          onSubmit={handleRegister}
        >
          {({ errors, touched }) => (
            <Form className="register__form form-control">
              <Field
                name="username"
                className="register__input form-control"
                placeholder="نام کاربری"
                autoComplete="new-username"
              />
              {errors.username && touched.username ? (
                <div className="register__text text-danger">{errors.username}</div>
              ) : null}
              <Field
                type="password"
                name="password"
                className="register__input form-control"
                placeholder="رمز عبور"
                autoComplete="new-password"
              />
              {errors.password && touched.password ? (
                <div className="register__text text-danger">{errors.password}</div>
              ) : null}
              <Field
                type="password"
                name="passwordRepeat"
                className="register__input form-control"
                placeholder="تکرار رمز عبور"
              />
              {errors.passwordRepeat && touched.passwordRepeat ? (
                <div className="register__text text-danger">{errors.passwordRepeat}</div>
              ) : null}
              <Field name="email" className="register__input form-control" placeholder="ایمیل" />
              {errors.email && touched.email ? (
                <div className="register__text text-danger">{errors.email}</div>
              ) : null}
              <div className="register__formCheck">
                <Field
                  type="checkbox"
                  name="acceptTerms"
                  className="form-check-input"
                  id="rememberCheckBox"
                />
                <label htmlFor="rememberCheckBox">
                  {' '}
                  <a href="#قوانین">قوانین</a> را قبول دارم
                </label>
              </div>
              {errors.acceptTerms && touched.acceptTerms ? (
                <div className="register__text text-danger">{errors.acceptTerms}</div>
              ) : null}
              <button type="submit" className="btn btn-primary">
                <span>ثبت نام</span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
