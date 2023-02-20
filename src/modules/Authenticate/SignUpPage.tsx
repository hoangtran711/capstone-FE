import React, { useCallback } from 'react';
import { Wrapper } from './Authenticate.styled';
import { TextField } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSignUp } from 'queries/useAuth';
// import { useSignUp } from 'queries/useAuth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';

import * as yup from 'yup';
import { ImageUploader } from 'components/FileUploader';
import { IDataInputRegister } from './interfaces/IDataInputRegister';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const SignInPage = () => {
  const onSignUp = useSignUp();
  const history = useHistory();

  const {
    register,

    formState: { isSubmitting, errors },
    getValues,
    trigger,
    setValue,
  } = useForm<IDataInputRegister>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async () => {
    const payload = getValues();
    console.log(payload);

    try {
      await onSignUp(payload);
      toast.success('Register Successful');
      history.push('/login');
    } catch (err: any) {
      toast.error(err?.message || err);
    }
  };
  const onImageUploaderDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue('avatar', acceptedFiles[0]);
    },
    [setValue],
  );
  return (
    <Wrapper>
      <img
        className="logo"
        src={require('assets/logo/primary-logo.png')}
        alt="Logo"
      />
      <form className="form">
        <span className="title">Register</span>
        <span className="subtitle">Access to our dashboard</span>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={4}>
            <ImageUploader onDrop={onImageUploaderDrop} />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  className="text-field"
                  label="Email"
                  type="email"
                  {...register('email', { required: 'Email cannot empty' })}
                  helperText={errors?.email?.message}
                  error={!!errors?.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  className="text-field"
                  label="Username"
                  {...register('username', {
                    required: 'Username cannot empty',
                  })}
                  helperText={errors?.username?.message}
                  error={!!errors?.username?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  className="text-field"
                  label="Phone"
                  {...register('phoneNumber', {
                    required: 'Phone Number cannot empty',
                  })}
                  helperText={errors?.phoneNumber?.message}
                  error={!!errors?.phoneNumber?.message}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              className="text-field"
              label="First Name"
              {...register('firstName', {
                required: 'First Name cannot empty',
              })}
              helperText={errors?.firstName?.message}
              error={!!errors?.firstName?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              className="text-field"
              label="Last Name"
              {...register('lastName', { required: 'Last Name cannot empty' })}
              helperText={errors?.lastName?.message}
              error={!!errors?.lastName?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              className="text-field"
              label="Password"
              type="password"
              {...register('password', { required: 'Password cannot empty' })}
              helperText={errors?.password?.message}
              error={!!errors?.password?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              className="text-field"
              label="Student Id"
              {...register('studentId', {
                required: 'Student ID cannot empty',
              })}
              helperText={errors?.studentId?.message}
              error={!!errors?.studentId?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              className="text-field"
              label="Major"
              {...register('major', {
                required: 'Major cannot empty',
              })}
              helperText={errors?.major?.message}
              error={!!errors?.major?.message}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              className="text-field"
              label="Address"
              type="email"
              {...register('address', {
                required: 'Address cannot empty',
              })}
              helperText={errors?.address?.message}
              error={!!errors?.address?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date Of Birth"
                value={getValues('dateOfBirth')}
                onChange={(newValue: any) => {
                  setValue('dateOfBirth', newValue);
                }}
                renderInput={(params) => <TextField fullWidth {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>

        <div className="authenticate-button" onClick={onSubmit}>
          Register
        </div>
        <span className="redirect">
          Already have an account? <Link to="/sign-in">Login</Link>
        </span>
      </form>
    </Wrapper>
  );
};
const schema = yup
  .object({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
    repeatpassword: yup.string().required('Repeat password is required'),
    // maxJoin: yup.number().positive().integer().required('Max join is required'),
  })
  .required();

export default SignInPage;
