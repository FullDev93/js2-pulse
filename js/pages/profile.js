import { requireUser } from '../utils/storage.js';
import { getProfile, getProfilePosts } from '../api/profiles.js';
import { createPostCard } from '../ui/postCard.js';
import { createProfileHeader } from '../ui/profileHeader.js';

const message = document.querySelector('#message');
const profileContainer = document.querySelector('#profile');
const postsContainer = document.querySelector('#posts');
const user = requireUser();
const name = new URLSearchParams(location.search).get('name') ?? user?.name;

async function showProfile() {
  message.textContent = 'Loading profile…';
  try {
    const profile = await getProfile(name);
    const posts = await getProfilePosts(name);

    profileContainer.replaceChildren(createProfileHeader(profile));
    postsContainer.replaceChildren(...posts.map(createPostCard));
    message.textContent = posts.length ? '' : 'No posts yet.';
  } catch (error) {
    message.textContent = error.message;
  }
}

if (user) {
  showProfile();
}
