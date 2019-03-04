import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import './App.css';




const Project = ({ title, description, image, link, opacity }) => (

  <a className='projectLink' href={link}>

    <Flip left duration={1500}>
      <div className="project-summary" style={{ opacity: opacity }}>

        <div className='projectDivImage'>
          <img className="projectImage" src={image}></img>
        </div>
        <div className='projectDiv'>
          <div className='projectText'>
            <h2 className="projectTitle">{title}</h2>
            <h4 className="projectDescription">{description}</h4>
          </div>
        </div>
      </div>
    </Flip>
  </a>

)

const Algorithm = ({ title, description, image, link }) => (
  <a className='algorithmLink' href={link}>
    <div className="algorithm-summary">

      <div className='algorithImageDiv'>
        <img className="algorithmImage" src={image}></img>
      </div>

      <div className='algorithmTextDiv'>
        <div className='algorithmDivDiv'>
          <h2 className="algorithmTitle">{title}</h2>
        </div>
        <div className='algorithmDivDiv'>
          <p className="algorithmDescription">{description}</p>
        </div>
      </div>
    </div>
  </a>
)

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const projects1 = [{
  title: 'Quantum Gate Learning',
  description: 'Using evolutionary algorithms to learn quantum logic gates.',
  image: './images/bloch_sphere.png',
  link: 'https://github.com/Usefulmaths/MSci-Project-Quantum-Gate-Learning-Differential-Evolution'
}, {
  title: 'Protein Function Prediction',
  description: 'Predicting the function of proteins using deep learning.',
  image: './images/protein.png',
  link: 'https://github.com/Usefulmaths/MSc-Project-Protein-Function-Prediction'

}, {
  title: 'Neural Translator',
  description: 'English to Norwegian translator using LSTM with attention',
  image: './images/seq2seq_attention_mechanism_new.png',
  link: 'https://github.com/Usefulmaths/Neural-Translation-with-Attention'
}, {
  title: 'Neural Processes',
  description: 'Implementation of neural processes.',
  image: './images/gpfunc.png',
  link: 'https://github.com/Usefulmaths/Neural-Processes'
}, {
  title: 'Solar System',
  description: 'A simulation of the solar system using Newtonian physics.',
  image: './images/solarsystem.jpg',
  link: 'https://github.com/Usefulmaths/Solar-System-Environment'
}, {
  title: 'TicTacToe',
  description: 'Implementation of TicTacToe + AI opponent',
  image: './images/ttt.png',
  link: 'https://github.com/Usefulmaths/TicTacToe'
},];



const algorithmSupervised = [{
  title: 'Linear Regression',
  description: 'Implementation of Linear Regression (Python)',
  image: './images/lr.png',
  link: 'https://github.com/Usefulmaths/Linear-Regression'
}, {
  title: 'Logistic Regression',
  description: 'Implementation of Logistic Regression (Python)',
  image: './images/logisticregression.png',
  link: 'https://github.com/Usefulmaths/Logistic-Regression'
}, {
  title: 'Decision Tree',
  description: 'Implementation of Decision Tree (Python)',
  image: './images/dt.png',
  link: 'https://github.com/Usefulmaths/Decision-Tree'
},
{
  title: 'Naïve Bayes',
  description: 'Implementation of Gaussian Naïve Bayes (Python)',
  image: './images/nb.png',
  link: 'https://github.com/Usefulmaths/Naive-Bayes'
},
{
  title: 'K-Nearest Neighbours',
  description: 'Implentation of K-Nearest Neighbours (Python)',
  image: './images/knn.png',
  link: 'https://github.com/Usefulmaths/K-Nearest-Neighbours',

}, {
  title: 'Actor-Critic',
  description: 'Implementation of TicTacToe + AI opponent',
  image: './images/actorcritic.png',
  link: '',
  opacity: 0
},]

