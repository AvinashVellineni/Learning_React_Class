import React from 'react';
import styles from './Person.css';

const person = props => {
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        I am {props.name} and I am {props.age} years old..
      </p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default person;
