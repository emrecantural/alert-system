import React, { Component } from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import './Header.css';
class Anasayfa extends Component {
    render() {
        return (
            <div >
      <ButtonGroup aria-label="Basic example">

  <Button className='anasayfa' href= '/anasayfa'> <span>Ana Sayfa </span></Button>
</ButtonGroup>
            </div>
        )
    }
}
export default Anasayfa;