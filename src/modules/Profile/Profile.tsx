import React, { memo } from 'react';
import { Wrapper } from './Profile.styled';
import { SidebarLayout } from 'components';
import { Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Profile = () => {
  return (
    <SidebarLayout>
      <Wrapper>
        <span className="welcome">Profile</span>
        <span className="breadcrumb">Dashboard / Profile</span>
        <div className="main-card">
          <div className="card-container">
            <Grid spacing={3} className="grid-1" container>
              <Grid item xs={2} className="personal-img">
                <a href="#">
                  <img
                    className="image"
                    src={require('assets/images/student/student-01.jpg')}
                    alt="personal-img"
                  />
                </a>
              </Grid>
              <Grid item xs={3.5}>
                <div className="info-left">
                  <h3>Harley Helmets</h3>
                  <div className="major text-mute ">Infomation Technology</div>
                  <div className="class text-mute">Class: 18110CLA</div>
                  <div className="student-id">Student ID: 18110046</div>
                  <div className="date-join text-mute">
                    {' '}
                    Date of join: 1st Jan 2018
                  </div>
                  <div className="send-message">
                    <a href="#">Send Mail</a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <ul className="info-right">
                  <li>
                    <div className="title">
                      <span>Phone: </span>
                    </div>
                    <div className="text">
                      <a href="#">0382520281</a>
                    </div>
                  </li>
                  <li>
                    <div className="title">Email: </div>
                    <div className="text">
                      <a href="#">johndoe@example.com</a>
                    </div>
                  </li>
                  <li>
                    <div className="title">Birthday: </div>
                    <div className="text">24th July</div>
                  </li>
                  <li>
                    <div className="title">Address:</div>
                    <div className="text">
                      1861 Xa Lo Ha Noi, Linh Chieu, Thu Duc, TP. Ho Chi Minh
                    </div>
                  </li>
                  <li>
                    <div className="title">Gender:</div>
                    <div className="text">Male</div>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={0.5} className="edit-profile">
                <a href="#">
                  <EditIcon />
                </a>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="child-card">
          <Grid spacing={3} className="grid-2" container>
            <Grid item xs={6} className="child-card-left">
              <div className="card">
                <h3>Personal Informations</h3>
                <ul className="personal-info">
                  <li>
                    <div className="title">Date of birth:</div>
                    <div className="text">21- 05- 2000</div>
                  </li>
                  <li>
                    <div className="title">Place of birth:</div>
                    <div className="text">Binh Phuoc</div>
                  </li>
                  <li>
                    <div className="title">Nationality:</div>
                    <div className="text">Viet Nam</div>
                  </li>
                  <li>
                    <div className="title">Religion:</div>
                    <div className="text">Buddhism</div>
                  </li>
                  <li>
                    <div className="title">Study Status:</div>
                    <div className="text learning-status">Still learning</div>
                  </li>
                  <li>
                    <div className="title">Course:</div>
                    <div className="text">Course 2018</div>
                  </li>
                </ul>
                <Grid item xs={0.5} className="edit-profile">
                  <a href="#">
                    <EditIcon />
                  </a>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={6} className="child-card-right">
              <div className="card">
                <h3>Emergency Contact</h3>
                <div className="section-title">Primary</div>
                <ul className="personal-info">
                  <li>
                    <div className="title">Name:</div>
                    <div className="text">Nguyen Van Binh</div>
                  </li>
                  <li>
                    <div className="title">Relationship:</div>
                    <div className="text">Father</div>
                  </li>
                  <li>
                    <div className="title">Phone:</div>
                    <div className="text">
                      <a href="#">9876543210, 9876543210</a>
                    </div>
                  </li>
                </ul>
                <hr />
                <div className="section-title">Secondary</div>
                <ul className="personal-info">
                  <li>
                    <div className="title">Name:</div>
                    <div className="text">Tran Thi Thu</div>
                  </li>
                  <li>
                    <div className="title">Relationship:</div>
                    <div className="text">Mother</div>
                  </li>
                  <li>
                    <div className="title">Phone:</div>
                    <div className="text">
                      <a href="#">9876543210</a>
                    </div>
                  </li>
                </ul>
                <Grid item xs={0.5} className="edit-profile">
                  <a href="#">
                    <EditIcon />
                  </a>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(Profile);
