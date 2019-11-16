import React from 'react';
import NavBar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Jumbotron/>
      <Intro />
      <Projects />
    </div>
  );
}
   


export default App;
