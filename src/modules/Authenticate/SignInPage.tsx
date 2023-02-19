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
import { useSelector } from 'react-redux';
import { selectToken } from 'reducer/account/account.selector';
import { useForm } from 'react-hook-form';
import { ISingIn } from 'queries/useAuth';
import { IDataInputLogin } from './interfaces/IDataInputLogin';

const SignInPage = () => {
  const {
    register,
    formState: { errors },
    getValues,
    trigger,
  } = useForm<IDataInputLogin>({ mode: 'onChange' });
  const history = useHistory();
  const token = useSelector(selectToken);

  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    const isValid = await trigger();
    if (!isValid) return;
    const data = getValues();
    dispatch(singInThunk(data as ISingIn));
  };
  React.useEffect(() => {
    if (token) {
      history.push('/dashboard');
    }
  }, [token, history]);
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
          label="Email or Username"
          type="email"
          {...register('username', {
            required: 'Email or Username cannot empty',
          })}
          helperText={errors.username?.message}
          error={!!errors.username?.message}
        />
        <TextField
          fullWidth
          className="text-field"
          label="Password"
          type="password"
          {...register('password', { required: 'Password cannot empty' })}
          helperText={errors.password?.message}
          error={!!errors.password?.message}
        />
        <span className="forgot">Forgot Password?</span>
        <LoadingButton
          className="authenticate-button"
          variant="contained"
          fullWidth
          onClick={handleLogin}
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
