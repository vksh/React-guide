import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Persons from '../src/components/persons/persons.component';
class App extends Component {
  persons = [
    {
      name: 'Vikash',
      age: '22',
      role: 'Developer'
    },
    {
      name: 'Lionel',
      age: '32',
      role: 'Footballer'
    },
    {
      name: 'Tim Cook',
      age: '42',
      role: 'CEO'
    },
    {
      name: 'Ronaldo',
      age: '33',
      role: 'Footballer'
    }
  ]
  render() {
    return (
      <div className="App">
        <Persons persons={this.persons}></Persons>
      </div>
    );
  }
}

export default App;
