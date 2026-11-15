export function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(localStorage.getItem('user'));
}

/**
 * Gets the logged-in user, or sends the visitor to the login page.
 * @returns {object|null} The saved user, or null when not logged in
 */
export function requireUser() {
  const user = getUser();
  if (!user) {
    location.href = 'index.html';
  }
  return user;
}

export function logout() {
  localStorage.removeItem('user');
  location.href = 'index.html';
}
