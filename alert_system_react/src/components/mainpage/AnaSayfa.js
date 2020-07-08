import React, { Component } from 'react';
import './anasayfa.css';
import Alertform from './alertform';
import AlertLinks from './alertLinks';
import Header from '../Header/Header';
import AltHeader from '../Header/AltHeader';
import background from './arkaplan2.jpg'



class AnaSayfa extends Component { 
    constructor(props){
        super(props);
        this.toggle_login = this.toggle_login.bind(this);
        this.toggle_signup = this.toggle_signup.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle_login() {
        this.setState({
            isOpen: false
        });
    }
    toggle_signup() {
        this.setState({
            isOpen: true
        });
    }
    render(){
        
        let login = (
            <div className="alertform_link">
              <Alertform></Alertform>
            </div>
        )
        let signup = (
            <div className = "alertform_link">
              <AlertLinks></AlertLinks>
            </div>
        )
        let whichone = (this.state.isOpen ? signup : login );
        return (   
        <div style={{
            background: `url(${background})`,
            backgroundSize: 'stretch',
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center'
          }} > 
        <Header></Header> 
        <div className='panel'>
            <div className = "head"> 
              <button className= 'button' onClick = {this.toggle_login}>Form </button>
              <button className= 'button2' onClick = {this.toggle_signup}>Liste </button>
              
            

            </div>  
            <div>{whichone}  </div></div>
            <AltHeader></AltHeader> 
        </div>           
        );
    }  
}

export default AnaSayfa;