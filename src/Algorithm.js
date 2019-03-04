import React, { Component } from 'react';
import './App.css';
import Flip from 'react-reveal/Flip';

function getAlgorithmSet(index, supervised, unsupervised, reinforcement) {
    if (index == 0) {
        return supervised
    }

    else if (index == 1) {
        return unsupervised
    }

    else {
        return reinforcement
    }

}

function setAlgorithm(e, setAlgorithmIndex, index) {
    setAlgorithmIndex(index)

}

const Algorithm = ({ title, description, image, link, opacity }) => (

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

const Algorithms = ({ supervised, unsupervised, reinforcement }) => {
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
                    {getAlgorithmSet(algorithmIndex, supervised, unsupervised, reinforcement).map(project => <Algorithm {...project} />)}
                </div>
            </div>
        </div>
    </div >)
}

export default Algorithms;