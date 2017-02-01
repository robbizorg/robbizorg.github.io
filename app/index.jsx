import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';
import { Router, Route, hashHistory } from 'react-router';

persist(alt, storage, 'app');

// Avoid rendering directly to document.body
// Can cause strange problems when using react
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} entry={0} />
  </Router>
	, document.getElementById('app'));

/* Demonstration of Example AJAX Call
BundleAPI.createBundle({
	title: 'Intro to Soco',
	author: "Robbie",
});
*/
