import React, { Component } from 'react';
import './App.css';
import Projects from './Project.js';
import Header from './Header.js';
import About from './About.js';
import Publications from './Publication';
import Tabs from './Tabs';
import {
  projects,
  publications,
} from './data';
import { Router } from '@reach/router';


let Main = () => {
  return (
    <div className="body">
      <header>
        <Tabs />
        <Header name="Tom P.A. Warner" />
      </header>
      <main>
        <About />
        <Publications publications={publications} />
        <Projects projects={projects} />
        {/* <Algorithms
          supervised={supervised}
          unsupervised={unsupervised}
          reinforcement={reinforcement}
        /> */}
        
        {/* <Attributes attributes={attributes} /> */}
      </main>
    </div>
  );
};

class TranslatorForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: '', output: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let english = event.target.value;
    console.log(english);

    if (event.key == 'Enter') {
      if (english !== null) {
        fetch(
          'http://34.67.173.2/trans?english=' + english.replace(/\s/g, '%20'),
        )
          .then(res => res.text())
          .then(translation => {
            this.setState({
              input: english,
              output: translation,
            });

            console.log(english, translation);
          });
      }
    }
  }

  render() {
    return (
      <div className="translator">
        <h1>Translator</h1>

        <div className="translatorSection">
          <div className="translatorField">
            <input id="translatorInput" onKeyPress={this.handleChange}></input>
          </div>
          <div className="translatorField">
            <input
              id="translatorOutput"
              placeholder={this.state.output}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

let Translator = () => {
  return (
    <div className="body">
      <TranslatorForm />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <Main path="/" />
        <Translator path="translator" />
      </Router>
    );
  }
}

export default App;
