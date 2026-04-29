import React from "react";
import {
  CiBellOn,
  CiChat1,
  CiMenuBurger,
  CiSearch,
  CiShoppingBasket,
} from "react-icons/ci";

export const TopMenu = () => {
  return (
    <div className="sticky z-10 top-0 h-16 border-b border-slate-700 bg-slate-900/80 backdrop-blur-lg lg:py-2.5">
      <div className="px-6 flex items-center justify-between space-x-4">
        <h5 className="text-2xl text-slate-200 font-semibold lg:block">
          Dashboard
        </h5>
        <button className="w-12 h-16 -mr-2 border-r border-slate-700 lg:hidden">
          <CiMenuBurger size={30} />
        </button>
        <div className="flex space-x-2">
          <div className="md:block">
            <div className="relative flex items-center text-slate-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-slate-600">
                <CiSearch />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-slate-200 outline-none border border-slate-700 bg-slate-800/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900/30 transition"
              />
            </div>
          </div>

          <button className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-700 bg-slate-800 hover:bg-cyan-900/30 hover:text-cyan-400 hover:border-cyan-800 transition-all md:hidden">
            <CiSearch />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-700 bg-slate-800 hover:bg-cyan-900/30 hover:text-cyan-400 hover:border-cyan-800 transition-all">
            <CiChat1 size={25} />
          </button>
          <button className="flex items-center justify-center rounded-xl p-2 border border-slate-700 bg-slate-800 hover:bg-cyan-900/30 hover:text-cyan-400 hover:border-cyan-800 transition-all relative">
            <span className="text-sm font-bold mr-2 text-white">10</span>
            <CiShoppingBasket size={25} className="text-white" />
            {/* <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span> */}
          </button>
        </div>
      </div>
    </div>
  );
};
