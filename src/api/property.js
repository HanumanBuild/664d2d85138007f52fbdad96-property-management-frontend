import axios from 'axios';

const API_URL = process.env.REACT_APP_PROPERTY_MANAGEMENT_BACKEND_URL;

export const getProperties = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/api/properties`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProperty = async (token, propertyData) => {
  try {
    const response = await axios.post(`${API_URL}/api/properties`, propertyData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProperty = async (token, propertyId, propertyData) => {
  try {
    const response = await axios.put(`${API_URL}/api/properties/${propertyId}`, propertyData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProperty = async (token, propertyId) => {
  try {
    const response = await axios.delete(`${API_URL}/api/properties/${propertyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};