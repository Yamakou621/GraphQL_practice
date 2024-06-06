import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Auth';
import LoginForm from './LoginForm';

const LOGIN_USER = gql`
  mutation Login($loginUserInput: LoginUserInput!) {
    login(loginUserInput: $loginUserInput) {
      access_token
      refresh_token
      user {
        id
        email
        name
      }
    }
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [login] = useMutation(LOGIN_USER);
  const navigate = useNavigate();
  const { login: loginUser } = useAuth();

  const validate = () => {
    let isValid = true;
    if (!email) {
      setEmailError('メールアドレスは必須です');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('パスワードは必須です');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    try {
      const { data } = await login({
        variables: {
          loginUserInput: { email, password }
        }
      });
      console.log('User logged in:', data);
      loginUser();
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <LoginForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      emailError={emailError}
      passwordError={passwordError}
    />
  );
};

export default Login;
