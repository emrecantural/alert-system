import React, { Component } from 'react';
import './main.css'
import validator from 'validator';
import axios from 'axios';
import nameValidator from './nameValidator';

class Alertform extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  givenurl: '',
                  period: 0,
                  requestType: 'POST',
                  error: '',                     //error text if invalid url or already exists name 
                                                 //or period 0. 
                  ifInvalid: "",                 //to make url input box red
                                                 //if invalid url  
                  ifNameExists: "",              //to make name input box red
                                                 //if name already exists
                  ifPeriodZero: "",              //to make period input box red
                                                 //if period is 0
                  ifAdded: "black",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
    
  }

  handleSubmit(event) {
    event.preventDefault();
    let name = this.state.name;
    let url = this.state.givenurl;
    let period = this.state.period;
    let requestName = this.state.requestType;
    if(validator.isURL(this.state.givenurl) 
       && period !== 0 
       && nameValidator(name)){
        axios.post('http://localhost:8080/alerts', {
          name: name,
          url: url,
          requestName: requestName,
          period: period,
          timeLeft: 0,
          situations: []
        }).then(message=>{
          this.setState({error : message.data })
        }).catch(err => {
          this.setState({error: err.data})
        });
        this.setState({name: '',
                       givenurl: '',
                        period: 0,
                        requestType: 'POST',
                        ifInvalid: "",
                        ifNameExists: "",
                        ifPeriodZero: "",
                        ifAdded: "black",});       
    }
    else{
        if(!nameValidator(name)){
          this.setState({error : "Bu isimli bir kullanıcı mevcuttur.",
                         ifNameExists: "2px solid red",
                         ifAdded: "red"});
        }
        else if(!validator.isURL(this.state.givenurl)){
          this.setState({error : "Lütfen geçerli bir URL giriniz.",
                         ifInvalid: "2px solid red",
                         ifAdded: "red"});
        }
        else if(period === 0){
          this.setState({error : "Periyot için 0 (sıfır)'dan farklı bir değer giriniz.",
                         ifPeriodZero: "2px solid red",
                         ifAdded: "red"});
        }
    }
    
  }
  render() {
    
    return (
      <div className = "Form">
        <form onSubmit={this.handleSubmit} >
        <div className= "custom"
             style = {{border: this.state.ifNameExists,
             }}>
        <label  >
            Name: 
            <input type="text"
            name = "name"
            value={this.state.name} 
            onChange={this.handleChange}
            required/>
          </label>
        </div>
          <div className= "custom" 
               style = {{border: this.state.ifInvalid}}>
          <label  >
            URL: 
            <input type="text"              
            name = "givenurl"
            value={this.state.givenurl} 
            onChange={this.handleChange}
            required/>
          </label>
          </div>
          <div className= "custom">
          <label>
          Request:  
          <select name="requestType" 
                  type=""
                  value={this.state.requestType} 
                  onChange={this.handleChange}  >            
            <option value = "POST">POST</option>
            <option value= "GET">GET</option>
            <option value= "DELETE">DELETE</option>
            <option value= "PUT">PUT</option>
          </select>
          </label>
          </div>
          <div className= "custom"
               style= {{border: this.state.ifPeriodZero}}>
          <label >
            Period: 
            <input type="number"
            className ="Request"
            name = "period"
            value={this.state.period} 
            onChange={this.handleChange} 
            required/>
          </label>
          </div>
          <div className= "custom2">
          <input className="Button" 
                 type="submit" 
                 value="SUBMIT" />
          </div>
        </form>
          <div style={{color: this.state.ifAdded,
          textAlign: 'center'}}>{this.state.error}</div>
      </div>
    );
  }
  
}

export default Alertform;