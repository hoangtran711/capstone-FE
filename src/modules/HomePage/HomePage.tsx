import React from 'react';
import { Wrapper } from './HomePage.styled';
import { Banner, Header, Sidebar, Service, Footer } from './components';
import { AboutUs } from './components/AboutUs';

const HomePage = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Header />
      <Banner />
      <Service />
      <AboutUs />
      <Footer />
    </Wrapper>
  );
};

export default HomePage;
