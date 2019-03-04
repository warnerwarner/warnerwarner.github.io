import React, { Component } from 'react';
import './App.css';
import Projects from './Project.js';
import Algorithms from './Algorithm.js';
import Header from './Header.js';
import About from './About.js';
import Publications from './Publication';
import Tabs from './Tabs';
import { projects, supervised, unsupervised, reinforcement, publications } from './data'

class App extends Component {
  render() {
    return (
      <div className='body'>
        <header>
          <Tabs />
          <Header name='Liam Eloie' />
        </header>
        <main>
          <About />
          <Projects projects={projects} />
          <Algorithms supervised={supervised} unsupervised={unsupervised} reinforcement={reinforcement} />
          <Publications publications={publications} />
        </main>
      </div>
    );
  }
}

export default App;
