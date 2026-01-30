import { Check, Edit2, Save, Trash2, X } from "lucide-react";

const TodoItem = ({ todo, i, isEditing }) => {
  return (
    <div
      className={`group backdrop-blur-2xl bg-white/5 hover:bg-white/10 rounded-xl
    p-3 flex items-center gap-3 border border-white/10 transition-all duration-300
    hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10  ${todo?.complete ? "opacity-50" : ""}`}
      style={{ animation: `slideIn 0.4s ease-out ${i * 0.05}s backwards` }}
    >
      <button
        className={`shrink items-center justify-center w-6 h-6 rounded-lg transition-all duration-300 transform hover:scale-110 active:scale-95 ${todo?.complete ? "bg-linear-to-br from-emerald-400 to-teal-500 border border-emerald-400 shadow-lg shadow-emerald-400/50" : "border border-white/30 hover:bg-violet-500/20 hover:border-violet-400"}`}
      >
        {todo?.complete ? (
          <Check size={14} className="text-white font-bold" />
        ) : (
          ""
        )}
      </button>

      {isEditing ? (
        <>
          <input
            type="text"
            className="flex-1 px-3 py-1.5 bg-white/10 placeholder-white/10 
            rounded-lg font-medium text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
            autoFocus
          />
        </>
      ) : (
        <span
          className={`flex-1 font-medium text-sm transition-all duration-300 
          ${todo?.complete ? "line-through text-white/40" : "text-white"}`}
        >
          {todo?.text}
        </span>
      )}
      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {isEditing ? (
          <>
            <button
              className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30
          cursor-pointer hover:bg-emerald-500 hover:text-white transform hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <Save size={14} />
            </button>
            <button
              className="flex items-center justify-center w-7 h-7 rounded-lg
               bg-white/10 text-white/60 cursor-pointer hover:bg-white/20 hover:text-white transform hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <X size={14} />
            </button>
          </>
        ) : (
          <>
            <button
              className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-500/20 text-blue-300 border border-blue-500/30
          cursor-pointer hover:bg-blue-500 hover:text-white transform 
          hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <Edit2 size={14} />
            </button>
            <button
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
