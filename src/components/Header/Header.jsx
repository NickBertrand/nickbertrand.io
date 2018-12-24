import React, { Component } from 'react'
import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'
import { HeaderLink } from '../HeaderLink';

const Header = () => {
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

      <HeaderLink exact link="/">
        Home
      </HeaderLink>
      <HeaderLink link="/projects">
        Projects
      </HeaderLink>
      <HeaderLink link='/resume'>
        Resume
      </HeaderLink>
    </HeaderContainer>
  )
}

export default Header
