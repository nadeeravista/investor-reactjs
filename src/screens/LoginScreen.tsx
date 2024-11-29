import React, { useState, ChangeEvent } from 'react';
import { Button } from '../components/Button';
import { TextInput } from '../components/TextInput';
import { Label } from '../components/Label';
import { useLogin } from '../queries/auth';
import { useAuth } from '@context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';

/**
 * LoginScreen component to display login form
 * @component
 * This uses normal onChange based form handling
 */
export const LoginScreen = () => {
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
    <div className="flex justify-center items-center h-screen bg-primary md:bg-white">
      <Card variant="secondary" className="w-full md:w-1/2 lg:w-1/3">
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
      </Card>
    </div>
  );
};

export default LoginScreen;
