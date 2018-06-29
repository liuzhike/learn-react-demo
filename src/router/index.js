import React, { Component } from 'react'
import { Switch, Route, Router, BrowserRouter, Link} from 'react-router-dom';
import './App.css'
import index from './page/index/App'


class IndexRouter extends Component {
  constructor (props, context) {
    super(props)
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }
  render () {
    return (
      <div className="App">
        <nav className="navbar navbar">
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/admin">Admin area</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login" component={index} />
          <Route exact path="/" component={index} />
          <Route path="/category" component={index} />
          <Route path="/products" component={index} />
        </Switch>
      </div>
    )
  }
}
