import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';

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
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={this.deletePersonHandler.bind(this, index)}
                changed={event => this.nameChangeHandler(event, person.id)}
              ></Person>
            );
          })}
        </div>
      );
      btnClass = styles.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }

    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h3>Hi This is my First React App.</h3>
        <p className={classes.join(' ')}>It is really working..</p>
        <button onClick={this.togglePersonsHandler} className={btnClass}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
