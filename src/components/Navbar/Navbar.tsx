import React from 'react';
import { memo } from 'react';
import { Wrapper } from './Navbar.styled';
import { Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
        <TextField
          type="text"
          size="small"
          className="search-box"
          variant="standard"
          InputProps={{
            endAdornment: <SearchIcon className="icon" />,
            placeholder: 'Search here',
            disableUnderline: true,
          }}
        />
      </Stack>
    </Wrapper>
  );
};

export const Navbar = memo(NavbarComponent);
