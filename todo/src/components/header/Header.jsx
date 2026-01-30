import { Sparkles, TrendingUp } from "lucide-react";
import ProgressBar from "../progressBar/ProgressBar";

const Header = () => {
  return (
    <>
      <div
        className="backdrop-blur-2xl bg-white/5 rounded-3xl  mb-4 shadow-2xl
         border border-white/10 p-3 sm:p-6"
      >
        <div className="flex items-center justify-between mb-4">
          {/* left */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="w-12 h-12 bg-linear-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles size={24} className="text-white " />
              </span>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping" />
            </div>
            <div className="">
              <h1 className="text-md sm:text-3xl font-black text-white">TaskFlow</h1>
              <p className="text-[10px] sm:text-xs text-purple-300">Productivity Reimagined</p>
            </div>
          </div>

          {/* right */}
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 text-white font-bold bg-linear-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 rounded-full whitespace-nowrap">
            <TrendingUp size={16} className="text-emerald-400" />
            <span className="text-xs sm:text-sm">{0} Active</span>
          </div>
        </div>

        {/* ProgressBar */}
        <div className="relative">
          <ProgressBar progress={100} />
        </div>
      </div>
    </>
  );
};

export default Header;
