export default todos => Math.max(...todos.map(todo => todo.id)) + 1;
