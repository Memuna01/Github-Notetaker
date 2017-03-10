import React from 'react';
import ReactDom from 'react-dom';
import { Router, hashHistory } from 'react-router';
// import hashHistory = require('react-router').hashHistory;
import routes from './config/routes';

ReactDom.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
)
