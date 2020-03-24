export default (todos, year) => {
  const activeMonths = {};
  const filtered = todos.filter(todo => todo.dDay.getFullYear() === year);

  filtered.forEach(todo => {
    let month = todo.dDay.getMonth() + 1;
    activeMonths[month] = true;
  });

  return activeMonths;
};
