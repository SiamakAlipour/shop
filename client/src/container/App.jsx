import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Main from './Main';
import Footer from './Footer';
import Register from './Register';
import Login from './Login';
import Account from './Account';
import Checkout from './Checkout';
import Header from './Header';

import Message from '../components/Message';
import AuthVerify from '../common/AuthVerify';
import { userService } from '../service/user.service';
import { allCheckout } from '../store/actions/checkout';

import './styles/App.scss';

function App() {
  const [info, message] = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  const search = useSelector((state) => state.search);
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
        <Switch>
          <Route path="/account/register">
            <Register />
          </Route>
          <Route path="/account/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path={`/search/value=${search}`} />

          <Route path="/" component={App}>
            <Main />
            <Footer />
          </Route>
          {/* Navigation */}
          {/* Slider of new posts */}
          {/* Products */}
        </Switch>
        {/* Footer */}
        <AuthVerify logOut={userService.logout} />
      </div>
    </Router>
  );
}

export default App;
