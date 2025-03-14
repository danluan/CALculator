import React from 'react';

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ type, children, onClick }: ButtonProps) {
  return (
    <button type={type}
      onClick={onClick}
      className="bg-dark-green hover:bg-light-green text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  )
}
