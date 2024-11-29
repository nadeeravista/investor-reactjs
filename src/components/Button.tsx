import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BaseProps } from '@custom-types/BaseProps';

interface ButtonProps
  extends BaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
export const Button = ({
  text,
  id,
  name,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      id={`btn-${id}`}
      name={`btn-${name}`}
      {...props}
      className={twMerge('button-primary', className)}
    >
      {text}
    </button>
  );
};
