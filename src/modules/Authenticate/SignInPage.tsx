import React from 'react';
import { Wrapper } from './Authenticate.styled';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Link, useHistory } from 'react-router-dom';
// import { useSignIn } from 'queries/useAuth';
// import { toast } from 'react-toastify';
import { singInThunk } from 'reducer';
// import { IAppDispatch } from 'app/store';
import { useAppDispatch } from 'app/store';

const SignInPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const dispatch = useAppDispatch();
  const login = () => {
    dispatch(singInThunk({ username: email, password: password }));
    history.push('/');
  };
  console.log(typeof password);
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
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          className="text-field"
          label="Password"
          type="password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <span className="forgot">Forgot Password?</span>
        <LoadingButton
          className="authenticate-button"
          variant="contained"
          fullWidth
          onClick={() => {
            login();
          }}
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
