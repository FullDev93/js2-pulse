import { requireUser } from '../utils/storage.js';
import { getPosts } from '../api/posts.js';
import { createPostCard } from '../ui/postCard.js';

const message = document.querySelector('#message');
const postsContainer = document.querySelector('#posts');

async function showPosts() {
  message.textContent = 'Loading posts…';
  try {
    const posts = await getPosts();
    postsContainer.replaceChildren(...posts.map(createPostCard));
    message.textContent = posts.length ? '' : 'No posts found.';
  } catch (error) {
    message.textContent = error.message;
  }
}

if (requireUser()) {
  showPosts();
}
