import { registerUser } from '../api/auth.js';

const form = document.querySelector('#register-form');
const message = document.querySelector('#message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const userData = Object.fromEntries(new FormData(form));

  try {
    await registerUser(userData);
    message.textContent = 'Account created! You can now log in.';
    form.reset();
  } catch (error) {
    message.textContent = error.message;
  }
});
