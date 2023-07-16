import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  textColor: string;
  bgColor: string;
  children: ReactNode;
};

const Button = ({ onClick, bgColor, textColor, children }: ButtonProps) => {
  return (
    <button style={{ background: bgColor, color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
