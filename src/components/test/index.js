import React, { Component, PropTypes } from 'react'
import './index.scss'
import logo from '../logo.svg'


class App extends Component {

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Tick></Tick>
        <PartButton text="点我"></PartButton>
      </div>
    )
  }
}

App.PropTypes = {
  name:PropTypes.strging
}

export default App