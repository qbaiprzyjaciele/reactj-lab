import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state  = {
    persons: [
      { id:1, name:'Andrzej',age:28 },
      { id:2, name:'Jan', age:29 },
      { id:3, name:'Jędrzej', age:34}
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

  deletePersonHandler = (personId) => {
      console.log("Hallo lallo allo!");
      const personIndex = this.state.persons.findIndex(id => {
        return personId === id;
      });
      const person = {...this.state.persons[personIndex]};
      this.state.persons[personIndex] = person;
      this.setState()
      this.setState({persons: this.state.persons});
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
            key={person.id}
            click={this.deletePersonHandler.bind(person.id)}/>
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
