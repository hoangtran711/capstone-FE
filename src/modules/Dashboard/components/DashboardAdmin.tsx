import { Grid } from '@mui/material';
import React from 'react';
import { Wrapper } from './DashboardAdmin.styled';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const DashboardAdmin = () => {
  return (
    <Wrapper>
      <span className="welcome">Welcome Admin!</span>
      <span className="breadcrumb">Dashboard</span>
      <Grid spacing={3} className="grid" container>
        <Grid item xs={3}>
          <div className="card">
            <div className="container-icon">
              <AccountTreeIcon className="icon" />
            </div>
            <div className="card-info">
              <span className="card-info-number">112</span>
              <span className="card-info-title">Projects</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card">
            <div className="container-icon">
              <AccountTreeIcon className="icon" />
            </div>
            <div className="card-info">
              <span className="card-info-number">112</span>
              <span className="card-info-title">Projects</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card">
            <div className="container-icon">
              <AccountTreeIcon className="icon" />
            </div>
            <div className="card-info">
              <span className="card-info-number">112</span>
              <span className="card-info-title">Projects</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="card">
            <div className="container-icon">
              <AccountTreeIcon className="icon" />
            </div>
            <div className="card-info">
              <span className="card-info-number">112</span>
              <span className="card-info-title">Projects</span>
            </div>
          </div>
        </Grid>
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
      </Grid>
    </Wrapper>
  );
};

export default DashboardAdmin;
