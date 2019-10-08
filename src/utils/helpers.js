export function formatTimestamp(date, lang, readTime) {
  date = new Date(date);
  const args = { day: 'numeric', month: 'long', year: 'numeric' };
  console.log('oi');
  return `${date.toLocaleDateString([lang], args)} · Leitura de ${Math.ceil(readTime)} min`;
}