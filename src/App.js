import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './pages/about/about.component';
import Home from './pages/home/home.component';
import Login from './pages/login/login.component';
import Logout from './components/logout/logout.component';
import Menu from './components/menu/menu.component';
import NotFound from './pages/not-found/not-found.component';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Menu />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
