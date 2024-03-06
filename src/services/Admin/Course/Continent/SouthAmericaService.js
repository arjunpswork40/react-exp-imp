import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://exp-imp-node.onrender.com/api';

const SouthAmerica = {
  countryList: async (token) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/continents/SouthAmerica/countries`, {
        headers: {
          Authorization: token // Pass the token in the Authorization header
        },
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message + '--' + error.name;
    }
  },
  instituteListByCountry: async (token,continent,countryId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/continents/${continent}/${countryId}/institute-list`, {
        headers: {
          Authorization: token
        },
      });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message + '--' + error.name;
    }
  },
};

export default SouthAmerica;
