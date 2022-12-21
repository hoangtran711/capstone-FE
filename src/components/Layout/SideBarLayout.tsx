import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import { Navbar } from 'components/Navbar/Navbar';
import { Wrapper } from './SideBarLayout.styled';
import { SideBar } from 'components/Sidebar/Sidebar';
import React from 'react';

export const SidebarLayout = ({ children }: any) => {
  return (
    <Wrapper>
      <Stack
        className="container"
        sx={{ backgroundColor: '#f7f7f7' }}
        direction="column"
      >
        <Navbar />
        <Stack direction="row">
          <SideBar />
          <Box sx={{ maxHeight: '100vh', overflow: 'scroll' }}>{children}</Box>
        </Stack>
      </Stack>
    </Wrapper>
  );
};
