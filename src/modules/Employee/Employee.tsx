import React, { memo } from 'react';
import { Grid } from '@mui/material';
import { SidebarLayout } from 'components';
import { Wrapper } from './Employee.styled';
import { TextField } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

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

const Employee = () => {
  return (
    <SidebarLayout>
      <Wrapper>
        <div className="header">
          <div className="header-left">
            <span className="welcome">Welcome Teacher!</span>
            <span className="breadcrumb">All Students</span>
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
              label="Student ID"
              type="number"
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
            <TextField
              fullWidth
              className="text-field"
              label="Student Name"
              type="text"
            />
          </Grid>
        </Grid>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(Employee);
