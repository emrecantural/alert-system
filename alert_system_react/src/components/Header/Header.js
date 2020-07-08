import React, { Component } from 'react';
import './Header.css';

import  Title from'./Title';
import Anasayfa from './Anasayfa';


class Header extends Component {
    render() {
        return (
            <header>

             <Title></Title>
             <Anasayfa></Anasayfa>

           
             </header>
 
        )
    }
}
export default Header;