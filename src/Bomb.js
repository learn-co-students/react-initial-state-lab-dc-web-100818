// your Bomb code here!
import React, { Component } from 'react';
class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }
  render() {
    let saying;

    if (this.state.secondsLeft === 0 ) {
      saying = 'Boom!'
    } else {
      saying = `${this.state.secondsLeft} seconds left before I go boom!`
    }
    return (
      saying
    )
  }
}

export default Bomb;