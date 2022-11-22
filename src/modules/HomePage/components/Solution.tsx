import React from 'react';
import { Wrapper } from './Solution.styled';

export const Solution = () => {
  return (
    <Wrapper>
      <div className="solution">
        <div className="solution__content">
          <div className="solution__title">
            <span>Solutions by Business Size</span>
            <h2>
              HR solutions that grow with
              <br />
              your business
            </h2>
          </div>
          <div className="solution__tag"></div>
        </div>
      </div>
    </Wrapper>
  );
};
