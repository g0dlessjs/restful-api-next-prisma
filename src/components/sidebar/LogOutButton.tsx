"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import { IoLogIn, IoLogOut, IoShieldOutline } from "react-icons/io5";

export const LogOutButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button className="px-4 py-3 flex items-center space-x-4 rounded-xl text-slate-400 bg-slate-800/50 border border-slate-700/50 w-full transition-all">
        <IoShieldOutline className="animate-spin text-xl" />
        <span className="font-medium">Espere...</span>
      </button>
    );
  }

  if (status === "unauthenticated") {
    return (
      <button
        onClick={() => signIn()}
        className="px-4 py-3 flex items-center space-x-4 rounded-xl text-slate-300 bg-slate-800/50 border border-slate-700/50 hover:bg-sky-500/10 hover:border-sky-500/50 hover:text-sky-400 transition-all group w-full"
      >
        <IoLogIn className="text-xl" />
        <span className="font-medium text-inherit">Ingresar</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-3 flex items-center space-x-4 rounded-xl text-slate-300 bg-slate-800/50 border border-slate-700/50 hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400 transition-all group w-full"
    >
      <IoLogOut className="text-xl" />
      <span className="font-medium text-inherit">Salir</span>
    </button>
  );
};
