import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OfferProviderList from './OfferProviderList'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Ad Manager</h2>
        </div>
        <nav className="w3-sidenav w3-white w3-card-8" style={{width:"15%"}}>
  
        <a><Link to="/offers">Offers</Link></a>
        <a><Link to="/addoffer">Add Offer</Link></a>
        <a><Link to="/providers">Providers</Link></a>
        <a><Link to="/addprovider">Add Provider</Link></a>
        </nav>
        
      </div>
    );
  }
}

export default App;
