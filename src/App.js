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

  swithNameHandler = () => {
    console.log('Was clicked!');
    this.setState({persons:[
      {name:'Januszowiec',age:43},
      {name:'Andrzejownik',age:67}
    ]});
  }

  render() {
    return (
      <div className="App">
        <h1>Hi how are you?</h1>
        <p>it works</p>
        <button onClick={this.swithNameHandler}>Swith name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.swithNameHandler}> </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          > Whaeva </Person>
      </div>
    );
  }
}

export default App;
