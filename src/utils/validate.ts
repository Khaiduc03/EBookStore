import React from 'react';
import {useAppDispatch} from '../hooks';
import {AuthActions} from '../redux';
import {showToastError} from './toast';

export const isValidEmail = (email: string) => {
  if (email === '') {
    return false;
  }
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
  return password.length >= 6;
};
export const comparePassword = (password: string, confirmPassword: string) => {
  return password === confirmPassword;
};

export const dispatch = useAppDispatch();
export const [credentials, setCredentials] = React.useState<{
  email: string;
  password: string;
  comfirmPassword: string;
}>({
  email: '',
  password: '123456',
  comfirmPassword: '123456',
});

export const [inputErrors, setInputErrors] = React.useState<{
  email: boolean;
  password: boolean;
  comfirmPassword: boolean;
}>({
  email: false,
  password: false,
  comfirmPassword: false,
});

export const handleCreateAccount = async () => {
  const emailIsValid = isValidEmail(credentials.email);
  const passwordIsValid = isValidPassword(credentials.password);
  const comfirmPasswordIsValid = comparePassword(
    credentials.password,
    credentials.comfirmPassword,
  );
  setInputErrors({
    email: !emailIsValid,
    password: !passwordIsValid,
    comfirmPassword: !comfirmPasswordIsValid,
  });
  if (
    credentials.email.length === 0 ||
    credentials.password.length === 0 ||
    credentials.comfirmPassword.length === 0
  ) {
    showToastError('Please enter full information');

    return;
  }

  if (!emailIsValid) {
    showToastError('Please enter the correct email format');
    return;
  }
  if (!comfirmPasswordIsValid) {
    showToastError('Password must be more than 6 characters');
    return;
  }
  if (!passwordIsValid) {
    showToastError('Confirm password does not match');
    return;
  }

  dispatch(
    AuthActions.handleCreateAccount({
      email: credentials.email,
      password: credentials.password,
    }),
  );
};

export const [checked, setChecked] = React.useState<boolean>(false);

export const toggleCheckbox = () => setChecked(!checked);
