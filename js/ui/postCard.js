export function createPostCard(post) {
  const card = document.createElement('article');
  card.className = 'card';

  const author = document.createElement('a');
  author.href = `profile.html?name=${encodeURIComponent(post.author.name)}`;
  author.textContent = post.author.name;

  const date = document.createElement('small');
  date.textContent = new Date(post.created).toLocaleDateString();

  const title = document.createElement('a');
  title.className = 'card-title';
  title.href = `post.html?id=${post.id}`;
  title.textContent = post.title;

  card.append(author, date, title);

  if (post.body) {
    const body = document.createElement('p');
    body.textContent = post.body;
    card.append(body);
  }

  if (post.media?.url) {
    const image = document.createElement('img');
    image.src = post.media.url;
    image.alt = post.media.alt || post.title;
    card.append(image);
  }

  return card;
}
