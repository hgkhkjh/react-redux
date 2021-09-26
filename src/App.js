import React, { Component } from 'react'
import Counter from './containers/counter';
import Person from './containers/person';
export default class App extends Component {
  render() {
    return (
      <div>
        <Counter  />
        <hr/>
        <Person  />
      </div>
    )
  }
}

