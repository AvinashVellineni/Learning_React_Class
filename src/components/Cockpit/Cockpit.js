import React from 'react';
import styles from './Cockpit.css';

const cockpit = props => {
  const classes = [];
  if (props.length <= 2) {
    classes.push(styles.red);
  }

  if (props.length <= 1) {
    classes.push(styles.bold);
  }
  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.Red;
  }

  return (
    <div className={styles.Cockpit}>
      <p className={classes.join(' ')}>It is really working..</p>
      <button onClick={props.clicked} className={btnClass}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
