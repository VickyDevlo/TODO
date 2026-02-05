import { Plus } from "lucide-react";
import { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import InputSkeleton from "../skeleton/InputSkeleton";

const Input = () => {
  const { inputText, setInputText, addTodo, isLoading } =
    useContext(AppContext);

  const inputRef = useRef(null);

  if (isLoading) {
    return <InputSkeleton />;
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <div
        className="backdrop-blur-2xl bg-white/5 rounded-2xl mb-4 shadow-2xl
         border border-white/10 p-2 sm:p-3 hover:bg-white/10 transition-all duration-300"
      >
        <div className="flex flex-wrap gap-2">
          <input
            ref={inputRef}
            type="text"
            placeholder="What's on your mind?"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={onKeyPress}
            className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-white/10 text-white 
          placeholder-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 font-medium text-sm border border-white/5 backdrop-blur-xl transition-all"
          />
          <button
            onClick={addTodo}
            className="bg-linear-to-br from-violet-500 via-purple-500
             to-fuchsia-500 rounded-xl max-sm:w-full px-3 py-2 sm:px-4 sm:py-2 text-sm flex items-center justify-center gap-1 text-white font-semibold cursor-pointer hover:scale-105 focus:outline-none active:scale-95 transition-all duration-300"
          >
            <Plus size={14} /> Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
