import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi how are you?</h1>
        <p>it works</p>
        <Person></Person>
      </div>
    );
  }
}

export default App;
