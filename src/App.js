import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state  = {
    persons: [
      { name:'Andrzej',age:28 },
      { name:'Jan', age:29 }
    ],
    user:'Default User' 
  }

  switchNameHandler = (newName) => {
    console.log('It was clicked!');
    this.setState({persons:[
      { name:newName, age:43 },
      { name:'Andrzejownik', age:67 }
    ]});
  }

  nameChangedHandler = (event) => {
    this.setState({persons:[
      { name:event.target.value, age:43 },
      { name:'Andrzejownik', age:67 }
    ]});
  }

  userInputHandler = (event) => {
    this.setState( {
      user: event.target.value
    });
  }
  
  userOutputClickHandler = () => {
    this.setState( {
      user: 'Andrzej Śmieszkowski'
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      pading: '8px',
      cursor: 'pointer'
    }



    return (
      <div className="App">
        <h1>Hi how are you?</h1>
        <p>it works</p>
        <button 
        style={style}
        onClick={ () => this.switchNameHandler('Johan') } >Swith name</button>
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
          > Whaeva 
          </Person>
        <UserInput userName={this.state.user} change={this.userInputHandler}></UserInput>
        <UserOutput userName={this.state.user} ></UserOutput>
        <UserOutput userName={this.state.user} click={this.userOutputClickHandler} ></UserOutput>
      </div>
    );
  }
}

export default App;
