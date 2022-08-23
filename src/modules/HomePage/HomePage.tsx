import React from 'react';
import { Wrapper } from './HomePage.styled';
import { Banner, Header, Sidebar, Service } from './components';

const HomePage = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Header />
      <Banner />
      <Service />
    </Wrapper>
  );
};

export default HomePage;
