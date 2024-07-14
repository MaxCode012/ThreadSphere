import Image from "next/image";
import MainButton from "./MainButton";
import LogoutButton from "./LogOutButton";
import { getUser } from "@/lib/lucia";

export default async function ProfileCard() {
  const user = await getUser();

  return (
    <aside className="md:w-[250px] w-full mt-2 border dark:border-none dark:bg-container rounded-lg sticky top-0 h-fit space-y-2 px-1">
      <div className="mt-2">
        <Image
          className="m-auto"
          src="/no_avatarimg.png"
          width={45}
          height={45}
          alt="no avatar"
        />
      </div>
      <div className="space-y-7">
        <div className="flex flex-col justify-center items-center">
          <h2>{user?.name}</h2>
          <p className="text-sm text-gray-400">{user?.email}</p>
        </div>
        <div className="space-y-3 pb-3">
          <MainButton className="w-full">Edit profile</MainButton>
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
}
