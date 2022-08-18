import React from 'react';

const About = () => (
  /**
   * A React component representing the About section of
   * the webpage. This includes the text desc ription
   * about me.
   */

  <div className="aboutMe" id="aboutMe" aos-duration="500">
    <h1 className="aboutMeTitle">About Me</h1>
    <div className="aboutMeBody">
      <div className="aboutMeImages">
        <img className="aboutMeImage" src="./images/CRICK_Brandmark_01_CMYK.jpg"></img>
      </div>
      <div className="aboutMeText">
        {/* <hr className='hrStyleBlue'></hr> */}
        <p className="aboutMeDescription">
          I have recently completed my PhD in Neurophysiology at the Francis
          Crick Institute. Previously I have obtained a MSci degree in Physics
          from UCL.
        </p>

        <p className="aboutMeDescription">
          My PhD focused on decoding neural responses to fast temporally 
          fluctuating odour stimuli, during which I expanded my computational
          and analytical skill sets. The transition from Physics towards Systems Neuroscience
          introduced me to the world of artificial intelligence and machine 
          learning. As I began to utilise these techniques in my work I grew 
          ever more interested in the theory and application of these techniques.
          
        </p>

        <p className="aboutMeDescription">
          {' '}
          I am adept in manipulation and analysis of large datasets, using both
          typical and novel techniques. Further, I am competent in using 
          distributed high performance computing clusters as well as 
          accelerated computational techniques such as CUDA.

        </p>
      </div>
    </div>
    {/* <h2 className='aboutMeTitle'>Skills</h2>
    
    <div className="aboutMeSkills">
    <h3>Programming</h3>
    <ul>
      <li>Expert in Python</li>
      <ul>
        <li>Apt in large scale data manipulation</li>
        <li>Significant experience in machine learning processes, such as SVMs</li>
        <li>Skilled in accelerated processing such as CUDA</li>
        <li>Experience in constructing multi-stage analysis pipelines for large dataset</li>
        <li>Experience in parallelising code for similitaneous processing</li>
        <li>Some experience in utilising high-level machine learning pacakges e.g. PyTorch</li>
      </ul>
      <li>Experienced in workload managers e.g. SLURM</li>
      <li>Experienced in Git version control</li>
      <li>Some experience MATLAB</li>
      <li>Some experience in Java</li>
      <li>Some experience in JavaScript and React</li>
      <li>Limited experience in Qt</li>
      <li>Limited experience in C++</li>
    </ul>
    <h3>General skills</h3>
    <ul>
      <li>Strong communicator</li>
      <li>Experience working both independently and as part of a larger team</li>
      <li>Advanced quantative skills</li>
    </ul>

  </div>     */}
  </div>
);

export default About;
