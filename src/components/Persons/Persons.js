import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps', props);
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate() {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return null;
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  };

  render() {
    console.log('[Persons.js] rendering...')
    return this.props.persons.map((person, index) => {
      return (
        <Person 
          key={person.id}
          name={person.name} 
          age={person.age}
          click={() => this.props.clicked(index)} 
          changed={(event) => this.props.changed(event, person.id)} />
      );
    });
  }
}

  export default Persons;
  