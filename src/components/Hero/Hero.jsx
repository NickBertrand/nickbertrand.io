import React from 'react'
import styled from 'styled-components/macro'

function Hero(props) {
  const HeaderImage = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    height: 90vh;
  `;

  return (
    <HeaderImage img={props.image}>
      {props.children}
    </HeaderImage>
  )
}

export default Hero
