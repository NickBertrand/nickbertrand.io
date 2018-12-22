import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Resume from './containers/Resume/Resume';
import Projects from './containers/Projects/Projects';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <main>
            <Route path="/" exact component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
