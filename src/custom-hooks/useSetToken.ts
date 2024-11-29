import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { OpenAPI } from '../api-client/core/OpenAPI';

// We are using openapi-typescript-codegen to generate the OpenAPI client
// Sets the token in the OpenAPI client
const useSetToken = () => {
  const { token } = useAuth();

  useEffect(() => {
    OpenAPI.TOKEN = token ? token : undefined;
  }, [token]);
};

export default useSetToken;
