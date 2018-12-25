import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import WindowPane from '../../containers/WindowPane/WindowPane';


const Header = () => {
  const HeaderContainer = styled.div`
    background-color: transparent;
    position: fixed;
    width: 100%;
  `;

  const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `;

  const activeClassName = 'active';

  const HeaderButton = styled.button.attrs({
    activeClassName: activeClassName
  })`
    background: transparent;
    border-radius: 3px;
    border: 2px solid white;
    margin: 0 1em;
    padding: 0.25em 1em;
    text-decoration: none;
    color: white;

    &.${activeClassName} {
      text-decoration: underline;
    }
  `;

  const HeaderText = styled.span`
    font-size: 1.2rem;
    color: white;
    font-weight: 300;
  `;

  return (
    <HeaderContainer>
      <WindowPane>
        <HeaderContent>
          <HeaderText>Nick Bertrand</HeaderText>

          <div>
            <HeaderButton as={NavLink} to="/" activeClassName={activeClassName} exact>
              <HeaderText>Home</HeaderText>
            </HeaderButton>
            <HeaderButton as={NavLink} to="/projects" activeClassName={activeClassName}>
              <HeaderText>Projects</HeaderText>
            </HeaderButton>
            <HeaderButton as={NavLink} to="/resume" activeClassName={activeClassName}>
              <HeaderText>Resume</HeaderText>
            </HeaderButton>
          </div>
        </HeaderContent>
      </WindowPane>
    </HeaderContainer>
  )
}

export default Header
