import React, { memo } from 'react';
import { Wrapper } from './Loading.styled';
import Lottie from 'react-lottie';
import { handleOptionsLottie } from 'helper/lottie';
import LoadingJSON from 'assets/loading.json';

const LoadingComponent = () => {
  return (
    <Wrapper id="loading">
      <div className="overlay" />
      <div className="lottie">
        <Lottie options={handleOptionsLottie(LoadingJSON)} />
      </div>
    </Wrapper>
  );
};

export const Loading = memo(LoadingComponent);
