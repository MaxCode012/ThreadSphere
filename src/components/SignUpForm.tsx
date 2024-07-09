"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signup } from "@/actions/auth-actions";
import MainButton from "@/components/MainButton";
import Link from "next/link";

export default function SignUpForm() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    try {
      const response = await signup(form);
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
          type="text"
          placeholder="username"
          name="name"
          required
          className="bg-transparent outline-none focus:outline-none border-b border-gray-200 focus:border-black dark:focus:border-main transition:focus duration-200"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          className="bg-transparent outline-none focus:outline-none border-b border-gray-200 focus:border-black dark:focus:border-main transition:focus duration-200"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          className="bg-transparent outline-none focus:outline-none border-b border-gray-200 focus:border-black dark:focus:border-main transition:focus duration-200"
        />
      </div>
      <MainButton className="w-full lg:w-auto">Sign up</MainButton>
      <div className="text-sm dark:text-gray-300 text-gray-500 mt-6 flex justify-between">
        <p className="">Already have an account?</p>
        <span className="dark:text-main text-black">
          <Link href="/signin">sign in</Link>
        </span>
      </div>
    </form>
  );
}
