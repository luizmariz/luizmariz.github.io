export function formatTimestamp (date, readTime, lang='pt-br') {
  date = new Date(date);
  const args = { day: 'numeric', month: 'long', year: 'numeric' };
  return `${date.toLocaleDateString([lang], args)} · Leitura de ${Math.ceil(readTime)} min`;
}