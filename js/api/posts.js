import { apiRequest } from './request.js';

export function getPosts() {
  return apiRequest('/social/posts?_author=true');
}
