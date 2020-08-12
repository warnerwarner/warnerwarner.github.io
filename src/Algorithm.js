import React from 'react';

function getAlgorithmSet(index, supervised, unsupervised, reinforcement) {
  /**
   * A function that selections which type of algorithms
   * to display.
   */

  if (index == 0) {
    return supervised;
  } else if (index == 1) {
    return unsupervised;
  } else {
    return reinforcement;
  }
}

function setAlgorithm(e, setAlgorithmIndex, index) {
  /**
   * A function that sets the state of algorithmIndex.
   */

  setAlgorithmIndex(index);
}

const Algorithm = ({ title, description, image, link }) => (
  /**
   * A React component that represents a card detailing an
   * implemented algorithm.
   *
   * title: the algorithm name,
   * description: the description of the implementation,
   * image: the image corresponding to the algorithm,
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

const Algorithms = ({ supervised, unsupervised, reinforcement }) => {
  /**
   * A React component representing the Algorithms section of the
   * website. This displays the different algorithms within each
   * section: supervised, unsupervised, and reinforcement learning.
   *
   * supervised: an array of json objects detailing the supervised algorithms,
   * unsupervised: an array of json objects detailing the unsupervsied algorithms,
   * reinforcement: an array of json objects detailing the reinforcement algorithms.
   */

  const initial_state = 0;
  const state = React.useState(initial_state);
  const algorithmIndex = state[0];
  const setAlgorithmIndex = state[1];

  return (
    <div className="algorithms" id="algorithms">
      <h1 className="algorithmsTitle">Algorithms</h1>
      {/* <hr className='hrStyleBlue'></hr> */}

      <div className="algorithmBody">
        <div className="algorithmTabs">
          <a className="algorithmSubtitleLink" href="#algorithms">
            <div
              className="algorithmSubtitle supervised"
              onClick={e => setAlgorithm(e, setAlgorithmIndex, 0)}
            >
              <h1 className="algorithmText">Supervised Learning</h1>
            </div>
          </a>
          <a className="algorithmSubtitleLink" href="#algorithms">
            <div
              className="algorithmSubtitle unsupervised"
              onClick={e => setAlgorithm(e, setAlgorithmIndex, 1)}
            >
              <h1 className="algorithmText">Unsupervised Learning</h1>
            </div>
          </a>
          <a className="algorithmSubtitleLink" href="#algorithms">
            <div
              className="algorithmSubtitle reinforcement"
              onClick={e => setAlgorithm(e, setAlgorithmIndex, 2)}
            >
              <h1 className="algorithmText">Reinforcement Learning</h1>
            </div>
          </a>
        </div>
        <div className="projectTabs">
          {getAlgorithmSet(
            algorithmIndex,
            supervised,
            unsupervised,
            reinforcement,
          ).map(project => (
            <Algorithm {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Algorithms;
