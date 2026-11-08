export function createProfileHeader(profile) {
  const header = document.createElement('section');
  header.className = 'card';

  if (profile.avatar?.url) {
    const avatar = document.createElement('img');
    avatar.className = 'avatar';
    avatar.src = profile.avatar.url;
    avatar.alt = profile.avatar.alt || profile.name;
    header.append(avatar);
  }

  const name = document.createElement('h1');
  name.textContent = profile.name;
  header.append(name);

  if (profile.bio) {
    const bio = document.createElement('p');
    bio.textContent = profile.bio;
    header.append(bio);
  }

  const stats = document.createElement('p');
  stats.textContent = `Posts: ${profile._count.posts} · Followers: ${profile._count.followers} · Following: ${profile._count.following}`;
  header.append(stats);

  return header;
}
