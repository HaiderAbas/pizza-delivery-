import React from "react";

// interface to declare all our prop types
interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  size?: string; 
  disabled?: boolean;
  dark?: boolean;
}

// button component, consuming props
const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = "default",
  size = "xl",
  disabled,
  dark,
  ...rest
}) => {
  return (
    <button
      className={`text-${size} border border-2 border=` + (disabled ? " disabled" : "") + (dark ? " bg-gray-600" : "")}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
