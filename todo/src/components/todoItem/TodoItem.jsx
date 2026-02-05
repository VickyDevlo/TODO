import { Check, Edit2, Save, Trash2, X } from "lucide-react";
import { useState } from "react";

const TodoItem = ({ i, todo, editTodo, removeTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditedText, setIsEditedText] = useState(todo.text);

  const startEdit = () => {
    setIsEditedText(todo.text);
    setIsEditing(true);
  };

  const saveEdit = () => {
    if (!isEditedText.trim()) return;
    editTodo(todo.id, isEditedText);
    setIsEditing(false);
    setIsEditedText("");
  };
  
  const cancelEdit = () => {
    setIsEditedText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") cancelEdit();
  };

  return (
    <div
      className={`backdrop-blur-2xl bg-white/5 hover:bg-white/10 rounded-xl
    p-3 flex items-center gap-3 border border-white/10 transition-all duration-300
    hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10  ${todo?.completed ? "opacity-50" : ""}`}
      style={{ animation: `slideIn 0.4s ease-out ${i * 0.05}s backwards` }}
    >
      {!isEditing && (
        <button
          onClick={() => toggleComplete(todo?.id)}
          className={`shrink flex items-center justify-center w-6 h-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95
           ${
             todo?.completed
               ? "bg-linear-to-br from-emerald-400 to-teal-500 border-emerald-400 shadow-lg shadow-emerald-400/50"
               : "border border-white/30 hover:bg-violet-500/20 hover:border-violet-400"
           }`}
        >
          {todo?.completed && (
            <Check size={16} className="text-white font-bold" />
          )}
        </button>
      )}

      {isEditing ? (
        <>
          <input
            type="text"
            value={isEditedText}
            onChange={(e) => setIsEditedText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 w-full px-3 py-1.5 bg-white/10 placeholder-white/10 
            rounded-lg font-medium text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            autoFocus
          />
        </>
      ) : (
        <span
          onClick={() => toggleComplete(todo?.id)}
          className={`flex-1 font-medium text-sm cursor-pointer transition-all duration-300 
          ${todo?.completed ? "line-through text-white/40" : "text-white"}`}
        >
          {todo?.text}
        </span>
      )}

      <div className="flex gap-1 transition-all duration-300">
        {isEditing ? (
          <>
            <button
              onClick={saveEdit}
              className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30
          cursor-pointer hover:bg-emerald-500 hover:text-white transform hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <Save size={14} />
            </button>
            <button
              onClick={cancelEdit}
              className="flex items-center justify-center w-7 h-7 rounded-lg
               bg-white/10 text-white/60 cursor-pointer hover:bg-white/20 hover:text-white transform hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <X size={14} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={startEdit}
              className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30
          cursor-pointer hover:bg-blue-500 hover:text-white transform 
          hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <Edit2 size={14} />
            </button>
            <button
              onClick={() => removeTodo(todo?.id)}
              className="flex items-center justify-center w-7 h-7 rounded-lg
               bg-rose-300/10 text-rose-300 cursor-pointer hover:bg-rose-500 hover:text-white border border-rose-500/30 transform 
               hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <Trash2 size={14} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
