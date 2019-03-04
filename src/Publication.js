import React, { Component } from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';

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

const Publications = ({ publications }) => (
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
export default Publications;