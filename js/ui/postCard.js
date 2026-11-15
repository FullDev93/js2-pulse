/**
 * Builds a card element for one post.
 * @param {object} post - A post from the Noroff API, with its author
 * @returns {HTMLElement} The post card
 */
export function createPostCard(post) {
  const card = document.createElement('article');
  card.className = 'card';

  const header = document.createElement('div');
  header.className = 'card-header';

  if (post.author.avatar?.url) {
    const avatar = document.createElement('img');
    avatar.src = post.author.avatar.url;
    avatar.alt = post.author.avatar.alt || post.author.name;
    header.append(avatar);
  }

  const author = document.createElement('a');
  author.className = 'card-author';
  author.href = `profile.html?name=${encodeURIComponent(post.author.name)}`;
  author.textContent = post.author.name;

  const date = document.createElement('small');
  date.textContent = new Date(post.created).toLocaleDateString();

  header.append(author, date);

  const title = document.createElement('a');
  title.className = 'card-title';
  title.href = `post.html?id=${post.id}`;
  title.textContent = post.title;

  card.append(header, title);

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

  const footer = document.createElement('div');
  footer.className = 'card-footer';
  const comments = document.createElement('span');
  comments.textContent = `💬 ${post._count?.comments ?? 0}`;
  const reactions = document.createElement('span');
  reactions.textContent = `❤️ ${post._count?.reactions ?? 0}`;
  footer.append(comments, reactions);
  card.append(footer);

  return card;
}
