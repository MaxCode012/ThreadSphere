import MainButton from "@/components/MainButton";

import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="lg:px-60 px-11 lg:flex ">
      <div className="mt-24 space-y-[45px] lg:mr-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center lg:text-left">
          Hey, <br />
          Welcome back
        </h1>
        <form action="" className="max-w-[275px] mx-auto lg:mx-0">
          <div className="flex flex-col gap-5 mb-9">
            <input
              type="email"
              placeholder="email"
              className="bg-transparent outline-none focus:outline-none border-b border-gray-200 focus:border-black transition:focus dark:focus:border-main duration-200"
            />
            <input
              type="password"
              placeholder="password"
              className="bg-transparent outline-none focus:outline-none border-b border-gray-200 focus:border-black dark:focus:border-main transition:focus duration-200"
            />
          </div>
          <MainButton className="w-full lg:w-auto">Sign in</MainButton>
          <div className="text-sm dark:text-gray-300 text-gray-500 mt-6 flex justify-between">
            <p className="">Don&apos;t have an account?</p>
            <span className="text-black dark:text-main">
              <Link href="/signup">sign up</Link>
            </span>
          </div>
        </form>
      </div>
      <div className="mt-24 hidden lg:block">
        <Image src="/auth.svg" width={550} height={550} alt="auth image" />
      </div>
    </main>
  );
}
