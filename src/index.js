import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import login from '../src/component/login/login'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render((
    <BrowserRouter>
    <div className="sans-serif">
      <Route exact path="/" component={login} />
      <Route path="/comments" component={App} />
      
    </div>
  </BrowserRouter>
  ), document.getElementById('root'));

serviceWorker.unregister();
