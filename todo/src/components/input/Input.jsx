import { Plus } from "lucide-react";
import React from "react";

const Input = () => {
  return (
    <>
      <div
        className="backdrop-blur-2xl bg-white/5 rounded-2xl mb-4 shadow-2xl
         border border-white/10 p-2 sm:p-3 hover:bg-white/10 transition-all duration-300"
      >
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-white/10 text-white 
          placeholder-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 font-medium text-sm border border-white/5 backdrop-blur-xl transition-all"
          />
          <button
            className="bg-linear-to-br from-violet-500 via-purple-500
             to-fuchsia-500 rounded-xl max-sm:w-full px-3 py-2 sm:px-4 sm:py-2 text-sm flex items-center justify-center gap-1 text-white font-semibold cursor-pointer hover:scale-105 focus:outline-none active:scale-95 transition-all duration-300"
          >
            <Plus size={16} />
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
