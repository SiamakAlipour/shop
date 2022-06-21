import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Routes from '../../routers';
import AuthVerify from '../../common/AuthVerify';
import { userService } from '../../service/user.service';
import { allCheckout } from '../../store/actions/checkout';

import Footer from './Footer';
import Header from './Header';
import Message from './Message';

import './App.scss';

const App = () => {
  const [info, message] = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      dispatch(allCheckout());
    }
  }, []);
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />
        <Message info={info} message={message} />
        <Routes />
        {/* Footer */}
        <AuthVerify logOut={userService.logout} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
