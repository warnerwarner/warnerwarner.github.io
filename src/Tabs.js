import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './App.css';

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

export default Tabs;