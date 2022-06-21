import axios from 'axios';

const user = axios.create({
  baseURL: 'http://127.0.0.1:8001/api/users',
});
const register = async (username, password, email) => {
  await user.post('/register', {
    username,
    password,
    email,
  });
};
const login = async (username, password) => {
  await user
    .post('/login', {
      username,
      password,
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem('user', JSON.stringify(res.data));
      }
      return res.data;
    });
};
const logout = () => {
  localStorage.removeItem('user');
};

// eslint-disable-next-line import/prefer-default-export
export const userService = { register, login, logout };
