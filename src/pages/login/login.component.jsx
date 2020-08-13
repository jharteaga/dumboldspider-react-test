import React from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';

import authService from '../../services/AuthService';
import './login.component.scss';

const Login = () => {
  const responseFacebook = async (response) => {
    if (!response.status) {
      await authService.login({ name: response.profile.name });
      window.location = '/home';
    }
  };

  return (
    <div className="login">
      <h1 className="login-text">Login</h1>
      <FacebookProvider appId={process.env.REACT_APP_FB_APP_ID}>
        <LoginButton
          scope="email"
          onCompleted={responseFacebook}
          onError={(err) =>
            console.log('Error in Facebook Authentication', err.message)
          }
          className="login-fb-btn"
        >
          <span className="login-fb-btn-text">Facebook Login</span>
        </LoginButton>
      </FacebookProvider>
    </div>
  );
};

export default Login;
