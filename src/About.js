import React from 'react';

const About = () => (
  /**
   * A React component representing the About section of
   * the webpage. This includes the text desc ription
   * about me.
   */

  <div className="aboutMe" id="aboutMe" aos-duration="500">
    <h1 className="aboutMeTitle">About Me</h1>
    {/* <hr className='hrStyleBlue'></hr> */}
    <p className="aboutMeDescription">
      I am a recent master's graduate in both Physics and Machine Learning at
      University College London (UCL).
    </p>

    <p className="aboutMeDescription">
      Throughout my time at university, I have acquired a great thirst for
      knowledge, as well as powerful tools, required for discovering truths
      about our world. I am extremely passionate about using my skills and
      expertise to have a positive impact on society and to make the world a
      better place.
    </p>

    <p className="aboutMeDescription">
      {' '}
      During my master's in Physics, I was fortunate enough to work alongside
      world leading experts in quantum computing, simulating quantum logic gates
      in a system of particles. This project introduced me to the field of
      machine learning, applied to quantum computing. Specifically, I used
      evolutionary algorithms to optimise the interactions between a system of
      particles to make it perform certain logical operations. I found these
      tools to be incredibly powerful, opening up a whole new world of
      discovery, which sparked my initial interest in machine learning.{' '}
    </p>

    <p className="aboutMeDescription">
      {' '}
      As a result, I decided to pursue a MSc Machine Learning degree at UCL,
      where I was fortunately awarded a fully-funded scholarship from Google
      DeepMind. Not only did I learn the foundations of machine learning through
      this degree, but I was also introduced to state-of-the-art techniques
      within deep learning and reinforcement learning. Using these newly found
      skills, I undertook a master's project at the Francis Crick Institution in
      the field of protein function prediction.{' '}
    </p>
  </div>
);

export default About;
