import React from "react";

interface ButtonProps {
  size: string;
  variant: string;
  children: React.ReactNode;
}

export function Button({ size, variant, children }: ButtonProps) {
  return (
    <button className={`btn-${size} btn-${variant} p-2 bg-blue text-white rounded`}>
      {children}
    </button>
  );
}