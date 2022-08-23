import React from 'react';
import { Wrapper } from './Banner.styled';
import Slider from 'react-slick';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

export const Banner = () => {
  return (
    <Wrapper>
      <div className="banner">
        <Slider {...settings}>
          <div className="banner__content">
            <div className="banner__img">
              <img
                src={require('../../../assets/images/banner/banner-1-1.jpg')}
                alt=""
              />

              <div className="banner__contentText">
                <h2>
                  {' '}
                  Payroll &
                  <br /> HR Solutions
                </h2>
                <p>to take your business further</p>
                <a className="button-red">Request a meeting</a>
              </div>
              <div className="bannerBtn__pre">
                <a className="bannerBtn__preChild">
                  <ArrowBack />
                </a>
              </div>
              <div className="bannerBtn__next">
                <a className="bannerBtn__nextChild">
                  <ArrowForward />
                </a>
              </div>
            </div>
          </div>
          <div className="banner__content">
            <div className="banner__img">
              <img
                src={require('../../../assets/images/banner/banner-1-2.jpg')}
                alt=""
              />

              <div className="banner__contentText">
                <h2>
                  {' '}
                  Payroll &
                  <br /> HR Solutions
                </h2>
                <p>to take your business further</p>
                <a className="button-red">Request a meeting</a>
              </div>
              <div className="bannerBtn__pre">
                <a className="bannerBtn__preChild">
                  <ArrowBack />
                </a>
              </div>
              <div className="bannerBtn__next">
                <a className="bannerBtn__nextChild">
                  <ArrowForward />
                </a>
              </div>
            </div>
          </div>
          <div className="banner__content">
            <div className="banner__img">
              <img
                src={require('../../../assets/images/banner/banner-1-2.jpg')}
                alt=""
              />

              <div className="banner__contentText">
                <h2>
                  {' '}
                  Payroll &
                  <br /> HR Solutions
                </h2>
                <p>to take your business further</p>
                <a className="button-red">Request a meeting</a>
              </div>
              <div className="bannerBtn__pre">
                <a className="bannerBtn__preChild">
                  <ArrowBack />
                </a>
              </div>
              <div className="bannerBtn__next">
                <a className="bannerBtn__nextChild">
                  <ArrowForward />
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};
