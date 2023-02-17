import React, { memo } from 'react';
import { Grid } from '@mui/material';
import { SidebarLayout } from 'components';
import { Wrapper } from './Employee.styled';
import { TextField } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useGetAllEmployee } from 'queries/useEmployee';

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
export interface IEmployee {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  dateOfBirth: string;
}
const Employee = () => {
  const [list, setList] = React.useState<Array<IEmployee>>();
  const onnGetAllEmployee = useGetAllEmployee();
  React.useEffect(() => {
    onnGetAllEmployee().then((rs: any) => {
      setList(rs);
    });
  });
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
            <div className="button-search">
              <a href="#">Search</a>
            </div>
          </Grid>
          {list?.map((item, key) => {
            return (
              <Grid item xs={3} key={key}>
                <div className="profile-widget">
                  <div className="profile-img">
                    <a href="#">
                      <img
                        className="logo"
                        src={require('assets/images/student/student-01.jpg')}
                        alt="Logo"
                      />
                    </a>
                  </div>

                  <h4>
                    <a href="#">{item.firstName + item.lastName}</a>
                  </h4>
                  <div className="text-major">Infomation Technology</div>
                  <div className="profile-action">
                    <a href="#" className="action-icon dropdown-toggle">
                      <MoreVertIcon />
                    </a>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(Employee);
