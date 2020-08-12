import React from 'react';

const Project = ({ title, description, image, link }) => (
  /**
   * A React component that represents a card detailing an
   * implemented project.
   *
   * title: the project name,
   * description: the description of the implementation,
   * image: the image corresponding to the project,
   * link: a link to the GitHub implementation,
   * opacity: whether the hide the card or not.
   */

  <a target="_blank" className="projectLink" href={link}>
    <div>
      <div className="project-summary">
        <div className="projectDivImage">
          <img className="projectImage" src={image}></img>
        </div>
        <div className="projectDiv">
          <div className="projectText">
            <h2 className="projectTitle">{title}</h2>
            <h4 className="projectDescription">{description}</h4>
          </div>
        </div>
      </div>
    </div>
  </a>
);

const Projects = ({ projects }) => (
  /**
   * A React component representing the Projects section of
   * the webpage. Displays all the projects in card format.
   *
   * projects: an array of json objects corresponding to all the projects.
   */

  <div className="projects" id="projects">
    <h1 className="projectsTitle">Projects</h1>
    {/* <hr className='hrStyleBlue'></hr> */}
    <div className="projectTabs">
      {projects.map(project => (
        <Project {...project} />
      ))}
    </div>
  </div>
);

export default Projects;
