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
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <span className="text-3xl mb-10 block text-center">Profile</span>
      </div>
      <div className="flex  flex-col items-center gap-15 justify-center">
        <Image
          src={session?.user?.image!}
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full"
        />
        <span className="text-3xl mb-5 text-center">{session?.user?.name}</span>
        <span className="text-3xl mb-5 text-center">
          {session?.user?.email}
        </span>
      </div>
    </div>
  );
}
