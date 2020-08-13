import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './pages/about/about.component';
import Home from './pages/home/home.component';
import Menu from './components/menu/menu.component';
import NotFound from './pages/not-found/not-found.component';

function App() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
