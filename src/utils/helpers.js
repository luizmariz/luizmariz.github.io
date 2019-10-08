export function formatDate(date, lang) {
  date = new Date(date);
  return date.toLocaleDateString([lang], { day: 'numeric', month: 'long', year: 'numeric' });
}