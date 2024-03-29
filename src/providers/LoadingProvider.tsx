import React, { useState } from 'react';
// import { useEffect } from "react";
import { Loading } from 'components/Loading';
import { useLocation } from 'react-router-dom';

export const LoadingProvider = ({ children }: any) => {
  const location = useLocation<any>();
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    const onHidePreLoading = () => {
      try {
        const element = document.querySelector('#loading') as HTMLElement;
        element.style.opacity = '0';
        element.style.visibility = 'hidden';
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (err: any) {}
    };
    const timer1 = setTimeout(onHidePreLoading, 100);
    return () => {
      clearTimeout(timer1);
    };
  }, [location?.pathname]);
  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
};
