import storageKeys from '../config/storageKeys';

const login = async (user) => {
  localStorage.setItem(storageKeys.USER_INFO, JSON.stringify(user));
};

const logout = async (user) => {
  localStorage.removeItem(storageKeys.USER_INFO);
};

const getUserInfo = async (user) => {
  return JSON.parse(localStorage.getItem(storageKeys.USER_INFO));
};

const isLoggedIn = async (user) => {
  return !!JSON.parse(localStorage.getItem(storageKeys.USER_INFO));
};

export default {
  login,
  logout,
  getUserInfo,
  isLoggedIn,
};
