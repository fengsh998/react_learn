import React, { Component } from 'react';

import Header from './components/mfr_header';
import MainContainer from './components/mfr_client';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header />
        <MainContainer /> */}
        <div className="bg-primary">
          <div className="bg-warning">
            <span className="itembox border "></span>
            {/* <span className="border-top"></span>
            <span className="border-right"></span>
            <span className="border-bottom"></span>
            <span className="border-left"></span> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
