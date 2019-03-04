import React, { Component } from 'react';
import Flip from 'react-reveal/Flip';
import './App.css';

const Project = ({ title, description, image, link, opacity }) => (

    <a target="_blank" className='projectLink' href={link}>

        <Flip left duration={1500}>
            <div style={{ opacity: opacity }}>
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
            </div>
        </Flip>
    </a>

)

const Projects = ({ projects }) => (
    <div className='projects' id='projects'>

        <h1 className='projectsTitle'>Projects</h1>
        <hr className='hrStyleBlue'></hr>

        <div className='projectTabs'>
            <div className='projectRow'>
                {projects.map(project => <Project {...project} />)}
            </div>

        </div>
    </div>
)

export default Projects;