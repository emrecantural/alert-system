import React from 'react';
import './App.css';
import Karsilama from './components/karsilama/Karsilama';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Graphics from './components/detailpage/graphics';
import AnaSayfa from './components/mainpage/AnaSayfa'
function App() {
  return (
    <BrowserRouter >
    <div >
      {/* <div className="header"  >
        <Link to={{pathname: '/'} } className="baslik" >Alert System</Link>
      </div> */}
      <Switch>
        <Route path="/" component={Karsilama} exact />
        <Route path="/alerts/:name" component = {Graphics}/>
        <Route path="/anasayfa" component={AnaSayfa} exact />
      </Switch>
          
    </div>


  </BrowserRouter>
  );
}

export default App;
