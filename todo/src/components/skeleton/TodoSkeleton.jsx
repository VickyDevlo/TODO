const TodoSkeleton = () => {
  return (
    <div className="space-y-3">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="backdrop-blur-2xl bg-white/5 rounded-xl
          p-3 flex items-center gap-3 border border-white/10
          animate-pulse"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {/* Checkbox */}
          <div className="w-6 h-6 rounded-lg bg-white/20" />

          {/* Text */}
          <div className="flex-1 space-y-2">
            <div className="h-3 w-1/2 rounded bg-white/10" />
          </div>

          {/* Actions */}
          <div className="flex gap-1">
            <div className="w-7 h-7 rounded-lg bg-white/20" />
            <div className="w-7 h-7 rounded-lg bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoSkeleton;
