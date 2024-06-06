import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/Auth';
import SignupForm from './SignupForm';

const CREATE_USER = gql`
  mutation CreateUser($data: UserCreateInput!) {
    createUser(data: $data) {
      id
      name
      email
    }
  }
`;

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [register] = useMutation(CREATE_USER);
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

    if (!username) {
      setUsernameError('ユーザーネームは必須です');
      isValid = false;
    } else {
      setUsernameError('');
    }

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    try {
      const { data } = await register({
        variables: {
          data: { email, password, name: username }
        }
      });
      console.log('User registered:', data);
      loginUser();
      navigate('/home');
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (
    <SignupForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      username={username}
      setUsername={setUsername}
      handleSubmit={handleSubmit}
      emailError={emailError}
      passwordError={passwordError}
      usernameError={usernameError}
    />
  );
};

export default Signup;
