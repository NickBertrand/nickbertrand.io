import React from 'react'
import { Route } from "react-router-dom";
import { Home } from '../../containers/Home';
import { Resume } from '../../containers/Resume';
import { Projects } from '../../containers/Projects';

function Main() {

  return (
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/projects" component={Projects}/>
    </div>
  )
}

export default Main

