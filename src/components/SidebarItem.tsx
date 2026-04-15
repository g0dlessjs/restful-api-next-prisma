"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiBookmarkCheck } from "react-icons/ci";

interface Props {
  path: string;
  icon: React.ReactNode;
  title: string;
}

export const SidebarItem = ({ path, icon, title }: Props) => {
  const pathName = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`
          ${path === pathName ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400 shadow-lg" : ""}
          px-4 py-3 flex items-center space-x-4 rounded-xl text-slate-300 hover:bg-slate-700/50 hover:shadow-md transition-all group`}
      >
        {icon}
        <span className="group-hover:text-white-400 font-medium">{title}</span>
      </Link>
    </li>
  );
};
