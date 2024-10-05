'use client'
import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');

      window.location.href = '/login';
      console.error('Unauthorized access');
    }
    return Promise.reject(error);
  }
);

// Fetch courses with pagination
export const fetchCourses = async (page = 1, limit = 10,
  keyword?: string,
) => {
  const response = await apiClient.get(`/courses?page=${page}&limit=${limit}
    ${keyword ? `&keyword=${keyword}` : ''}
  `);
  return response.data;
};

//erceptors for attaching the token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createCourse = async (courseData) => {
  const response = await apiClient.post('/courses', courseData);
  return response.data;
};

export const fetchCourseById = async (id) => {
  const response = await apiClient.get(`/courses/${id}`);
  return response.data;
};