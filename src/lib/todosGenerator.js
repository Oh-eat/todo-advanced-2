export default count => {
  const todos = [];
  const today = new Date();
  const [year, month, day] = [
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  ];

  for (let i = 0; i < count; i++) {
    let randomDate =
      Math.floor(Math.random() * 50) * (Math.random() > 0.5 ? 1 : -1);
    let randomHour =
      Math.floor(Math.random() * 50) * (Math.random() > 0.5 ? 1 : -1);
    let todo = {
      id: i,
      title: `test ${i + 1}`,
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, ante at pharetra viverra, ligula ipsum hendrerit felis, sit amet placerat dui mi sed leo. Aenean est nisi, condimentum nec metus et, facilisis congue magna. Nam et ex leo. Mauris lectus est, sollicitudin id nunc eu, accumsan posuere justo. Ut tempor dignissim vestibulum. Duis consequat posuere dolor ac cursus. Suspendisse eu lobortis sapien. Nulla felis purus, vestibulum imperdiet sollicitudin ut, vestibulum vitae nulla.',
      dDay: new Date(year, month, day, randomHour, randomDate),
      deleted: false,
      createdAt: today,
    };
    todos.push(todo);
  }

  return todos;
};
