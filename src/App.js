import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state  = {
    persons: [
      { name:'Andrzej',age:28 },
      { name:'Jan', age:29 }
    ] 
  }

  switchNameHandler = (newName) => {
    console.log('It was clicked!');
    this.setState({persons:[
      {name:newName, age:43},
      {name:'Andrzejownik', age:67}
    ]});
  }

  nameChangedHandler = (event) => {
    this.setState({persons:[
      {name:event.target.value, age:43},
      {name:'Andrzejownik', age:67}
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi how are you?</h1>
        <p>it works</p>
        <button onClick={ () => this.switchNameHandler('Johan') } >Swith name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Bind-1')}
          changed={this.nameChangedHandler}> 
          </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Bind-2')}
          changed={this.nameChangedHandler}> 
          > Whaeva </Person>
      </div>
    );
  }
}

export default App;
