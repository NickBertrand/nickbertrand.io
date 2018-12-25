import React from 'react'
import styled from 'styled-components/macro'


function WindowPane(props) {
  const WindowPaneContainer = styled.div`
    max-width: 960px;
    padding: 15px;
    margin: 0 auto;
  `;

  return (
    <WindowPaneContainer>
      {props.children}
    </WindowPaneContainer>
  )
}

export default WindowPane
