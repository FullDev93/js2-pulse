import { requireUser, logout } from '../utils/storage.js';
import { getPosts, searchPosts, createPost } from '../api/posts.js';
import { createPostCard } from '../ui/postCard.js';
import { readPostForm } from '../ui/postForm.js';

const message = document.querySelector('#message');
const postsContainer = document.querySelector('#posts');
const searchForm = document.querySelector('#search-form');
const createForm = document.querySelector('#create-form');

async function showPosts(query = '') {
  message.textContent = 'Loading posts…';
  try {
    const posts = query ? await searchPosts(query) : await getPosts();
    postsContainer.replaceChildren(...posts.map(createPostCard));
    message.textContent = posts.length ? '' : 'No posts found.';
  } catch (error) {
    message.textContent = error.message;
  }
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = new FormData(searchForm).get('query').trim();
  showPosts(query);
});

createForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = createForm.querySelector('button');
  button.disabled = true;
  try {
    await createPost(readPostForm(createForm));
    createForm.reset();
    showPosts();
  } catch (error) {
    message.textContent = error.message;
  } finally {
    button.disabled = false;
  }
});

if (requireUser()) {
  showPosts();
}

document.querySelector('#logout').addEventListener('click', logout);
