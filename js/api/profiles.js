import { apiRequest } from './request.js';

export function getProfile(name) {
  return apiRequest(
    `/social/profiles/${encodeURIComponent(name)}?_followers=true&_following=true`,
  );
}

export function getProfilePosts(name) {
  return apiRequest(
    `/social/profiles/${encodeURIComponent(name)}/posts?_author=true`,
  );
}
