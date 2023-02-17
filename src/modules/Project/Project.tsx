import React, { memo } from 'react';
import { SidebarLayout } from 'components';
import { Wrapper } from './Project.styled';
import { Grid } from '@mui/material';

import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';

const majors = [
  {
    value: 'Information Technology',
    label: 'Information Technology',
  },
  {
    value: 'Food Technology',
    label: 'Food Technology',
  },
  {
    value: 'Business Administration',
    label: 'Business Administration',
  },
  {
    value: 'English Studies',
    label: 'English Studies',
  },
];

const Project = () => {
  return (
    <SidebarLayout>
      <Wrapper>
        <div className="header">
          <div className="header-left">
            <span className="welcome">Projects</span>
            <span className="breadcrumb">Dashboard / Projects</span>
          </div>
          <div className="header-right">
            <div className="container-icon">
              <AppsIcon className="icon" />
            </div>
            <div className="container-icon">
              <MenuIcon className="icon" />
            </div>
            <div className="add-icon">
              <AddIcon className="icon" />
              Add Student
            </div>
          </div>
        </div>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={3}>
            <TextField
              fullWidth
              className="text-field"
              label="Project Name"
              type="text"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              className="text-field"
              label="Student Name"
              type="text"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              className="select-major"
              id="outlined-select-currency-native"
              select
              label="Select Major"
              defaultValue="Information Technology"
              SelectProps={{
                native: true,
              }}
            >
              {majors.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <div className="button-search">
              <a href="#">Search</a>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="card">
              <div className="card-body">
                <div className="dropdown"></div>
                <h4 className="project-title">Office Management</h4>
                <small>
                  <span className="text-xs">1</span>
                  <span className="text-muted"> open tasks, </span>
                  <span className="text-xs">9</span>
                  <span className="text-muted"> tasks completed</span>
                </small>
                <p className="text-muted">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. When an unknown printer took a galley of
                  type and scrambled it...
                </p>
                <div className="deadline">
                  <div className="sub-title">Deadline: </div>
                  <div className="text-muted">17 Apr 2023</div>
                </div>
                <div className="leader">
                  <div className="sub-title">Project Leader: </div>
                  <div className="leader-img mini-img">
                    <a href="#">
                      <img
                        className="logo"
                        src={require('assets/images/student/student-01.jpg')}
                        alt="Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="team">
                  <div className="sub-title">Team: </div>
                  <ul className="team-member">
                    <li>
                      <div className="team-img mini-img">
                        <a href="#">
                          <img
                            className="logo"
                            src={require('assets/images/student/student-01.jpg')}
                            alt="Logo"
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="team-img mini-img">
                        <a href="#">
                          <img
                            className="logo"
                            src={require('assets/images/student/avatar-13.jpg')}
                            alt="Logo"
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="team-img mini-img">
                        <a href="#">
                          <img
                            className="logo"
                            src={require('assets/images/student/avatar-04.jpg')}
                            alt="Logo"
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="team-img mini-img">
                        <a href="#">
                          <img
                            className="logo"
                            src={require('assets/images/student/avatar-11.jpg')}
                            alt="Logo"
                          />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="team-img mini-img">
                        <a href="#">
                          <img
                            className="logo"
                            src={require('assets/images/student/avatar-10.jpg')}
                            alt="Logo"
                          />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="progress">
                  <div className="sub-title">Progress</div>
                  <div className="progress-bar"></div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(Project);
