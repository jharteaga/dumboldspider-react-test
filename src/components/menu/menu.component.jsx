import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import authService from '../../services/AuthService';
import { useEffect } from 'react';

const Menu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [userInfo, setUserInfo] = useState({});

  const getInfo = async () => {
    const status = await authService.isLoggedIn();
    if (status) setUserInfo(await authService.getUserInfo());
    setIsLoggedIn(status);
  };

  useEffect(() => {
    setIsLoggedIn(getInfo());
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        DumbOldSpider LLC
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
        {!isLoggedIn ? (
          <NavLink to="/login">
            <button
              className="btn btn-primary my-2 my-sm-0 mr-2"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Login
            </button>
          </NavLink>
        ) : (
          <>
            <h5 className="mt-2 mr-3">Welcome, {userInfo.name}</h5>
            <NavLink to="/logout">
              <button
                className="btn btn-danger my-2 my-sm-0 mr-2"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Logout
              </button>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Menu;
