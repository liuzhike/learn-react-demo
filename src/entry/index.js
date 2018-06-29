import '../stylesheets/main.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from '../page/index/App'
import { Provider } from 'react-redux'
import store from '../store/index'
import registerServiceWorker from '../registerServiceWorker';

ReactDOM.render(
  /***
   *  把 redux 的方法挂载在 根元素
   *  dispatch:fn()
   *  getState:getState()
   *  replaceReducer:replaceReducer()
   *  subscribe:subscribe()
   */
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
