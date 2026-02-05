const InputSkeleton = () => {
  return (
    <div
      className="backdrop-blur-2xl bg-white/5 rounded-2xl mb-4 shadow-2xl
      border border-white/10 p-2 sm:p-3 animate-pulse"
    >
      <div className="flex flex-wrap gap-2">
        {/* Input placeholder */}
        <div
          className="flex-1 px-3 py-3 sm:px-4 sm:py-3 rounded-xl
          bg-white/10 border border-white/5"
        />

        {/* Button placeholder */}
        <div
          className="h-8 sm:h-10.5 max-sm:w-full px-4 rounded-xl
          bg-white/20"
        />
      </div>
    </div>
  );
};

export default InputSkeleton;
