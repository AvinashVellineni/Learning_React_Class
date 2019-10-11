import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Avinash', age: 25 },
      { name: 'Abishek', age: 22 },
      { name: 'Max', age: 37 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Avinash', age: 25 },
        { name: 'Abishek', age: 35 },
        { name: 'Maximillian', age: 37 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h3>Hi This is my First React App.</h3>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        ></Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
      </div>
    );
  }
}

export default App;
