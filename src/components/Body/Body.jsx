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
    height: 90vh;
  `;

  const MainCard = styled.div`
    margin: -30px 15px 0px;
    padding: 12px;
    background-color: #FFFFFF;
    border-radius: 6px;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  `;

  return (
    <div>
      <HeaderImage img={backgroundImage}/>
      <MainCard>
        <Route path="/" exact component={Home}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/projects" component={Projects}/>
      </MainCard>
    </div>
  )
}

export default Body

