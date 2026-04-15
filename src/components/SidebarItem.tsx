import Link from "next/link";
import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";

export const SidebarItem = () => {
  return (
    <li>
      <Link
        href="/dashboard/rest-todos"
        className="px-4 py-3 flex items-center space-x-4 rounded-xl text-slate-300 hover:bg-slate-700/50 hover:shadow-md transition-all group"
      >
        <CiBookmarkCheck size={30} />
        <span className="group-hover:text-cyan-400 font-medium">
          Categories
        </span>
      </Link>
    </li>
  );
};
