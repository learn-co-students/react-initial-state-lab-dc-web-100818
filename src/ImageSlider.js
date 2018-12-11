// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {

  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    const message = `I am on slide ${this.state.currentSlideIndex}`
    return (
      <h1>{message}</h1>
    )
  }
}
