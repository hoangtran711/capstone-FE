import React from 'react';
import { Wrapper } from './Authenticate.styled';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSignUp } from 'queries/useAuth';
// import { useSignUp } from 'queries/useAuth';

const SignInPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatpass, setRepeatPass] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [date, setDate] = React.useState(1);
  const [month, setMonth] = React.useState(1);
  const [year, setYear] = React.useState(1970);
  const onSignUp = useSignUp();
  const history = useHistory();
  React.useEffect(() => {
    if (date && month && year) {
      setDateOfBirth([date, month, year].join('-'));
    }
  }, [date, month, year]);
  console.log(dateOfBirth);
  const register = () => {
    if (
      email &&
      password &&
      repeatpass &&
      username &&
      firstName &&
      lastName &&
      dateOfBirth &&
      phoneNumber &&
      address
    ) {
      if (password !== repeatpass) {
        toast.info('Password and Repeat Password does not match !');
        return;
      }
      onSignUp({
        email: email,
        password: password,
        username: username,
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        phoneNumber: phoneNumber,
        address: address,
      }).then((rs: any) => {
        if (rs) {
          toast.success('Register successfull');
          history.push('/sign-in');
        }
      });
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
          label="Username"
          type="email"
          onChange={(e: any) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          className="text-field"
          label="First Name"
          type="email"
          onChange={(e: any) => setFirstName(e.target.value)}
        />
        <TextField
          fullWidth
          className="text-field"
          label="Last Name"
          type="email"
          onChange={(e: any) => setLastName(e.target.value)}
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
        <TextField
          fullWidth
          className="text-field"
          label="Phone"
          type="email"
          onChange={(e: any) => setPhoneNumber(e.target.value)}
        />
        <TextField
          fullWidth
          className="text-field"
          label="Address"
          type="email"
          onChange={(e: any) => setAddress(e.target.value)}
        />
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
