import { API_BASE } from './config.js';

export async function registerUser(userData) {
  const response = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message ?? 'Registration failed');
  }
  return json.data;
}

export async function loginUser(credentials) {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message ?? 'Login failed');
  }
  return json.data;
}
