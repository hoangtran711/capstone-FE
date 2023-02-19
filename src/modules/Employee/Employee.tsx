import React, { memo, useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import { SidebarLayout } from 'components';
import { Wrapper } from './Employee.styled';
import { TextField } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useGetAllEmployee } from 'queries/useEmployee';
import { useHistory } from 'react-router-dom';

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
  _id: string;
}
const Employee = () => {
  const [searchValue, setSearchValue] = useState('');
  const [list, setList] = React.useState<Array<IEmployee>>();
  const onnGetAllEmployee = useGetAllEmployee();
  const history = useHistory();
  React.useEffect(() => {
    onnGetAllEmployee().then((rs: any) => {
      setList(rs);
    });
  }, [onnGetAllEmployee]);
  const filteredStudents = useMemo(() => {
    const copyList = [...(list ?? [])];
    return copyList?.filter((student) =>
      `${student.firstName} ${student.lastName}`
        .toLowerCase()
        .trim()
        .includes(searchValue.toLowerCase().trim()),
    );
  }, [list, searchValue]);
  return (
    <SidebarLayout>
      <Wrapper>
        <div className="header">
          <div className="header-left">
            <span className="welcome">Welcome Teacher!</span>
            <span className="breadcrumb">All Students</span>
          </div>
        </div>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item className="search" xs={4}>
            <span className="text">Search By:</span>
            <TextField
              fullWidth
              className="text-field"
              label="Student Name"
              size="small"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Grid>
          {filteredStudents?.map((item, key) => {
            return (
              <Grid item xs={3} key={key} className={'grid-wrapper grid'}>
                <div
                  className="profile-widget"
                  onClick={() => {
                    history.push(`/profile/${item?._id}`);
                  }}
                >
                  <div className="profile-img">
                    <a href="">
                      <img
                        className="logo"
                        src={require('assets/images/student/student-01.jpg')}
                        alt="Logo"
                      />
                    </a>
                  </div>

                  <h4>
                    <a href="">{item.firstName + item.lastName}</a>
                  </h4>
                  <div className="text-major">Infomation Technology</div>
                  <div className="profile-action">
                    <a href="" className="action-icon dropdown-toggle">
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
