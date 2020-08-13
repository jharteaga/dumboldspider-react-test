import React from 'react';
import { Link } from 'react-router-dom';

import './home.component.scss';

const Home = () => {
  return (
    <div className="jumbotron home">
      <h1 className="display-4 home-title">DumbOldSpider LLC</h1>
      <p className="lead home-subtitle">Exam for FrontEnd developers</p>
      <Link
        className="btn btn-primary btn-lg home-btn"
        to="/about"
        role="button"
      >
        Who we are?
      </Link>
    </div>
  );
};

export default Home;
