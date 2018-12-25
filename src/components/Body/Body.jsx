import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import styled from 'styled-components/macro'
import backgroundImage from '../../assets/images/space-header.jpg';
import { Home } from '../../containers/Home';
import { Resume } from '../../containers/Resume';
import { Projects } from '../../containers/Projects';



function Body() {
  const HeaderImage = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
  `;

  return (
    <div>
      <HeaderImage img={backgroundImage}/>
      <Route path="/" exact component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/projects" component={Projects}/>
    </div>
  )
}

export default Body

