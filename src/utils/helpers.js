export function formatTimestamp(date, readTime) {
  // TODO: some cute read time indicator
  return `${date} · Leitura de ${Math.ceil(readTime)} min`;
}
