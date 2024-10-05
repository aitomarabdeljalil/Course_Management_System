import {apiClient} from './api';

// Function to log in a user
export const loginUser = async (credentials: { username: string; password: string }) => {
  const response = await apiClient.post('/auth/login', credentials);
  // Store the JWT token in local storage
  localStorage.setItem('token', response.data.access_token);
  return response.data;
};

// Function to register a new user
export const registerUser = async (userData: { username: string; password: string }) => {
  const response = await apiClient.post('/users/register', userData);
  return response.data; 
};

// Function to log out a user
export const logoutUser = async () => {
  await apiClient.post('/auth/logout'); 
  localStorage.removeItem('token'); 
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; 
};
