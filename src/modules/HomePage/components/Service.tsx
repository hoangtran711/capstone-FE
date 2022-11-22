import React from 'react';
import { Container } from '@mui/system';

import { Wrapper } from './Service.styled';
import {
  Paid,
  AccessTime,
  CheckCircleOutline,
  SettingsSuggest,
  AccountCircle,
} from '@mui/icons-material/';

export const Service = () => {
  return (
    <Wrapper>
      <div className="service">
        <Container>
          <div className="service__content">
            <div className="service__title">
              <span>We do more for your world</span>
              <h2>
                All-in-one payroll and HR
                <br />
                your business
              </h2>
            </div>
            <div className="row service__itemRow">
              <div className="col service__itemRowContent">
                <div className=" service__item">
                  <Paid />
                </div>
                <div className="service__itemText">
                  <h3>Payroll</h3>
                </div>
              </div>

              <div className="col service__itemRowContent">
                <div className=" service__item">
                  <AccessTime />
                </div>
                <div className="service__itemText">
                  <h3>Time & Attendance</h3>
                </div>
              </div>

              <div className="col service__itemRowContent">
                <div className=" service__item">
                  <CheckCircleOutline />
                </div>
                <div className="service__itemText">
                  <h3>Benefits</h3>
                </div>
              </div>

              <div className="col service__itemRowContent">
                <div className=" service__item">
                  <SettingsSuggest />
                </div>
                <div className="service__itemText">
                  <h3>HR Management</h3>
                </div>
              </div>

              <div className="col service__itemRowContent">
                <div className=" service__item">
                  <AccountCircle />
                </div>
                <div className="service__itemText">
                  <h3>Hiring</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="service__detail"></div>
        </Container>
      </div>
    </Wrapper>
  );
};
