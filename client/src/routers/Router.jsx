import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Main from '../pages/Main/Main';
import Register from '../pages/Register/Register';
import Login from '../pages/Login';
import Account from '../pages/Account/Account';
import Checkout from '../pages/Checkout/Checkout';

function Router() {
  const search = useSelector((state) => state.search);

  return (
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

      <Route path="/">
        <Main />
      </Route>
      {/* Navigation */}
      {/* Slider of new posts */}
      {/* Products */}
    </Switch>
  );
}

export default Router;
