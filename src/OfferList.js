import React, {Component} from 'react'
import $ from 'jquery'
import './App.css'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

class OfferList extends Component{

  constructor(props) {
    super(props)
    this.state={}
  }

  componentDidMount() {
    this.serverRequest = $.get('http://54.67.44.199:3000/api/Offers?filter={"include":"offerProvider"}', function (offers) { 
      
    this.rows = offers.map(offer => {
      console.log(offer)
      return(
        <tr>
         <td>{offer.offerProvider.Name}</td>
         <td>{offer.OfferName}</td>
         <td>{offer.OfferTerms}</td>
         <td>{offer.StartDate.substr(0,10)}</td>
         <td>{offer.EndDate.substr(0,10)}</td>
        </tr>)
      })
    
    this.setState({
        offers
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
        
      

      <table style={{"margin-left":"15%","width":"85%"}} className="w3-table-all w3-card-4">
        <thead className="w3-black">
          <th>PROVIDER NAME</th>
          <th>OFFER NAME</th>
          <th>OFFER TERMS</th>
          <th>START DATE</th>
          <th>END DATE</th>          
        </thead>
        {this.rows}
      </table>
     </div> 
      )
  }

}

export default OfferList