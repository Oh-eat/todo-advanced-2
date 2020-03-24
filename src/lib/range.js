export default (count, startValue = 0) => {
  return [...Array(count).keys()].map(i => i + startValue);
};
