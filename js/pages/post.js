import { requireUser } from '../utils/storage.js';
import { getPost, updatePost, deletePost } from '../api/posts.js';
import { createPostCard } from '../ui/postCard.js';
import { readPostForm, fillPostForm } from '../ui/postForm.js';

const message = document.querySelector('#message');
const postContainer = document.querySelector('#post');
const ownerActions = document.querySelector('#owner-actions');
const editForm = document.querySelector('#edit-form');
const deleteButton = document.querySelector('#delete-button');
const id = new URLSearchParams(location.search).get('id');
const user = requireUser();

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

    if (post.author.name === user.name) {
      fillPostForm(editForm, post);
      ownerActions.hidden = false;
    }
  } catch (error) {
    message.textContent = error.message;
  }
}

editForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    await updatePost(id, readPostForm(editForm));
    await showPost();
    message.textContent = 'Post updated.';
  } catch (error) {
    message.textContent = error.message;
  }
});

deleteButton.addEventListener('click', async () => {
  if (!confirm('Delete this post?')) {
    return;
  }
  try {
    await deletePost(id);
    location.href = 'feed.html';
  } catch (error) {
    message.textContent = error.message;
  }
});

if (user) {
  showPost();
}
