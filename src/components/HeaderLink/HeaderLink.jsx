import React from 'react'
import styled from 'styled-components/macro'

import { NavLink } from 'react-router-dom'


const HeaderLink = (props) => {
  const activeClassName = 'active';

  const HeaderButton = styled.button.attrs({
    activeClassName: activeClassName
  })`
    font-size: 1.2rem;
    color: white;
    background: transparent;
    border-radius: 3px;
    border: 2px solid white;
    margin: 0 1em;
    padding: 0.25em 1em;
    text-decoration: none;
    font-weight: 300;

    &.${activeClassName} {
      text-decoration: underline;
    }
  `;


  return (
    <HeaderButton 
    as={NavLink} 
    to={props.link} 
    activeClassName={activeClassName} 
    exact={props.exact}>
      {props.children}
    </HeaderButton>
  )
}

export default HeaderLink
