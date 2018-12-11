// your Bomb code here!
import React, { Component} from 'react';

class Bomb extends Component {
  constructor(prop) {
    super(prop)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

 //  decrement = () => {
 //   const newCount = this.state.count - 1
 //   this.setState({
 //     secondsLeft: newCount
 //   })
 // }

  render(){
    return (

      this.state.secondsLeft > 0 ? <div>{this.state.secondsLeft} seconds left before I go boom!</div> : <div>Boom!</div>
    )
  }
}

export default Bomb
