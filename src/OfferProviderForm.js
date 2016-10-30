import React, {Component} from 'react'
import $ from 'jquery'
import './App.css'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

class OfferForm extends Component{

  constructor(props) {
    super(props)
    this.state={}
  }

  handleSubmit(e){
    e.preventDefault();
    debugger;
    var data = {
      Name : this.refs.name.value,
      Address : this.refs.address.value,
      Lat : this.refs.lat.value,
      Lang : this.refs.lang.value,
      CreateDate : new Date()
    }
    $.post("http://54.67.44.199/api/OfferProviders", data, function(success){
        alert("Provider Saved Successfully");
    });

    this.refs.name.value=''
    this.refs.address.value=''
    this.refs.lat.value=''
    this.refs.lang.value=''
   

  }

  render(){
    return(

<div className="App">
        <div className="App-header">
          <h2>Ad Manager</h2>
        </div>
        <nav className="w3-sidenav w3-grey w3-card-8" style={{width:"15%"}}>
  
        <a><Link to="/offers">Offers</Link></a>
        <a><Link to="/addoffer">Add Offer</Link></a>
        <a><Link to="/providers">Providers</Link></a>
        <a><Link to="/addprovider">Add Provider</Link></a>
        </nav>
        
      
      <div style={{width:"85%","margin-left":"15%"}}>

      <div className="w3-card-4">
        <div className="w3-container w3-black">
          <h2>Add Provider</h2>
        </div>
        <form className="w3-container" action="form.asp">
          
          <p>
            <label className="w3-label w3-text-black"><b>Provider Name</b></label>
            <input className="w3-input w3-border w3-sand" 
            name="name" type="text" ref="name"/></p>
          <p>
            <label className="w3-label w3-text-black"><b>Address</b></label>
            <input className="w3-input w3-border w3-sand" 
            name="address" type="text" ref="address"/></p>
          
          <p>
            <label className="w3-label w3-text-black"><b>Latitude</b></label>
            <input className="w3-input w3-border w3-sand" 
            name="lat" type="text" ref="lat"/></p>
          
          <p>
            <label className="w3-label w3-text-black"><b>Longitude</b></label>
            <input className="w3-input w3-border w3-sand" 
            name="lang" type="text" ref="lang"/></p>
            <p>
            <button style={{color:"white !important"}} className="w3-btn" onClick={this.handleSubmit.bind(this)}>Add</button></p>
        </form>
      </div>
      </div>

     </div>
      )
  }

}

export default OfferForm