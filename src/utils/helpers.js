export function formatTimestamp(date, readTime, lang = 'pt-br') {
  const dateObj = new Date(date);
  const args = { day: 'numeric', month: 'long', year: 'numeric' };
  const localeString = dateObj.toLocaleDateString([lang], args);
  const timeToRead = Math.ceil(readTime);

  return `${localeString} · Leitura de ${timeToRead} min`;
}
