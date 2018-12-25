import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import styled from 'styled-components/macro'
import { Body } from './components/Body';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


class App extends Component {
  render() {
    const AppContainer = styled.div`
        text-align: center;
    `;
  
    return (
      <BrowserRouter>
        <AppContainer>
          <Header/>
          <Body/>
          <Footer/>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;
