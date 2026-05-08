"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("Client Side");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8">
        {/* Header */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image
              src={
                session?.user?.image ??
                "https://avatars.githubusercontent.com/u/128999319?s=400&v=4"
              }
              alt="Profile picture"
              width={150}
              height={150}
              className="w-32 h-32 rounded-full object-cover ring-4 ring-cyan-400/40 shadow-xl"
            />

            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-400 border-4 border-slate-900" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-white tracking-tight">
            {session?.user?.name}
          </h1>

          <p className="text-slate-400 text-sm mt-1">{session?.user?.email}</p>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Info */}
        <div className="space-y-5">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <span className="text-xs uppercase tracking-widest text-cyan-400">
              User ID
            </span>

            <p className="text-white mt-2 break-all font-medium">
              {session?.user?.id}
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <span className="text-xs uppercase tracking-widest text-cyan-400">
              Roles
            </span>

            <div className="flex flex-wrap gap-2 mt-3">
              {session?.user?.roles?.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/20 text-cyan-300 text-sm font-medium"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <button className="w-full py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
