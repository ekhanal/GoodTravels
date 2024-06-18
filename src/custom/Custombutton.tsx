interface ButtonProps {
  title: string;
  onClick?: () => unknown;
  disabled?: boolean;
  styles?: string;
  type?: 'submit' | 'button' | undefined;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  disabled,
  styles,
  type,
}) => {
  return (
    <button
      type={type}
      className={`w-full cursor-pointer rounded bg-[#6366f2] p-4 outline-none transition hover:bg-opacity-90 ${styles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
