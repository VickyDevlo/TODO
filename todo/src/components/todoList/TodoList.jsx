import NoTaskTemplate from "../noTaskTemplate/NoTaskTemplate";
import TodoItem from "../todoItem/TodoItem";

const TodoList = ({ todos = [] }) => {
  return (
    <div
      className={`space-y-2 ${todos.length ? "sm:px-2 overflow-y-auto h-[calc(100vh-335px)] sm:h-[calc(100vh-423px)]" : ""} `}
    >
      {todos.length === 0 ? (
        <NoTaskTemplate />
      ) : (
        todos.map((todo, i) => <TodoItem key={i} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;
