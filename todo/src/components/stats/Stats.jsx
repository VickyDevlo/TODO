import { Zap, CircleCheckBig } from "lucide-react";

const Stats = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="backdrop-blur-2xl bg-linear-to-br from-violet-500/20 to-purple-500/20 rounded-2xl border border-violet-400/30 p-3 sm:p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex items-center gap-1 sm:gap-2 mb-1">
            <Zap size={16} className="shrink-0 text-violet-400" />
            <span className="text-violet-300 text-xs font-semibold">Total</span>
          </div>
          <span className="text-xl sm:text-2xl text-white font-black">{0}</span>
        </div>

        <div className="backdrop-blur-2xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-400/50 p-3 sm:p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex items-center gap-1 sm:gap-2 mb-1">
            <div className="w-4 h-4 rounded-full border-2 border-blue-400 shrink-0"></div>
            <span className="text-violet-300 text-xs font-semibold">
              Active
            </span>
          </div>
          <span className="text-xl sm:text-2xl text-white font-black">{0}</span>
        </div>

        <div className="backdrop-blur-2xl bg-linear-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl border border-emerald-400/50 p-3 sm:p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="flex items-center gap-1 sm:gap-2 mb-1 text-emerald-400">
            <CircleCheckBig size={16} className="shrink-0 " />
            <span className="text-xs font-semibold">Done</span>
          </div>
          <span className="text-xl sm:text-2xl text-white font-black">{0}</span>
        </div>
      </div>
    </>
  );
};

export default Stats;
