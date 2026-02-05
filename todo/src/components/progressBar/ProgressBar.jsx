const ProgressBar = ({ progress }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/70 text-xs font-semibold">Progress</span>
        <span className="text-white font-bold text-sm">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="absolute inset-0 bg-linear-to-br from-emerald-400
           via-teal-400 to-cyan-400 rounded-full transition-all duration-700 
          ease-out shadow-lg"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
