export default (todos, year, month) => {
  const activeDays = {};
  const filtered = todos
    .filter(todo => todo.dDay.getFullYear() === year)
    .filter(todo => todo.dDay.getMonth() + 1 === month);

  filtered.forEach(todo => {
    let day = todo.dDay.getDate();
    activeDays[day] = true;
  });

  return activeDays;
};
