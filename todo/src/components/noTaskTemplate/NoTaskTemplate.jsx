import { WandSparkles } from "lucide-react";

const NoTaskTemplate = () => {
  return (
    <div className="backdrop-blur-2xl bg-white/5 text-center rounded-2xl border border-white/10 p-9">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-linear-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl shadow-lg">
        <WandSparkles size={32} className="text-violet-300" />
      </div>
      <p className="text-white/90 text-base font-semibold mb-1">
        No tasks yet!
      </p>
      <p className="text-white/50 text-sm">
        Create your first task to get started
      </p>
    </div>
  );
};

export default NoTaskTemplate;
