import Animate from "./components/animate/Animate";
import Header from "./components/header/Header";
import Stats from "./components/stats/Stats";
import Input from "./components/input/Input";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-950 via-purple-950 to-pink-950 p-3 sm:p-6 relative overflow-hidden">
      <Animate />
      <div className="max-w-3xl mx-auto relative z-10">
        <Header />
        <Stats />
        <Input />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
