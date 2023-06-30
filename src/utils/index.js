export const getFormattedDate = (date) => {
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('en-En', options).format(new Date(date));
};
