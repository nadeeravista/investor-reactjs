import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BaseProps } from '@types/BaseProps';

type ButtonProps = BaseProps;

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
      className={twMerge(
        'ext-center w-full bg-blue-400 text-white p-2 rounded-md',
        className
      )}
    >
      {text}
    </button>
  );
};
