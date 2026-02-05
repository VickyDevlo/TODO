const HeaderSkeleton = () => {
  return (
    <div
      className="backdrop-blur-2xl bg-white/5 rounded-3xl mb-4 shadow-2xl
      border border-white/10 p-3 sm:p-6 animate-pulse"
    >
      {/* Top Row */}
      <div className="flex items-center justify-between gap-2 mb-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl bg-white/20" />

          {/* Title */}
          <div className="space-y-2">
            <div className="h-4 sm:h-6 w-32 rounded bg-white/30" />
            <div className="h-3 w-24 rounded bg-white/20" />
          </div>
        </div>

        {/* Right pill */}
        <div className="h-8 w-24 rounded-full bg-white/20" />
      </div>

      {/* Progress bar skeleton */}
       <div className="animate-pulse">
      {/* Top labels */}
      <div className="flex justify-between items-center mb-2">
        <div className="h-3 w-16 rounded-full bg-white/20" />
        <div className="h-7 w-7 rounded-full bg-white/30" />
      </div>

      {/* Bar */}
      <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div className="absolute inset-0 w-1/3 bg-white/30 rounded-full" />
      </div>
    </div>
    </div>
  );
};

export default HeaderSkeleton;
