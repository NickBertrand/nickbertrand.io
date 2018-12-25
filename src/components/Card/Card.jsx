import React from 'react'
import styled from 'styled-components/macro'

function Card(props) {
  const MainCard = styled.div`
  margin: -30px 15px 0px;
  padding: 12px;
  background-color: #FFFFFF;
  border-radius: 6px;
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
`;

  return (
    <MainCard>
      {props.children}
    </MainCard>
  )
}

export default Card
