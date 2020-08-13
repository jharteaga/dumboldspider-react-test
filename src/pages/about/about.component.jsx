import React, { useEffect, useState } from 'react';

import authService from '../../services/AuthService';
import cartoon from '../../assets/img/cartoon.png';
import FbLikeShareButton from '../../components/fb-like-share-button/fb-like-share-button.component';
import './about.component.scss';

const About = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const getInfo = async () => {
    setIsLoggedIn(await authService.isLoggedIn());
  };

  useEffect(() => {
    getInfo();
  }, [isLoggedIn]);

  return (
    <div className="about">
      <div className="card" style={{ width: '18rem' }}>
        <img src={cartoon} className="card-img-top" alt="cartoon" />
        <div className="card-body">
          <h5 className="card-title">José Arteaga</h5>
          <p className="card-text">Front-End Developer</p>
        </div>
      </div>
      {isLoggedIn && (
        <div className="about-fb">
          <FbLikeShareButton />
        </div>
      )}
    </div>
  );
};

export default About;
