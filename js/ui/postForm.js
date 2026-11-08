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
