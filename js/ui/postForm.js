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
