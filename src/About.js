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
          introduced me to the world of aritifical intelligence and machine 
          learning. As I began to utilise these techniques in my work I grew 
          ever more interested in the theory and application of these techniques.
          
        </p>

        <p className="aboutMeDescription">
          {' '}
          I am apt in manipulation and analysis of large datasets, using both
          typical and novel techniques. Further, I am competent in using 
          distributed high performance computing clusters as well as 
          accelerated computational techniques such as CUDA.

        </p>
      </div>
    </div>
  </div>
);

export default About;
