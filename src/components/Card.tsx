import React from 'react';
import classNames from 'classnames';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Card = ({ children, className, variant, ...props }: CardProps) => {
  const cardClass = classNames(
    'p-4 rounded-lg',
    {
      'bg-white': variant === 'primary',
      'bg-secondary': variant === 'primary',
      'bg-tertiary': variant === 'tertiary',
    },
    className
  );

  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
};
