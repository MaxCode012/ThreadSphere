import Image from "next/image";
import MainButton from "./MainButton";
import LogoutButton from "./LogOutButton";
import { getUser } from "@/lib/lucia";
import Link from "next/link";

export default async function ProfileCard() {
  const user = await getUser();

  return (
    <aside
      className={`md:w-[250px] w-full mt-2 ${
        !user ? "pt-3" : "pt-0"
      } border dark:border-none dark:bg-container rounded-lg sticky top-0 h-fit space-y-2 px-1`}
    >
      {user && (
        <div className="mt-2">
          <Image
            className="m-auto"
            src="/no_avatarimg.png"
            width={45}
            height={45}
            alt="no avatar"
          />
        </div>
      )}
      <div className="space-y-7">
        {user && (
          <div className="flex flex-col justify-center items-center">
            <h2>{user ? user.name : "No name"}</h2>
            <p className="text-sm text-gray-400">
              {user ? user.email : "No email"}
            </p>
          </div>
        )}
        <div className="space-y-3 pb-3">
          {user ? (
            <>
              <Link
                href="/edit-profile"
                className="w-full block text-center disabled:flex disabled:justify-center  disabled:gap-2 dark:bg-main bg-black text-white rounded-md px-10 py-2  transition-all hover:translate-x-1 duration-200"
              >
                Edit profile
              </Link>
              <LogoutButton />
            </>
          ) : (
            <MainButton className="w-full px-0">
              <Link className="w-full block text-center" href="/signin">
                Sign in
              </Link>
            </MainButton>
          )}
        </div>
      </div>
    </aside>
  );
}
