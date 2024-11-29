import React from 'react';
import { useGetApiEntrepreneurialGoals } from '../queries/entrepreneurial-goals';
import { Button } from '@components/Button';
import { Card } from '@components/Card';
import { useToastMessage } from '@context/ToastMessageContext';

export const DashboardScreen = () => {
  const { data, isLoading } = useGetApiEntrepreneurialGoals();
  const toast = useToastMessage();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-primary p-2 h-screen">
      <div className="text-3xl mb-4">Dashboard</div>
      <div className="text-lg mb-4">Entrepreneur Goals</div>
      <Card variant="primary">
        <div className="mb-4">
          {data?.map((item, key) => {
            return (
              <div key={key}>
                {key}:{item.title}
              </div>
            );
          })}
        </div>
        <Button
          text="Add Goal"
          onClick={() => toast.addToast('Goal added successfully')}
        />
      </Card>
    </div>
  );
};
