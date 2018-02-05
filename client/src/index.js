import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';
import { HashRouter } from 'react-router-dom';
import promiseFinally from 'promise.prototype.finally';
// stores
import tdeeStore from './stores/tdeeStore';
import mealTrackStore from './stores/mealStore';
import testStore from './stores/testStore';
import waterStore from './stores/waterStore';
import measStore from './stores/measStore';
import authStore from './stores/authStore';

const stores = {
  tdeeStore,
  mealTrackStore,
  testStore,
  waterStore,
  measStore,
  authStore,
};

window.__APP_STATE__ = stores;

promiseFinally.shim();
useStrict(true);

ReactDOM.render((
  <Provider {...stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>), document.getElementById('root'));
