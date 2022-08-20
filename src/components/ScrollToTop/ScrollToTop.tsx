/* eslint-disable react/jsx-fragments */
import React, { useEffect, Fragment } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ children }: any) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return <Fragment>{children}</Fragment>;
}

export default ScrollToTop;
