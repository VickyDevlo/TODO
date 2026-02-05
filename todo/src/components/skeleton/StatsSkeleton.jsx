const StatsSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mb-4 animate-pulse">
      {/* TOTAL */}
      <div className="backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/10 p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 rounded-full bg-white/20" />
          <div className="h-3 w-12 rounded bg-white/20" />
        </div>
        <div className="h-7 w-3 rounded bg-white/30" />
      </div>

      {/* ACTIVE */}
      <div className="backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/10 p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 rounded-full bg-white/20" />
          <div className="h-3 w-12 rounded bg-white/20" />
        </div>
        <div className="h-7 w-3 rounded bg-white/30" />
      </div>

      {/* DONE */}
      <div className="backdrop-blur-2xl bg-white/5 rounded-2xl border border-white/10 p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 rounded-full bg-white/20" />
          <div className="h-3 w-10 rounded bg-white/20" />
        </div>
        <div className="h-7 w-3 rounded bg-white/30" />
      </div>
    </div>
  );
};

export default StatsSkeleton;
