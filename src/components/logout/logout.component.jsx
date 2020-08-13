import { useEffect } from 'react';

import authService from '../../services/AuthService';

const Logout = () => {
  useEffect(() => {
    authService.logout();
    window.location = '/home';
  }, []);

  return null;
};

export default Logout;
