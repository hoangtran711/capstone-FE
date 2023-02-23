import React from 'react';
import { Wrapper } from './Footer.styled';
import { Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <Wrapper>
      <div className="Footer">
        <div className="logo-box">
          <div className="logoContainer">
            <img src={require('assets/logo/secondary-logo.png')} alt="logo" />
            <span>Magic Attendance</span>
          </div>
        </div>
        <div className="contact">
          <Grid spacing={3} className="grid" container>
            <Grid item xs={4}>
              <div className="contact-content">
                <div>18110046@student.hcmute.edu.vn</div>
                <div>0382520281</div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="contact-content">
                <div>© Copyright 2022 attendance online.</div>
                <div>by 3Musketeers</div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="contact-content">
                <div className="footer-text">
                  Attendance Online. Thu Duc City. HCMC
                </div>
                <div className="logo-three">
                  <div className="logo-social">
                    <TwitterIcon />
                  </div>
                  <div className="logo-social">
                    <FacebookIcon />
                  </div>
                  <div className="logo-social">
                    <InstagramIcon />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Wrapper>
  );
};
