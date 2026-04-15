import React from "react";

export const WidgetItem = () => {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <div className="h-full py-8 px-6 space-y-6 rounded-2xl border border-slate-700 bg-slate-800/50 shadow-sm hover:shadow-lg hover:shadow-cyan-900/10 transition-shadow">
        <div>
          <h5 className="text-xl text-slate-300 text-center font-medium">
            Global Activities
          </h5>
          <div className="mt-2 flex justify-center gap-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              $23,988
            </h3>
            <div className="flex items-end gap-1 text-emerald-400">
              <svg
                className="w-3"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-semibold">2%</span>
            </div>
          </div>
          <span className="block text-center text-slate-400">
            Compared to last week $13,988
          </span>
        </div>
      </div>
    </div>
  );
};
