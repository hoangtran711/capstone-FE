import React from 'react';
import { memo } from 'react';
import { Wrapper } from './Navbar.styled';
import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from 'reducer/account/account.selector';
import { useHistory } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { deleteAccount } from 'reducer';
import { dispatch } from 'app/store';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIcon from '@mui/icons-material/Assignment';

const NavbarComponent = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <Button
            id="basic-button"
            className="button-avatar"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <img className="avatar" src={user?.avatar} alt="Logo" />
            <div className="username">
              Hi, <span>{`${user?.firstName} ${user?.lastName}`}!</span>
            </div>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem sx={{ marginRight: '10px' }} onClick={handleClose}>
              <AccountBoxIcon />
              Profile
            </MenuItem>
            <MenuItem sx={{ marginRight: '10px' }} onClick={handleClose}>
              <ManageAccountsIcon />
              My account
            </MenuItem>

            <MenuItem sx={{ marginRight: '10px' }} onClick={handleClose}>
              <AssignmentIcon />
              My task
            </MenuItem>
            <MenuItem
              sx={{ marginRight: '10px' }}
              onClick={() => {
                dispatch(deleteAccount());
                history.push('/');
              }}
            >
              <LogoutIcon />
              Logout
            </MenuItem>
          </Menu>
        </div>
      ) : (
        // <div className="account-more">
        //   <AccountCircleIcon className="account-icon" />
        //   <div className="account-content">
        //     <div>Harley Helmets</div>
        //     <div className="text-info">Student ID: 18110046</div>
        //     <div className=" text-info">Class: 18110CLA</div>
        //     <div className=" text-info ">Infomation Technology</div>
        //     <div className="signout-btn">
        //       <div
        //         className="btn"
        // onClick={() => {
        //   dispatch(deleteAccount());
        //   history.push('/');
        // }}
        //       >
        //         Sign Out
        //       </div>
        //     </div>
        //   </div>
        // </div>
        'null'
      )}
    </Wrapper>
  );
};

export const Navbar = memo(NavbarComponent);
