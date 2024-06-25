interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const MainButton = ({ children, className, ...props }: ButtonProps) => {
  const buttonClasses = `bg-main rounded-md px-10 py-2 hover:shadow-md hover:shadow-shadowCol/60 transition-shadow duration-200 ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default MainButton;
