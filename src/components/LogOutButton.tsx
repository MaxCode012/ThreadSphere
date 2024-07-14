"use client";

import { logout } from "@/actions/auth-actions";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

const LogoutButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full hover:translate-x-1 bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600 rounded-md px-10 py-2 text-white dark:text-white transition:all duration-200"
      onClick={() => logout()}
    >
      {pending && <LoaderCircle />}
      Log out
    </button>
  );
};

export default LogoutButton;
