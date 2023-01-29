import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';
import './SignLayout.scss';

const SignLayout = ({ children, schema, handle }) => (
  <div className="signLayout">
    <div className="container">
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={schema}
        validateOnSubmit
        onSubmit={handle}
      >
        {({ errors, touched }) => <Form className="signLayout__form form-control">{children}</Form>}
      </Formik>
    </div>
  </div>
);

SignLayout.propTypes = {
  children: PropTypes.elementType.isRequired,
  schema: PropTypes.objectOf({
    username: PropTypes.string,
    password: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  handle: PropTypes.func.isRequired,
};
export default SignLayout;
