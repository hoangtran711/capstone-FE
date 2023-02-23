import React from 'react';
import { Container } from '@mui/system';
import { Wrapper } from './AboutUs.styled';
import { Grid } from '@mui/material';

export const AboutUs = () => {
  return (
    <Wrapper>
      <div className="aboutus">
        <Container>
          <div className="aboutus__content">
            <hr />
            <div className="aboutus__title">
              {/* <span>We do more for your world</span> */}
              <h2>
                About Us
                {/* <br />
                in your Website */}
              </h2>
            </div>
            <div className="about-website">
              <Grid spacing={3} className="grid" container>
                <Grid item xs={6}>
                  <div className="website-logo">
                    <img
                      src={require('assets/logo/secondary-logo.png')}
                      alt="logo"
                    />
                    <span>Magic Attendance</span>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="website-descriptionContain">
                    <div className="website-description">
                      We found that most of the learning and the internet are
                      interrelated such as online materials, online learning and
                      even online tests but online attendance is not available
                      or well known. Therefore, we decided build an online
                      attendance website to make attendance in class is{' '}
                      <span>faster</span>, more <span>convenient</span> and more{' '}
                      <span>accurate</span>.
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="row aboutus__itemRow">
              <div className="col aboutus__itemRowContent">
                <div className=" aboutus__item">
                  <img
                    src={require('assets/images/aboutus/332774098_920690635740894_5626229567833421373_n.jpg')}
                    alt="logo"
                  />
                </div>
                <div className="aboutus__itemText">
                  <h3>Tấn Thành - 18110046</h3>
                </div>
              </div>

              <div className="col aboutus__itemRowContent">
                <div className=" aboutus__item">
                  <img
                    src={require('assets/images/aboutus/240041946_1520021971687995_8989711318564756798_n.jpg')}
                    alt="logo"
                  />
                </div>
                <div className="aboutus__itemText">
                  <h3>Bảo Trân - 18110057</h3>
                </div>
              </div>

              <div className="col aboutus__itemRowContent">
                <div className=" aboutus__item">
                  <img
                    src={require('assets/images/aboutus/325899198_3491100281109438_2773992730127395289_n (1).jpg')}
                    alt="logo"
                  />
                </div>
                <div className="aboutus__itemText">
                  <h3>Hoàng Vũ - 18110398</h3>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Wrapper>
  );
};
