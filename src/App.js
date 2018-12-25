import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import styled from 'styled-components/macro'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './containers/Home';
import { Resume } from './containers/Resume';
import { Projects } from './containers/Projects';



class App extends Component {
  render() {
    const AppContainer = styled.div`
        text-align: center;
    `;
  
    return (
      <BrowserRouter>
        <AppContainer>
          <Header/>
          <main>
            <Route path="/" exact component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
          </main>
          <Footer/>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default App;
