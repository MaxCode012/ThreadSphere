"use client";

import Link from "next/link";
import MainButton from "../MainButton";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { signin } from "@/actions/auth-actions";
import toast from "react-hot-toast";

export default function SignInForm() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    try {
      const response = await signin(form);
      if (response.success) {
        toast.success(response.message);
        router.push("/");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[275px] mx-auto lg:mx-0">
      <div className="flex flex-col gap-5 mb-9">
        <input
          type="email"
          placeholder="email"
          name="email"
          className="bg-transparent outline-none focus:outline-none border-b border-gray-200 focus:border-black transition:focus dark:focus:border-main duration-200"
        />
        <input
          type="password"
          name="password"
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
  );
}
