import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
