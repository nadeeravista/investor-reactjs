import React from 'react';
import { twMerge } from 'tailwind-merge';
import { BaseProps } from '@custom-types/BaseProps';

interface TextInputProps extends BaseProps {
  error?: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const TextInput = ({
  id,
  name,
  value,
  error,
  placeHolder,
  className,
  onChange,
  ...props
}: TextInputProps) => {
  return (
    <>
      <input
        id={id}
        name={name}
        placeholder={placeHolder}
        className={twMerge('w-full rounded-md p-2', className)}
        value={value}
        onChange={onChange}
        {...props}
      />
      <div className="text-error">{error}</div>
    </>
  );
};
