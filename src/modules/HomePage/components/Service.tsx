import React from 'react';
import { Container } from '@mui/system';
import TaskIcon from '@mui/icons-material/Task';
import { Wrapper } from './Service.styled';
import {
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
                All-in-one
                <br />
                in your Website
              </h2>
            </div>
            <div className="row service__itemRow">
              <div className="col service__itemRowContent">
                <div className=" service__item">
                  <TaskIcon />
                </div>
                <div className="service__itemText">
                  <h3>Task</h3>
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
                  <h3>Student Management</h3>
                </div>
              </div>

              <div className="col service__itemRowContent">
                <div className=" service__item">
                  <AccountCircle />
                </div>
                <div className="service__itemText">
                  <h3>Profile</h3>
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
