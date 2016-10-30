import React, {Component} from 'react'
import $ from 'jquery'
import './App.css'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

class OfferProviderList extends Component{

  constructor(props) {
    super(props)
    this.state={}
  }

  componentDidMount() {
    this.serverRequest = $.get("http://54.67.44.199:3000/api/OfferProviders", function (providers) {   
    this.rows = providers.map(provider => {    
      return(
        <tr>
         <td>{provider.Name}</td>
         <td>{provider.Address}</td>
         <td>{provider.Lat}</td>
         <td>{provider.Lang}</td>
        </tr>)
      })
    
    this.setState({
        providers
      });
    console.log(this)  
    }.bind(this));
    
  }

  componentWillUnmount() {
      this.serverRequest.abort();
  }

  render(){
  	return(
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
  		<table style={{"margin-left":"15%","width":"85%"  }} className="w3-table-all w3-card-4">
        <thead className="w3-black">
          <th>NAME</th>
          <th>ADDRESS</th>
          <th>LATITUDE</th>
          <th>LONGITUDE</th>          
        </thead>
        {this.rows}
      </table>
    </div>  
  		)
  }

}

export default OfferProviderList