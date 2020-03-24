export default date => {
  if (date === '') return '';

  const [year, month, day, hour, minute] = [
    date.getFullYear(),
    `${date.getMonth() + 1}`.padStart(2, 0),
    `${date.getDate()}`.padStart(2, 0),
    `${date.getHours()}`.padStart(2, 0),
    `${date.getMinutes()}`.padStart(2, 0),
  ];

  return `${year}-${month}-${day} ${hour}:${minute}`;
};
