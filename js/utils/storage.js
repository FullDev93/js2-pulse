export function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(localStorage.getItem('user'));
}

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
