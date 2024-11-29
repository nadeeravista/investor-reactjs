import { DefaultService } from '../api-client/index';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      return await DefaultService.postApiAuthLogin(data);
    },
  });
};
