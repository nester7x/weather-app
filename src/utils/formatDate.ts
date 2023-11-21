function formatDate(inputDate?: string) {
  if (!inputDate) return '';
  // Parse the input date
  const parsedDate = new Date(inputDate);

  // Extract components from the parsed date
  const hours = String(parsedDate.getHours()).padStart(2, '0');
  const minutes = String(parsedDate.getMinutes()).padStart(2, '0');
  const dayOfWeek = parsedDate.toLocaleDateString('en-Us', { weekday: 'long' });
  const dayOfMonth = parsedDate.getDate();
  const month = parsedDate.toLocaleDateString('en-Us', { month: 'short' });
  const year = String(parsedDate.getFullYear()).substring(2);

  // Format the date string
  return `${hours}:${minutes} - ${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
}

export default formatDate;
