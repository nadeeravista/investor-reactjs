import React from 'react';
import { useAuth } from '@context/AuthContext';

export const DashboardScreen = () => {
  const { token } = useAuth();

  return (
    <div>
      <h1>{token}</h1>
    </div>
  );
};
