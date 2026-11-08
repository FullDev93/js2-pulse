import { requireUser } from '../utils/storage.js';
import {
  getProfile,
  getProfilePosts,
  followProfile,
  unfollowProfile,
} from '../api/profiles.js';
import { createPostCard } from '../ui/postCard.js';
import { createProfileHeader } from '../ui/profileHeader.js';

const message = document.querySelector('#message');
const profileContainer = document.querySelector('#profile');
const postsContainer = document.querySelector('#posts');
const followButton = document.querySelector('#follow-button');
let isFollowing = false;
const user = requireUser();
const name = new URLSearchParams(location.search).get('name') ?? user?.name;

async function showProfile() {
  message.textContent = 'Loading profile…';
  try {
    const profile = await getProfile(name);
    const posts = await getProfilePosts(name);

    profileContainer.replaceChildren(createProfileHeader(profile));
    if (name !== user.name) {
      isFollowing = profile.followers.some(
        (follower) => follower.name === user.name,
      );
      followButton.textContent = isFollowing ? 'Unfollow' : 'Follow';
      followButton.hidden = false;
    }
    postsContainer.replaceChildren(...posts.map(createPostCard));
    message.textContent = posts.length ? '' : 'No posts yet.';
  } catch (error) {
    message.textContent = error.message;
  }
}

followButton.addEventListener('click', async () => {
  followButton.disabled = true;
  try {
    if (isFollowing) {
      await unfollowProfile(name);
    } else {
      await followProfile(name);
    }
    await showProfile();
  } catch (error) {
    message.textContent = error.message;
  } finally {
    followButton.disabled = false;
  }
});

if (user) {
  showProfile();
}
