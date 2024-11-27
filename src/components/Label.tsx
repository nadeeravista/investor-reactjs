import React from 'react';
import { BaseProps } from '@custom-types/BaseProps';
import { twMerge } from 'tailwind-merge';

type LabelProps = BaseProps;

export const Label = ({ text, className }: LabelProps) => {
  return <div className={twMerge('mb-2 md:mb-0', className)}>{text}</div>;
};
