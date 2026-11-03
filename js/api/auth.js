import { apiRequest } from './request.js';

export function registerUser(userData) {
  return apiRequest('/auth/register', 'POST', userData);
}

export function loginUser(credentials) {
  return apiRequest('/auth/login', 'POST', credentials);
}
