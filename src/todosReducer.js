
import Todo from './Todo';
const todosReducer = (todos = [], action) => {
  switch (action.type) {
    case 'CREATE_TODO':
    const id = todos.length+1;
    return [...todos, new Todo(id, action.description)];
    default:
    return todos;
  }
};

export default todosReducer;
