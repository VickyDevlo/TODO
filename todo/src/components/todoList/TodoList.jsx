import { useContext } from "react";
import NoTaskTemplate from "../noTaskTemplate/NoTaskTemplate";
import TodoItem from "../todoItem/TodoItem";
import { AppContext } from "../../context/AppContext";
import TodoSkeleton from "../skeleton/TodoSkeleton";

const TodoList = () => {
  const { todos, editTodo, removeTodo, toggleComplete, isLoading } =
    useContext(AppContext);

  if (todos?.length === 0) {
    return <NoTaskTemplate />;
  }
  if (isLoading) {
    return <TodoSkeleton />;
  }

  return (
    <>
      <div
        className={`space-y-2 ${todos.length ? "sm:px-2 overflow-y-auto h-[calc(100vh-335px)] sm:h-[calc(100vh-423px)]" : ""} `}
      >
        {todos?.map((todo, i) => (
          <TodoItem
            key={i}
            i={i}
            todo={todo}
            editTodo={editTodo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
