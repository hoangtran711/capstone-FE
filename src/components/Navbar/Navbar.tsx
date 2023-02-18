import React from 'react';
import { memo } from 'react';
import { Wrapper } from './Navbar.styled';
import { Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavbarComponent = () => {
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
      <Stack direction="row" alignItems="center">
        <AccountCircleIcon className="account-icon" />
      </Stack>
      <div className="account-more">
        <div className="account-content">
          <div>Harley Helmets</div>
          <div className="text-info">Student ID: 18110046</div>
          <div className=" text-info">Class: 18110CLA</div>
          <div className=" text-info ">Infomation Technology</div>
          <div className="signout-btn">
            <div className="btn">Sign Out</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export const Navbar = memo(NavbarComponent);
