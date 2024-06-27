interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const MainButton = ({ children, className, ...props }: ButtonProps) => {
  const buttonClasses = `dark:bg-main bg-black text-white rounded-md px-10 py-2 hover:shadow-md dark:hover:shadow-shadowCol/60 transition-shadow duration-200 ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default MainButton;
