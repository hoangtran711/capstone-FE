import React from 'react';
import { memo } from 'react';
import { Wrapper } from './Navbar.styled';
import { Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { dispatch } from 'app/store';
import { deleteAccount } from 'reducer';
import { useSelector } from 'react-redux';
import { selectToken } from 'reducer/account/account.selector';
import { useHistory } from 'react-router-dom';

const NavbarComponent = () => {
  const token = useSelector(selectToken);
  const history = useHistory();
  return (
    <Wrapper>
      <Stack sx={{ height: '100%' }} direction="row" alignItems="center">
        <Stack
          sx={{ width: '230px' }}
          alignItems="center"
          justifyContent="center"
        >
          <img
            className="logo"
            src={require('assets/logo/secondary-logo.png')}
            alt="Logo"
          />
        </Stack>
        <span className="title">Magic Attendance Technologies</span>
      </Stack>
      {token ? (
        <div className="account-more">
          <AccountCircleIcon className="account-icon" />
          <div className="account-content">
            <div>Harley Helmets</div>
            <div className="text-info">Student ID: 18110046</div>
            <div className=" text-info">Class: 18110CLA</div>
            <div className=" text-info ">Infomation Technology</div>
            <div className="signout-btn">
              <div
                className="btn"
                onClick={() => {
                  dispatch(deleteAccount());
                  history.push('/');
                }}
              >
                Sign Out
              </div>
            </div>
          </div>
        </div>
      ) : (
        'null'
      )}
    </Wrapper>
  );
};

export const Navbar = memo(NavbarComponent);
