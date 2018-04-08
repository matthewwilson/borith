import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid app-container">
        <div class="row align-items-center row-full-height">
          <div class="col align-self-center">
            <img className="img-fluid mx-auto d-block logo" src="/img/borith.png"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
