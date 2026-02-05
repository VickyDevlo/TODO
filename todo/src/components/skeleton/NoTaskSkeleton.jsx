const NoTaskSkeleton = () => {
  return (
    <div
      className="backdrop-blur-2xl bg-white/5 text-center rounded-2xl
      border border-white/10 p-9 animate-pulse"
    >
      {/* Icon placeholder */}
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/20" />

      {/* Title placeholder */}
      <div className="h-4 w-32 mx-auto mb-2 rounded bg-white/30" />

      {/* Subtitle placeholder */}
      <div className="h-3 w-48 mx-auto rounded bg-white/20" />
    </div>
  );
};

export default NoTaskSkeleton;
