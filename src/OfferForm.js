import React, {Component} from 'react'
import $ from 'jquery'
import './App.css'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

class OfferProviderForm extends Component{

  constructor(props) {
    super(props)
    this.state={}
  }

  componentWillMount() {
    this.serverRequest = $.get('http://54.67.44.199:3000/api/OfferProviders', function (offerProviders) { 
    
    this.rows = offerProviders.map(offerProvider => {
      return(
        <option value={offerProvider.id}>{offerProvider.Name}</option>
        )
    })

    this.setState({
      offerProviders
    });
    console.log(this)  
    }.bind(this));
  }

  componentWillUnmount() {
      this.serverRequest.abort();
  }

  handleSubmit(e){
    e.preventDefault();
    debugger;
    var data = {
      offerProviderId : this.refs.providerId.value,
      OfferName : this.refs.offerName.value,
      OfferTerms : this.refs.offerTerms.value,
      StartDate : this.refs.startDate.value,
      EndDate : this.refs.endDate.value
    }
    $.post("http://54.67.44.199:3000/api/Offers", data, function(success){
        alert("Offer Saved Successfully");
    });

    this.refs.providerId.value=''
    this.refs.offerName.value=''
    this.refs.offerTerms.value=''
    this.refs.startDate.value=''
    this.refs.endDate.value=''

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
        
      
      <div style={{width:"85%","margin-left":"15%"}}>

      <div className="w3-card-4">
        <div className="w3-container w3-black">
          <h2>Input Colors</h2>
        </div>
        <form className="w3-container" action="form.asp">
          <p>
            <label className="w3-label w3-text-black"><b>Provider Name</b></label>
            <select className="w3-input w3-border w3-sand" ref="providerId">
            {this.rows}
            </select>
          </p>
          
          <p>
            <label className="w3-label w3-text-black"><b>Offer Name</b></label>
            <input className="w3-input w3-border w3-sand" 
            name="offerName" type="text" ref="offerName"/></p>
          <p>
            <label className="w3-label w3-text-black"><b>Offer Terms</b></label>
            <input className="w3-input w3-border w3-sand" 
            name="offerTerms" type="text" ref="offerTerms"/></p>
          
          <p>
            <label className="w3-label w3-text-black"><b>Start Date</b></label>
            <input className="w3-input w3-border w3-sand" 
            name="startDate" type="text" ref="startDate"/></p>
          
          <p>
            <label className="w3-label w3-text-black"><b>End Date</b></label>
            <input className="w3-input w3-border w3-sand" 
            name="endDate" type="text" ref="endDate"/></p>
            <p>
            <button style={{color:"white !important"}} className="w3-btn" onClick={this.handleSubmit.bind(this)}>Add</button></p>
        </form>
      </div>
      </div>

     </div>
      )
  }

}

export default OfferProviderForm