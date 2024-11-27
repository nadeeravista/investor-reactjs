import React, { useState, ChangeEvent } from 'react';
import { Button } from './Button';
import { TextInput } from './TextInput';
import { Label } from './Label';
import { useMutation } from '@tanstack/react-query';
import { loginQuery } from '../queries/auth';
import { useAuth } from '@context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  return useMutation({
    mutationFn: loginQuery,
  });
};

/**
 * LoginScreen component to display login form
 * @component
 * This uses normal onChange based form handling
 */
export const Login = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsEmailValid(!!email);
    setIsPasswordValid(!!password);

    if (email && password) {
      loginMutation.mutate(
        { email, password },
        {
          onSuccess: (data) => {
            if (data['accessToken']) {
              setToken(data['accessToken']);
              console.log(data['accessToken']);
              console.log('Login successful');
              navigate('/dashboard');
            }
          },
          onError: () => {
            console.error('Login failed:');
          },
        }
      );
      // console.log(useAuth().token);
      console.log('Form submitted');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100 md:bg-white">
      <div className="bg-blue-100 w-full md:w-1/2 lg:w-1/3 p-4 rounded-md">
        <div className="mb-2 text-4xl">Login</div>
        <form
          onSubmit={handleSubmit}
          className="md:grid grid-cols-3 gap-2 mb-2"
        >
          <Label text="Email" />
          <div className="col-span-2 mb-4 md:mb-0">
            <TextInput
              id="email"
              name="email"
              placeHolder="Enter email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              error={isEmailValid ? '' : 'Invalid email'}
            />
          </div>
          <Label text="Password" />
          <div className="col-span-2 mb-4 md:mb-0">
            <TextInput
              id="password"
              name="password"
              placeHolder="Enter password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              error={isPasswordValid ? '' : 'Invalid password'}
            />
          </div>
          <Button text="Submit" id="login" name="login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
