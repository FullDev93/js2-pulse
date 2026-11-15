/**
 * Reads the post form and returns the data the API expects.
 * @param {HTMLFormElement} form - The create or edit form
 * @returns {{title: string, body: string, media: object|null}} The post data
 */
export function readPostForm(form) {
  const data = new FormData(form);
  const mediaUrl = data.get('mediaUrl').trim();

  return {
    title: data.get('title').trim(),
    body: data.get('body').trim(),
    media: mediaUrl
      ? { url: mediaUrl, alt: data.get('mediaAlt').trim() }
      : null,
  };
}

export function fillPostForm(form, post) {
  form.elements.title.value = post.title;
  form.elements.body.value = post.body ?? '';
  form.elements.mediaUrl.value = post.media?.url ?? '';
  form.elements.mediaAlt.value = post.media?.alt ?? '';
}
