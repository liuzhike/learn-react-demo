import React, { Component } from 'react'
import './index.scss'

export default class Tick extends Component {
  constructor (props, context) {
    super(props)
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render () {
    const {text} = this.props
    return (
      <p>{this.state.date.toLocaleTimeString()} {text}</p>
    )
  }
}
