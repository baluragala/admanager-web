import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import OfferList from './OfferList'
import OfferProviderList from './OfferProviderList'
import OfferForm from './OfferForm'
import OfferProviderForm from './OfferProviderForm'

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={App}/>
    </Route>
    <Route path="/offers" component={OfferList}/>
    <Route path="/providers" component={OfferProviderList}/>
    <Route path="/addoffer" component={OfferForm}/>
    <Route path="/addprovider" component={OfferProviderForm}/>
  </Router>,
  document.getElementById('root')
);
