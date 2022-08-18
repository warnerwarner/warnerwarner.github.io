import React from 'react';

const Tabs = () => (
  <div className="tabs">
    <a href="#aboutMe" className="tab">
      About
    </a>


    <a href="#publications" className="tab">
      Publications
    </a>
    <a href="#projects" className="tab">
      Projects
    </a>
    {/* <a href="./files/CV - Liam Eloie.pdf" download className="tab">CV download</a> */}
  </div>
);

export default Tabs;
