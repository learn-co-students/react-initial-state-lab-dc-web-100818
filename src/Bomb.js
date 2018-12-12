import React, { Component } from 'react'

class Bomb extends Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  //Would need to add some sort of set interval function in order for the countDown function to work
  // countDown = () => {
  //   const newSecondsLeft = this.state.secondsLeft - 1
  //   this.setState({
  //     secondsLeft: newSecondsLeft
  //   })
  // }

  render(){
    if (this.state.secondsLeft !== 0){
      return `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
    return 'Boom!'
    }
  }
}

export default Bomb
