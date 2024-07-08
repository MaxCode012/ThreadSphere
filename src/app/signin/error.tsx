"use client";

import MainButton from "@/components/MainButton";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] dark:text-white p-4">
      <h1 className="text-4xl font-bold mb-4">ERROR</h1>
      <h2 className="text-2xl font-bold mb-6">{error.message}</h2>
      <MainButton onClick={() => reset()}>Try again</MainButton>
    </div>
  );
}
