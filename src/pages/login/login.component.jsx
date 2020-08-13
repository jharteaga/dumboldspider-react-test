import React from 'react';
import FacebookLogin from 'react-facebook-login';

import authService from '../../services/AuthService';
import './login.component.scss';

const Login = () => {
  const responseFacebook = async (response) => {
    if (!response.status) {
      await authService.login({ name: response.name });
      window.location = '/home';
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <FacebookLogin
        appId={process.env.REACT_APP_FB_APP_ID}
        autoLoad={false}
        fields="name,email,picture"
        scope="email"
        callback={responseFacebook}
        version="7.0"
      />
    </div>
  );
};

export default Login;
