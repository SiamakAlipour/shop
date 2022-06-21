import React from 'react';
import { withRouter } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import PropTypes from 'prop-types';

const AuthVerify = ({ history, logOut }) => {
  history.listen(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      const decodedJwt = jwtDecode(user.token);
      if (decodedJwt.exp * 1000 < Date.now()) {
        logOut();
      }
    }
  });

  return <div />;
};

AuthVerify.propTypes = {
  logOut: PropTypes.func.isRequired,
  history: PropTypes.objectOf({ listen: PropTypes.func }).isRequired,
};
export default withRouter(AuthVerify);
