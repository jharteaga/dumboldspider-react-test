import React from 'react';

import cartoon from '../../assets/img/cartoon.png';
import './about.component.scss';

const About = () => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={cartoon} className="card-img-top" alt="cartoon" />
      <div className="card-body">
        <h5 className="card-title">José Arteaga</h5>
        <p className="card-text">Front-End Developer</p>
      </div>
    </div>
  );
};

export default About;
