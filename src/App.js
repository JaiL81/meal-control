import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import data from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Meal Control</h2>
        </div>
        <div className="App-intro">
          <Board title="Comidas" meals={data.lunches}/>
          <Board title="Cenas" meals={data.dinners}/>
        </div>
      </div>
    );
  }
}

export default App;