const algorithmUnsupervised = [{
  title: 'K-Means',
  description: 'Implementation of K-means (Python)',
  image: './images/kmeans.png',
  link: 'https://github.com/Usefulmaths/K-means'
}, {
  title: 'Gaussian Mixture Model',
  description: 'Implementation of Gaussian Mixture Model using EM (Python)',
  image: './images/gmm.png',
  link: 'https://github.com/Usefulmaths/Gaussian-Mixture-Model'
}, {
  title: 'Principal Component Analysis',
  description: 'Implementation of Principal Component Analysis (Python)',
  image: './images/pca.png',
  link: 'https://github.com/Usefulmaths/Principal-Component-Analysis'
},
{
  title: 'Autoencoder',
  description: 'Implementation of an Autoencoder (PyTorch)',
  image: './images/ae.png',
  link: 'https://github.com/Usefulmaths/Autoencoder'
},
{
  title: 'Variational Autoencoder',
  description: 'Implementation of a Variational Autoencoder (PyTorch)',
  image: './images/vae.png',
  link: 'https://github.com/Usefulmaths/Variational-Autoencoder'
},
{
  title: 'Generative Adversarial Network',
  description: 'Implementation of a Generative Adversarial Network (PyTorch)',
  image: './images/gan.png',
  link: 'https://github.com/Usefulmaths/Generative-Adversarial-Network'
}]

const algorithmReinforcement = [{
  title: 'Monte Carlo REINFORCE',
  description: 'Implementation of neural processes.',
  image: './images/pg.png',
  link: 'https://github.com/Usefulmaths/Monte-Carlo-Reinforce'
}, {
  title: 'Q-Learning',
  description: 'A simulation of the solar system using Newtonian physics.',
  image: './images/qlearning.png',
  link: 'https://github.com/Usefulmaths/Q-Learning'
}, {
  title: 'Actor-Critic',
  description: 'Implementation of TicTacToe + AI opponent',
  image: './images/actorcritic.png',
  link: 'https://github.com/Usefulmaths/Actor-Critic'
},
{
  title: 'Actor-Critic',
  description: 'Implementation of TicTacToe + AI opponent',
  image: './images/actorcritic.png',
  link: 'https://github.com/Usefulmaths/Actor-Critic',
  opacity: 0
},]

const Header = (name) => (

  <div className='header'>
    <div>
      <Flip left>
        <div className='headerImage'>
          <img className='center imgCircle' src='./images/myAvatar'></img>

        </div>
      </Flip>

      <Fade>
        <h1 className='textCenter titleText'>Liam D. Eloie</h1>
        <p className='textCenter'>liam.d.eloie@gmail.com</p>

        <div className='contacts'>
          <div className='contactItem'><a className='contactText' href='https://linkedin.com/in/liam-eloie-a5740965/'><img className='contactLogo' src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'></img></a></div>
          <div className='contactItem'><a className='contactText' href='https://github.com/Usefulmaths/'><img className='contactLogo' src='https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-png-transparent.png'></img></a></div>
          <div className='contactItem'><a className='contactText' href='liam.d.eloie@gmail.com'><img className='contactLogo' src='data:image/png;base64,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'></img></a></div>

        </div>
      </Fade>

      <hr className='hrStyleWhite'></hr>

      <p class='personDescription textCenter'>Machine Learning Engineer, London, UK</p>

    </div>
  </div>
)

const About = () => (
  <div className='aboutMe' id='aboutMe' aos-duration="500">

    <h1 className='aboutMeTitle'>
      About Me
    </h1>
    <Fade duration={1500}>
      <hr className='hrStyleBlue'></hr>
      <p className='aboutMeDescription'>
        I am a recent master's graduate in both Physics and Machine Learning at University College London (UCL).
    </p>
      <p className='aboutMeDescription'>
        Throughout my time at university, I have acquired a great thirst for knowledge, as well as powerful tools, required for discovering truths about our world. I am extremely passionate about using my skills and expertise to have a positive impact on society and to make the world a better place.
    </p>
      <p className='aboutMeDescription'> During my master's in Physics, I was fortunate enough to work alongside world leading experts in quantum computing, simulating quantum logic gates in a system of particles. This project introduced me to the field of machine learning, applied to quantum computing. Specifically, I used evolutionary algorithms to optimise the interactions between a system of particles to make it perform certain logical operations. I found these tools to be incredibly powerful, opening up a whole new world of discovery, which sparked my initial interest in machine learning. </p>

      <p className='aboutMeDescription'> As a result, I decided to pursue a MSc Machine Learning degree at UCL, where I was fortunately awarded a fully-funded scholarship from Google DeepMind. Not only did I learn the foundations of machine learning through this degree, but I was also introduced to state-of-the-art techniques within deep learning and reinforcement learning. Using these newly found skills, I undertook a master's project at the Francis Crick Institution in the field of protein function prediction.  </p>
    </Fade>
  </div>

)

