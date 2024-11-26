import { DefaultService } from '../api-client/index';

export const loginQuery = async (data: { email: string; password: string }) => {
  return await DefaultService.postApiAuthLogin(data);
};
