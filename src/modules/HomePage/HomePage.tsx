import React from 'react';
import { Wrapper } from './HomePage.styled';
import { Banner, Header, Sidebar } from './components';

const HomePage = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Header />
      <Banner />
    </Wrapper>
  );
};

export default HomePage;
