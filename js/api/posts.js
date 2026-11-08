import { apiRequest } from './request.js';

export function getPosts() {
  return apiRequest('/social/posts?_author=true');
}

export function searchPosts(query) {
  return apiRequest(
    `/social/posts/search?q=${encodeURIComponent(query)}&_author=true`,
  );
}

export function createPost(postData) {
  return apiRequest('/social/posts', 'POST', postData);
}

export function getPost(id) {
  return apiRequest(`/social/posts/${encodeURIComponent(id)}?_author=true`);
}

export function updatePost(id, postData) {
  return apiRequest(`/social/posts/${encodeURIComponent(id)}`, 'PUT', postData);
}

export function deletePost(id) {
  return apiRequest(`/social/posts/${encodeURIComponent(id)}`, 'DELETE');
}
