export default (todos, year, month, day) => {
  const activeHours = {};
  const filtered = todos
    .filter(todo => todo.dDay.getFullYear() === year)
    .filter(todo => todo.dDay.getMonth() + 1 === month)
    .filter(todo => todo.dDay.getDate() === day);

  filtered.sort((a, b) => (a.dDay < b.dDay ? -1 : a.dDay > b.dDay ? 1 : 0));
  filtered.forEach(todo => {
    let hour = todo.dDay.getHours();
    if (!activeHours[hour]) {
      activeHours[hour] = [todo];
    } else {
      activeHours[hour].push(todo);
    }
  });

  return activeHours;
};
