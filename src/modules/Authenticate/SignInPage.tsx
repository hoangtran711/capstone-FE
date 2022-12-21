import React from 'react';
import { Wrapper } from './Authenticate.styled';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <Wrapper>
      <img
        className="logo"
        src={require('assets/logo/primary-logo.png')}
        alt="Logo"
      />
      <div className="form">
        <span className="title">Login</span>
        <span className="subtitle">Access to our dashboard</span>
        <TextField
          fullWidth
          className="text-field"
          label="Email"
          type="email"
        />
        <TextField
          fullWidth
          className="text-field"
          label="Password"
          type="password"
        />
        <span className="forgot">Forgot Password?</span>
        <LoadingButton
          className="authenticate-button"
          variant="contained"
          fullWidth
        >
          Login
        </LoadingButton>
        <span className="redirect">
          Don&apos;t have an account yet? <Link to="/sign-up">Register</Link>
        </span>
      </div>
    </Wrapper>
  );
};

export default SignInPage;
