import React, { useCallback } from 'react';
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
  let slider: any;
  const onHandleNext = useCallback(
    () => slider && console.log(slider),
    [slider],
  );
  const onHandlePrevious = useCallback(
    () => slider && slider.slickPrev(),
    [slider],
  );
  return (
    <Wrapper>
      <div className="banner">
        <div onClick={onHandleNext} className="bannerBtn__pre">
          <a className="bannerBtn__preChild">
            <ArrowBack />
          </a>
        </div>
        <div onClick={onHandlePrevious} className="bannerBtn__next">
          <a className="bannerBtn__nextChild">
            <ArrowForward />
          </a>
        </div>
        <Slider ref={(c) => (slider = c)} {...settings}>
          <div className="banner__content">
            <div className="banner__img">
              <img
                src={require('../../../assets/images/banner/banner-1-1.jpg')}
                alt=""
              />

              <div className="banner__contentText">
                <h2>
                  {' '}
                  Attendance
                  <br />
                  for Class
                  {/* <br /> for attendance */}
                </h2>
                <p>Automation solution</p>
                <a className="button-red">Request a meeting</a>
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
                  Attendance
                  <br />
                  for Class
                  {/* <br /> for attendance */}
                </h2>
                <p>Automation solution</p>
                <a className="button-red">Request a meeting</a>
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
                  Attendance
                  <br />
                  for Class
                  {/* <br /> for attendance */}
                </h2>
                <p>Automation solution</p>
                <a className="button-red">Request a meeting</a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
};
