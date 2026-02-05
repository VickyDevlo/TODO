import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
const STORAGE_KEY = "todos";

const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // ADD TODO
  const addTodo = () => {
    if (!inputText.trim()) return;

    setTodos((prevTodos) => [
      { id: Date.now(), text: inputText, completed: false },
      ...prevTodos,
    ]);
    setInputText("");
  };

  // EDIT TODO
  const editTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  // TOGGLE TODO DONE
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // REMOVE COMPLETED TODO
  const removeCompletedTodo = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // REMOVE TODO
  const removeTodo = (id) => {
    setTodos(todos?.filter((todo) => todo?.id !== id));
  };

  const activeTodos = todos.filter((todo) => !todo?.completed).length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const progress =
    todos.length > 0
      ? Math.min(100, Math.max(0, (completedTodos / todos.length) * 100))
      : 0;

  // 🔥 Fake loading only for UX (Skeleton)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // smooth skeleton

    return () => clearTimeout(timer);
  }, []);

  // ✅ Save todos
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      console.log("LocalStorage save error:", e);
    }
  }, [todos]);

  return (
    <AppContext.Provider
      value={{
        todos,
        inputText,
        setInputText,
        addTodo,
        editTodo,
        toggleComplete,
        removeCompletedTodo,
        removeTodo,
        activeTodos,
        completedTodos,
        progress,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
