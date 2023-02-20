import React from 'react';
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

const SignInPage = () => {
  const [date, setDate] = React.useState(1);
  const [month, setMonth] = React.useState(1);
  const [year, setYear] = React.useState(1970);
  const [dateOfBirth, setDateOfBirth] = React.useState('1-1-1970');
  const onSignUp = useSignUp();
  const history = useHistory();

  React.useEffect(() => {
    if (date && month && year) {
      setDateOfBirth([date, month, year].join('-'));
    }
  }, [date, month, year]);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    let payload = { ...data, dateOfBirth };
    if (data.password !== data.repeatpassword) {
      toast.error('Pass and Repeat Pass does not match');
      return;
    }
    onSignUp(payload).then((rs: any) => {
      if (rs) {
        toast.success('Register successfull');
        history.push('/sign-in');
      }
    });
  };
  return (
    <Wrapper>
      <img
        className="logo"
        src={require('assets/logo/primary-logo.png')}
        alt="Logo"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <span className="title">Register</span>
        <span className="subtitle">Access to our dashboard</span>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              className="text-field"
              label="Email"
              type="email"
              {...register('email')}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={8}>
            <TextField
              fullWidth
              className="text-field"
              label="Username"
              type="email"
              {...register('username')}
            />
          </Grid>
          <Grid item xs={4}></Grid>

          <Grid item xs={8}>
            <TextField
              fullWidth
              className="text-field"
              label="Phone"
              type="email"
              {...register('phone')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              className="text-field"
              label="First Name"
              type="email"
              {...register('firstName')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              className="text-field"
              label="Last Name"
              type="email"
              {...register('lastName')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              className="text-field"
              label="Password"
              type="password"
              {...register('password')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              className="text-field"
              label="Repeat Password"
              type="password"
              {...register('repeatpassword')}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              className="text-field"
              label="Address"
              type="email"
              {...register('address')}
            />
          </Grid>
          <Grid item xs={12}>
            <div className="date">
              <div className="label">Date of birth</div>
              Day:{' '}
              <select
                name="date"
                id=""
                value={date}
                onChange={(e: any) => setDate(e.target.value)}
              >
                {Array.from(Array(31).keys()).map((it, key) => {
                  return (
                    <option value={it + 1} key={key}>
                      {it + 1}
                    </option>
                  );
                })}
              </select>
              Month:{' '}
              <select
                name="month"
                id=""
                value={month}
                onChange={(e: any) => setMonth(e.target.value)}
              >
                {Array.from(Array(12).keys()).map((it, key) => {
                  return (
                    <option value={it + 1} key={key}>
                      {it + 1}
                    </option>
                  );
                })}
              </select>
              Year:{' '}
              <select
                name="year"
                id=""
                value={year}
                onChange={(e: any) => setYear(Number(e.target.value))}
              >
                {Array.from(Array(60).keys()).map((it, key) => {
                  return (
                    <option value={Number(year) + Number(it)} key={key}>
                      {Number(year) + Number(it)}
                    </option>
                  );
                })}
              </select>
            </div>
          </Grid>
        </Grid>

        <input
          className="authenticate-button"
          type="submit"
          value={'Register'}
        />
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