const publications = [{
  name: 'Quantum arithmetics via computation with minimized external control: The half-adder.',
  authors: 'Liam Eloie, Leonardo Banchi, and Sougato Bose',
  journal: 'Physical Review A'
},
]

const Publication = ({ name, authors, journal }) => (
  <div className='publication'>
    <div className='publicationImageDiv'>
      <img className='publicationImage' src='./images/bloch_sphere.png'></img>
    </div>
    <div className='publicationText'>
      <p className='publicationName'>
        {name}
      </p>
      <p className='publicationAuthors'>
        {authors}
      </p>
      <p className='publicationJournal'>
        {journal}
      </p>
    </div>
  </div>
)

const Publications = () => (
  <div className='publications' id='publications' aos-duration="500">

    <h1 className='aboutMeTitle'>
      Publications
    </h1>
    <Fade left duration={1500}>
      <hr className='hrStyleBlue'></hr>

      <div>
        {publications.map(publication => <Publication {...publication} />)}
      </div>

    </Fade>
  </div>

)

const Projects = () => (
  <div className='projects' id='projects'>

    <h1 className='projectsTitle'>Projects</h1>
    <hr className='hrStyleBlue'></hr>

    <div className='projectTabs'>
      <div className='projectRow'>
        {projects1.map(project => <Project {...project} />)}
      </div>

    </div>
  </div>
)

function getAlgorithmSet(index) {
  if (index == 0) {
    return algorithmSupervised
  }

  else if (index == 1) {
    return algorithmUnsupervised
  }

  else {
    return algorithmReinforcement
  }

}

function setAlgorithm(e, setAlgorithmIndex, index) {
  setAlgorithmIndex(index)

}

const Algorithms = () => {
  const initial_state = 0;
  const state = React.useState(initial_state)

  const algorithmIndex = state[0]
  const setAlgorithmIndex = state[1]

  return (< div className='algorithms' id='algorithms' >

    <h1 className='algorithmsTitle'>Algorithms</h1>
    <hr className='hrStyleBlue'></hr>

    <div className='algorithmBody'>
      <div className='algorithmTabs'>
        <div className='algorithmSubtitle supervised' onClick={(e) => setAlgorithm(e, setAlgorithmIndex, 0)}>
          <h1 className='algorithmText'>Supervised Learning</h1>
        </div>

        <div className='algorithmSubtitle unsupervised' onClick={(e) => setAlgorithm(e, setAlgorithmIndex, 1)} >
          <h1 className='algorithmText'>Unsupervised Learning</h1>
        </div>

        <div className='algorithmSubtitle reinforcement' onClick={(e) => setAlgorithm(e, setAlgorithmIndex, 2)} >
          <h1 className='algorithmText'>Reinforcement Learning</h1>
        </div>
      </div>

      <div className='projectTabs'>
        <div className='projectRow'>
          {getAlgorithmSet(algorithmIndex).map(project => <Project {...project} />)}
        </div>
      </div>
    </div>




  </div >)
}

const Tabs = () => (
  <div className='tabs'>
    <Fade duration={1500}>
      <a href="#aboutMe" className='tab'>About</a>
      <a href='#projects' className='tab'>Projects</a>
      <a href='#algorithms' className='tab'>Algorithms</a>

      <a href='#publications' className='tab'>Publications</a>
    </Fade>
  </div >
)
/**
const Projects = () => (
<div className='projectTabs'>
  {projects.map(project => <Project {...project} />)}
</div>
)
 */



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
          <Projects />
          <Algorithms />
          <Publications />
        </main>
      </div>
    );
  }
}

export default App;
