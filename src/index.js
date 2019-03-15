import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Router } from "react-router-dom"
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory, createHashHistory } from 'history'

function configureHistory() {
  return window.matchMedia('(display-mode: standalone)').matches
    ? createHashHistory()
    : createBrowserHistory()
}
const history = configureHistory()

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>
    , document.getElementById('root'));
registerServiceWorker.register();
