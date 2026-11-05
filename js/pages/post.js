import { requireUser } from '../utils/storage.js';
import { getPost } from '../api/posts.js';
import { createPostCard } from '../ui/postCard.js';

const message = document.querySelector('#message');
const postContainer = document.querySelector('#post');
const id = new URLSearchParams(location.search).get('id');

async function showPost() {
  if (!id) {
    message.textContent = 'No post selected. Open a post from the feed.';
    return;
  }
  message.textContent = 'Loading post…';
  try {
    const post = await getPost(id);
    postContainer.replaceChildren(createPostCard(post));
    message.textContent = '';
  } catch (error) {
    message.textContent = error.message;
  }
}

if (requireUser()) {
  showPost();
}
