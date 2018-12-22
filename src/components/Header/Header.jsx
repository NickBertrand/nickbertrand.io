import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
          <Link to="/">Nick Bertrand</Link>

          <NavLink to="/" activeClassName="hurray">
            Home
          </NavLink>
          <NavLink to="/resume" activeClassName="hurray">
            Resume
          </NavLink>
          <NavLink to="/projects" activeClassName="hurray">
            Projects
          </NavLink>
      </header>
    )
  }
}
