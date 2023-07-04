export const getFormattedDate = (date) => {
  const options = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };
  return new Intl.DateTimeFormat('en-En', options).format(new Date(date));
};

export const fbTimestampToDate = (timestamp) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Date(timestamp * 1000).toLocaleString('en-En', options);
};
