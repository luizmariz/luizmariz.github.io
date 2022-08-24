export function formatTimestamp(date, readTime) {
  const options = { locale: 'pt-br', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = (new Date(`${date}T00:00:00.000`).toLocaleDateString('pt-br', options));

  return `${dateString} · Leitura de ${Math.ceil(readTime)} min`;
}
