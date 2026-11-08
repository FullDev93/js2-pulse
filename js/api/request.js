import { API_BASE, API_KEY } from './config.js';
import { getUser } from '../utils/storage.js';

export async function apiRequest(path, method = 'GET', body) {
  const headers = { 'X-Noroff-API-Key': API_KEY };

  const user = getUser();
  if (user) {
    headers.Authorization = `Bearer ${user.accessToken}`;
  }
  if (body) {
    headers['Content-Type'] = 'application/json';
  }

  const response = await fetch(API_BASE + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (response.status === 204) {
    return null;
  }
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message ?? 'Something went wrong');
  }
  return json.data;
}
