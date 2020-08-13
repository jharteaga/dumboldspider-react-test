import React from 'react';
import { Link } from 'react-router-dom';

import './home.component.scss';

const Home = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">DumbOldSpider LLC</h1>
      <p className="lead">Exam for FrontEnd developers</p>
      <Link className="btn btn-primary btn-lg" to="/about" role="button">
        Who we are?
      </Link>
    </div>
  );
};

export default Home;
