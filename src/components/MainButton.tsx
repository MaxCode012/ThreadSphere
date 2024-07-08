"use client";

import { LoaderIcon } from "lucide-react";
import { useFormStatus } from "react-dom";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const MainButton = ({ children, className, ...props }: ButtonProps) => {
  const buttonClasses = `disabled:flex disabled:justify-center  disabled:gap-2 dark:bg-main bg-black text-white rounded-md px-10 py-2 hover:shadow-md dark:hover:shadow-shadowCol/60 transition-shadow duration-200 ${className}`;

  const { pending } = useFormStatus();

  return (
    <button className={buttonClasses} disabled={pending} {...props}>
      {pending && <LoaderIcon className="animate-spin" />}
      {children}
    </button>
  );
};

export default MainButton;
