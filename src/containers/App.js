import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: '0', name: 'Avinash', age: 25 },
      { id: '1', name: 'Abishek', age: 22 },
      { id: '2', name: 'Max', age: 37 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        ></Persons>
      );
    }

    return (
      <div className={styles.App}>
        <h3>{this.props.appTitle}</h3>
        <Cockpit
          clicked={this.togglePersonsHandler}
          length={this.state.persons.length}
          showPersons={this.state.showPersons}
        ></Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;
