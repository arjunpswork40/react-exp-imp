import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://exp-imp-node.onrender.com/api';

const AuthService = {
  login: async (admin) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/admin/login`, admin);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message + '--' + error.name;
    }
  },
  refreshAccessToken: async (refreshToken) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/admin/refresh-token`, { refreshToken });
      return response.data.accessToken;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  },
  getAccessToken() {
    return localStorage.getItem('accessToken');
  },
  getLocalStorage() {
    return localStorage;
  },
  getTokenStatus() {
    return localStorage.getItem('tokenStatus');
  }
};

export default AuthService;
