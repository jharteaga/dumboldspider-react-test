import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './pages/about/about.component';
import Home from './pages/home/home.component';
import Login from './pages/login/login.component';
import Menu from './components/menu/menu.component';
import NotFound from './pages/not-found/not-found.component';
import authService from './services/AuthService';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const getInfo = async () => {
    setIsLoggedIn(await authService.isLoggedIn());
  };

  useEffect(() => {
    getInfo();
  }, [isLoggedIn]);

  return (
    <div>
      <Menu />
      <Switch>
        {!isLoggedIn ? (
          <Route path="/login" component={Login} />
        ) : (
          <Redirect path="/login" exact to="/home" />
        )}
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default App;
