import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const checkIn = async (employeeId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/attendance/check-in/${employeeId}`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error checking in:', error);
    throw error;
  }
};

export const checkOut = async (employeeId) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/attendance/check-out/${employeeId}`,
      {},
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error checking out:', error);
    throw error;
  }
};

export const getMonthlyAttendance = async (employeeId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/attendance/month/${employeeId}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching monthly attendance:', error);
    throw error;
  }
};