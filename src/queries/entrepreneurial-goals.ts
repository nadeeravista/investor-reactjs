import { DefaultService } from '../api-client/index';
import { useQuery } from '@tanstack/react-query';

export const useGetApiEntrepreneurialGoals = () => {
  return useQuery({
    queryKey: [DefaultService.getApiEntrepreneurialGoals.name],
    queryFn: async () => DefaultService.getApiEntrepreneurialGoals(),
  });
};
