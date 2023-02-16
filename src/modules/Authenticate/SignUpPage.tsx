import React from 'react';
import { Wrapper } from './Authenticate.styled';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { useSignUp } from 'queries/useAuth';

const SignInPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatpass, setRepeatPass] = React.useState('');
  const register = () => {
    if (email && password && repeatpass) {
      if (password !== repeatpass) {
        toast.info('Password and Repeat Password does not match !');
        return;
      }
    } else {
      toast.info('Please fill all the fields for registering');
    }
  };

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
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          className="text-field"
          label="Password"
          type="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <TextField
          fullWidth
          className="text-field"
          label="Repeat Password"
          type="password"
          onChange={(e: any) => setRepeatPass(e.target.value)}
        />
        <LoadingButton
          className="authenticate-button"
          variant="contained"
          fullWidth
          onClick={() => register()}
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
