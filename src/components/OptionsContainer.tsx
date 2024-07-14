import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

interface OptionsContainerProps {
  dropdownRef: React.RefObject<HTMLDivElement>;
}

export default function OptionsContainer({
  dropdownRef,
}: OptionsContainerProps) {
  return (
    <div
      ref={dropdownRef}
      className="absolute lg:right-[-40px] right-0 mt-36 lg:mt-28 w-48 dark:bg-container bg-white shadow-lg rounded-lg py-2 z-50"
    >
      <button className="block w-full text-left px-4 py-2 dark:text-white text-black dark:hover:bg-hover hover:bg-gray-200">
        <ThemeSwitch />
      </button>
    </div>
  );
}
