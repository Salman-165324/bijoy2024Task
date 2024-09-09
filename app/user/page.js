import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import LogoutBtn from "@/components/LogoutBtn";

const User = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <div className="flex flex-col items-center m-4 lg:mt-10">
      <h1 className="text-3xl my-2">Welcome, {session?.user?.name}</h1>

      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={72}
        height={72}
        className="rounded-full"
      />
      <LogoutBtn></LogoutBtn>
    </div>
  );
};

export default User;
