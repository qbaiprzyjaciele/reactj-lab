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
      { name:'Jan', age:29 },
      { name:'Jędrzej', age:34}
    ],
    user: 'Default User' ,
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      pading: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} 
            age={person.age}
            click={this.deletePersonHandler.bind(index)}/>
          })}
            <UserInput userName={this.state.user} change={this.userInputHandler}></UserInput>
            <UserOutput userName={this.state.user} ></UserOutput>
            <UserOutput userName={this.state.user} click={this.userOutputClickHandler} ></UserOutput>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi how are you?</h1>
        <p>it works</p>
        <button 
        style={style}
        onClick={ this.togglePersonsHandler } >Swith name</button>
        {persons}
      </div>
    );
  }
}

export default App;
