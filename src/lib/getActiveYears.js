export default todos => {
  const activeYears = {};

  todos.forEach(todo => {
    const year = todo.dDay.getFullYear();
    activeYears[year] = true;
  });

  return activeYears;
};
