const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className="container">
      <form>
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Add a new to-do item"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </div>
        </div>
        <button className="button is-primary" type="submit">
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
