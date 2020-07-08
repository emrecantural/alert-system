import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


import './Header.css';
class Title extends Component {
    render() {
        return (
            <Link to={{pathname: '/anasayfa'} }  className='baslik'> Alert System
           
            </Link>
        )
    }
}
export default Title;