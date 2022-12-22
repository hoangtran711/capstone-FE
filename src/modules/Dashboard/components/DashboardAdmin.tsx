import { Grid } from '@mui/material';
import React from 'react';
import { Wrapper } from './DashboardAdmin.styled';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubjectIcon from '@mui/icons-material/Subject';

const DashboardAdmin = () => {
  return (
    <Wrapper>
      <span className="welcome">Welcome Teacher!</span>
      <span className="breadcrumb">Dashboard</span>
      <Grid spacing={3} className="grid" container>
        <Grid item xs={4}>
          <div className="card">
            <div className="container-icon">
              <AccountCircleIcon className="icon" />
            </div>
            <div className="card-info">
              <span className="card-info-number">125</span>
              <span className="card-info-title">Total Students</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="card">
            <div className="container-icon">
              <AccountTreeIcon className="icon" />
            </div>
            <div className="card-info">
              <span className="card-info-number">5</span>
              <span className="card-info-title">Total Courses</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="card">
            <div className="container-icon">
              <SubjectIcon className="icon" />
            </div>
            <div className="card-info">
              <span className="card-info-number">25</span>
              <span className="card-info-title">Total Subjects</span>
            </div>
          </div>
        </Grid>
        {/* <Grid item xs={3}>
          <div className="card">
            <div className="container-icon">
              <AccountTreeIcon className="icon" />
            </div>
            <div className="card-info">
              <span className="card-info-number">112</span>
              <span className="card-info-title">Projects</span>
            </div>
          </div>
        </Grid> */}
        <Grid item xs={6}>
          <div className="card">
            <img
              className="chart"
              src={require('assets/images/dashboard/chart-1.png')}
              alt="Chart"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="card">
            <img
              className="chart"
              src={require('assets/images/dashboard/chart-2.png')}
              alt="Chart"
            />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card-statistic">
            <div className="card-title">
              <span style={{ color: '#1f1f1f' }}>New Employees</span>
              <span className="percentage">+10%</span>
            </div>
            <span className="card-info-number" style={{ fontSize: '24px' }}>
              10
            </span>
            <div className="progress">
              <div className="progress-color"></div>
            </div>
            <p style={{ color: '#1f1f1f', marginBottom: '0' }}>
              Overall Employees <span className="previous-value">218</span>
            </p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card-statistic">
            <div className="card-title">
              <span style={{ color: '#1f1f1f' }}>Earnings</span>
              <span className="percentage">+12.5%</span>
            </div>
            <span className="card-info-number" style={{ fontSize: '24px' }}>
              $1,42,300
            </span>
            <div className="progress">
              <div className="progress-color"></div>
            </div>
            <p style={{ color: '#1f1f1f', marginBottom: '0' }}>
              Previous Month <span className="previous-value">$1,15,852</span>
            </p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card-statistic">
            <div className="card-title">
              <span style={{ color: '#1f1f1f' }}>Expenses</span>
              <span className="percentage">-2.8%</span>
            </div>
            <span className="card-info-number" style={{ fontSize: '24px' }}>
              $8,500
            </span>
            <div className="progress">
              <div className="progress-color"></div>
            </div>
            <p style={{ color: '#1f1f1f', marginBottom: '0' }}>
              Previous Month <span className="previous-value"> $7,500</span>
            </p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card-statistic">
            <div className="card-title">
              <span style={{ color: '#1f1f1f' }}>Profit</span>
              <span className="percentage">-75%</span>
            </div>
            <span className="card-info-number" style={{ fontSize: '24px' }}>
              $1,12,000
            </span>
            <div className="progress">
              <div className="progress-color"></div>
            </div>
            <p style={{ color: '#1f1f1f', marginBottom: '0' }}>
              Previous Month <span className="previous-value">$1,42,000</span>
            </p>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default DashboardAdmin;
