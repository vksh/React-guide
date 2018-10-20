import React, { Component } from 'react';
import Person from '../person/person.component';

class Persons extends Component {
    render() {
        return (
            this.props.persons.map((person, index) => {
                return <Person
                    name={person.name}
                    age={person.age}
                    role={person.role}>
                </Person>
            })
        )
    }
}

export default Persons;