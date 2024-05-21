import axios from 'axios';

const API_URL = process.env.REACT_APP_PROPERTY_MANAGEMENT_BACKEND_URL;

export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/register`, { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};