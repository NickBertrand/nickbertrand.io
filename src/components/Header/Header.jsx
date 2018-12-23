import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HeaderLink } from '../HeaderLink';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
          <Link to="/">Nick Bertrand</Link>

          <HeaderLink link="/" activeClassName="hurray">
            Home
          </HeaderLink>
          <HeaderLink link="/projects" activeClassName="hurray">
            Projects
          </HeaderLink>
          <HeaderLink link='/resume' activeClassName='hurray'>
            Resume
          </HeaderLink>
      </header>
    )
  }
}
