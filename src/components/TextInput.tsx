import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BaseProps } from '@custom-types/BaseProps';

interface TextInputProps
  extends BaseProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  value: string;
}

export const TextInput = ({
  id,
  name,
  value,
  error,
  placeHolder,
  className,
  ...props
}: TextInputProps) => {
  return (
    <>
      <input
        id={id}
        name={name}
        placeholder={placeHolder}
        className={twMerge('w-full rounded-md p-2 border', className)}
        value={value}
        {...props}
      />
      <div className="text-error">{error}</div>
    </>
  );
};
