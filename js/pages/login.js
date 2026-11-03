import { loginUser } from '../api/auth.js';
import { saveUser } from '../utils/storage.js';

const form = document.querySelector('#login-form');
const message = document.querySelector('#message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const credentials = Object.fromEntries(new FormData(form));

  try {
    const user = await loginUser(credentials);
    saveUser(user);
    location.href = 'feed.html';
  } catch (error) {
    message.textContent = error.message;
  }
});
