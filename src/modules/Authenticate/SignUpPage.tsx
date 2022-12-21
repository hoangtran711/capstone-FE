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
        <span className="title">Register</span>
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
        <TextField
          fullWidth
          className="text-field"
          label="Repeat Password"
          type="password"
        />
        <LoadingButton
          className="authenticate-button"
          variant="contained"
          fullWidth
        >
          Register
        </LoadingButton>
        <span className="redirect">
          Already have an account? <Link to="/sign-in">Login</Link>
        </span>
      </div>
    </Wrapper>
  );
};

export default SignInPage;
