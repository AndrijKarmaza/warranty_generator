export const formatDate = date => {
  if (!date) {
    return '';
  }
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(-2);
  const formatedData = day + '.' + month + '.' + year;
  return formatedData;
};
