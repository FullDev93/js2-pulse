import { apiRequest } from './request.js';

export function getPosts() {
  return apiRequest('/social/posts?_author=true');
}

export function searchPosts(query) {
  return apiRequest(
    `/social/posts/search?q=${encodeURIComponent(query)}&_author=true`,
  );
}
