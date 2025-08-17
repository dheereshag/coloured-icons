import { isDevelopmentMode } from "@/lib/dev-utils";

const DevModeBanner = () => {
  if (!isDevelopmentMode()) return null;

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <span className="text-sm text-yellow-800 font-medium">
          Development Mode: Showing 5 icons per category
        </span>
      </div>
    </div>
  );
};

export default DevModeBanner;
