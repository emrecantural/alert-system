import React, { Component } from 'react';
import background from './stars.jpg'
import StarfieldAnimation from 'react-starfield-animation';
import './Karsilama.css';

class Karsilama extends Component {
    render() {
        return (
            <div style={{
                background: `url(${background})`,
                backgroundSize: 'stretch',
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center'
              }}>


<a href='/anasayfa'>
          <button className='mainbutton'
            alt='sistemegiris'
            style={{
              position: 'absolute',
              zIndex: 100,
              top: 0,
              right: 0
              
            }}
          > Sisteme Giriş</button>
        </a>

        <h1 className='title'
          style={{
            color: '#eaeafc',
            fontSize: '3em',
            fontFamily: 'Quicksand, "Helvetica Neue", sans-serif',
            position: 'absolute',
                
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
          }}
        >
Alert System        </h1>

        <StarfieldAnimation
          numParticles={250}
          style={{
            position: 'absolute', 
            zIndex: 1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
      </div>
        )
    }
}
export default Karsilama;