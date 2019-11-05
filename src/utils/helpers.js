export function formatTimestamp(date, readTime, lang = 'pt-br') {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date;
  }

  date = new Date(date);

  const args = [
    lang,
    { day: 'numeric', month: 'long', year: 'numeric' }
  ].filter(Boolean);

  const localeString = date.toLocaleDateString(...args);
  const timeToRead = Math.ceil(readTime);

  return `${localeString} · Leitura de ${timeToRead} min`;
}
