import React from 'react';
import { Link } from 'react-router-dom';

import './home.component.scss';

const Home = () => {
  return (
    <div class="jumbotron">
      <h1 class="display-4">DumbOldSpider LLC</h1>
      <p class="lead">Exam for FrontEnd developers</p>
      <Link class="btn btn-primary btn-lg" to="/about" role="button">
        Who we are?
      </Link>
    </div>
  );
};

export default Home;
