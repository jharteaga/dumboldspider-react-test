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
    <div>
      <h1>Login</h1>
      <FacebookProvider appId={process.env.REACT_APP_FB_APP_ID}>
        <LoginButton
          scope="email"
          onCompleted={responseFacebook}
          onError={(err) =>
            console.log('Error in Facebook Authentication', err.message)
          }
        >
          <span>Login via Facebook</span>
        </LoginButton>
      </FacebookProvider>
    </div>
  );
};

export default Login;
