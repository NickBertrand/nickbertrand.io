import React, { Component } from 'react'
import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'
import { HeaderLink } from '../HeaderLink';

function Header() {
  const HeaderContainer = styled.header`
    background-color: #282c34;
    min-height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;

  return (
    <HeaderContainer>
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
    </HeaderContainer>
  )
}

export default Header
