import React, { memo } from 'react';
import { SidebarLayout } from 'components';
import { Wrapper } from './AttendanceStudent.styled';

import { Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  useAttendanceMe,
  useGetCurrentSchedules,
  // useGetSchedules,
} from 'queries/useEmployee';
import { useGetAllProjectsAdmin } from 'queries/useProjects';
import { toast } from 'react-toastify';
import moment from 'moment';

const month = [
  {
    value: 'January',
    label: 'January',
  },
  {
    value: 'February',
    label: 'February',
  },
  {
    value: 'March',
    label: 'March',
  },
  {
    value: 'April',
    label: 'April',
  },
  {
    value: 'May',
    label: 'May',
  },
  {
    value: 'June',
    label: 'June',
  },
  {
    value: 'July',
    label: 'July',
  },
  {
    value: 'August',
    label: 'August',
  },
  {
    value: 'September',
    label: 'September',
  },
  {
    value: 'October',
    label: 'October',
  },
  {
    value: 'November',
    label: 'November',
  },
  {
    value: 'December',
    label: 'December',
  },
];

const year = [
  {
    value: '2023',
    label: '2023',
  },
  {
    value: '2022',
    label: '2022',
  },
  {
    value: '2021',
    label: '2021',
  },
  {
    value: '2020',
    label: '2020',
  },
  {
    value: '2019',
    label: '2019',
  },
  {
    value: '2018',
    label: '2018',
  },
];

function createData(order: number, date: string, status: string) {
  return { order, date, status };
}

const rows = [
  createData(1, '10 January 2023', 'Casual Leave'),
  createData(2, '10 January 2023', 'Casual Leave'),
  createData(3, '10 January 2023', 'Casual Leave'),
  createData(4, '10 January 2023', 'Casual Leave'),
  createData(5, '10 January 2023', 'Casual Leave'),
];

const Request = () => {
  const [defaultProject, setDefaultProject] = React.useState('');
  const [dateMatch, setDateMatch] = React.useState<any>();
  const [afterMinute, setAfterMinute] = React.useState<any>();
  const [distance, setDistance] = React.useState<any>();
  const [ableToCountDown, setAbleToCountDown] = React.useState<boolean>(false);
  const [schedules, setSchedules] = React.useState<Array<any>>([]);
  const [times, setTimes] = React.useState<any>();
  const [projects, setProjects] = React.useState<Array<any>>([]);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);

  // const onGetSchedules = useGetSchedules();
  const onGetCurrentSchedules = useGetCurrentSchedules();
  const onGetAllProject = useGetAllProjectsAdmin();
  const attendanceMe = useAttendanceMe();

  const handleChange = (event: SelectChangeEvent) => {
    setDefaultProject(event.target.value);
  };
  React.useEffect(() => {
    onGetCurrentSchedules()
      .then((rs: any) => {
        if (rs) {
          console.log('rs', rs);
          setSchedules(rs);
        }
      })
      .catch((err: any) => {
        toast.error(err);
      });
    onGetAllProject().then((rs: any) => {
      setProjects(rs);
    });
  }, []);
  React.useEffect(() => {
    if (defaultProject !== '') {
      setTimes(
        schedules?.find((item: any) => item.projectId === defaultProject)?.time,
      );
    }
  }, [defaultProject, schedules]);
  console.log(schedules);

  React.useEffect(() => {
    console.log(times);
    if (times) {
      console.log(moment(times.date, 'dddd, MMMM Do YYYY, h:mm:ss').toDate());
      if (
        moment(times.date, 'dddd, MMMM Do YYYY, h:mm:ss').toDate().getTime() -
          new Date().getTime() <=
        0
      ) {
        setAfterMinute(times.attendaceAfter);
      } else {
        console.log(
          'distance',
          moment(times.date, 'dddd, MMMM Do YYYY, h:mm:ss').toDate().getTime() -
            new Date().getTime(),
        );
      }
    }
  }, [times]);
  React.useEffect(() => {
    if (afterMinute) {
      setAbleToCountDown(true);
      setDistance(
        moment(times.date, 'dddd, MMMM Do YYYY, h:mm:ss').toDate().getTime() +
          afterMinute * 60 * 1000 -
          new Date().getTime(),
      );
    }
  }, [dateMatch, afterMinute, times]);
  React.useEffect(() => {
    if (distance > 0) {
      startTimer(distance);
    } else {
      setAbleToCountDown(false);
    }
  }, [distance]);

  const startTimer = (timer: number) => {
    setInterval(() => {
      setMinute(parseInt((timer / 60000).toString(), 10));
      setSecond(parseInt((timer % 60000).toString(), 10));
      timer = timer - 1000;
      if (timer < 0) {
        setAbleToCountDown(false);
      }
    }, 1000);
  };
  console.log(minute, second);
  const attendance = () => {
    if (defaultProject === '') {
      toast.error('Please choose specific project for attendance');
      return;
    }
    attendanceMe(defaultProject)
      .then((rs: any) => {
        if (rs) {
          toast.success(
            'Successfull, your attendance has been recorded on this project',
          );
        }
      })
      .catch((err: any) => {
        toast.error(err.message || err);
      });
  };

  return (
    <SidebarLayout>
      <Wrapper>
        <div className="header">
          <div className="header-left">
            <span className="welcome">Attendance</span>
            <span className="breadcrumb">Student / Attendance</span>
          </div>
        </div>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={6}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Timesheet <small className="text-mute">11 Feb 2023</small>
                </h5>
                <div className="punch-info">
                  <div className="punch-minutes">
                    <span>
                      {ableToCountDown ? (
                        <>
                          {minute} : {second}
                        </>
                      ) : (
                        'Time out'
                      )}
                    </span>
                  </div>
                </div>
                <div
                  className={
                    ableToCountDown ? 'punch-btn' : 'punch-btn disable'
                  }
                  onClick={() => {
                    if (ableToCountDown) {
                      attendance();
                    } else {
                      toast.info('Can not attendance at this moment ');
                    }
                  }}
                >
                  <button type="button">Punch Out</button>
                </div>
                <div className="statistics">
                  <Grid spacing={3} className="grid" container>
                    <Grid item xs={12}>
                      <FormControl sx={{ minWidth: 600 }} fullWidth>
                        <InputLabel id="demo-simple-select-helper-label">
                          Project
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="Select Project"
                          onChange={handleChange}
                        >
                          {schedules?.map((sche: any, key: any) => {
                            return (
                              <MenuItem
                                key={key}
                                value={
                                  projects?.find(
                                    (pro: any) => pro._id === sche.projectId,
                                  )?._id
                                }
                              >
                                {
                                  projects?.find(
                                    (pro: any) => pro._id === sche.projectId,
                                  )?.projectName
                                }
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                    {/* <Grid item xs={6} className="stats-box">
                      <p>Break</p>
                      <h6>1.21 hrs</h6>
                    </Grid>
                    <Grid item xs={6} className="stats-box">
                      <p>Overtime</p>
                      <h6>3 hrs</h6>
                    </Grid> */}
                  </Grid>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="card">
              <div className="card-body" style={{ paddingBottom: 0 }}>
                <div className="card-title">Today Activities</div>
                <ul className="res-subject-list">
                  {schedules?.map((sche, key) => {
                    let name = projects?.find(
                      (pro: any) => pro._id === sche.projectId,
                    )?.projectName;
                    return (
                      <li key={key}>
                        <p className="res-subject-name">{name}</p>
                        <p className="res-subject-time">
                          <AccessTimeIcon />
                          {sche.time.date}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Grid>

          <Grid item xs={12}>
            <h3>History</h3>
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              className="text-field"
              label="Day"
              type="number"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              fullWidth
              className="select-requestType"
              id="outlined-select-currency-native"
              select
              label="Select Month"
              defaultValue="1"
              SelectProps={{
                native: true,
              }}
            >
              {month.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              className="select-requestType"
              id="outlined-select-currency-native"
              select
              label="Select Year"
              defaultValue="2023"
              SelectProps={{
                native: true,
              }}
            >
              {year.map((option) => (
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
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="table-title">
                    <TableCell id="table-head" style={{ width: '10%' }}>
                      #
                    </TableCell>
                    <TableCell
                      align="right"
                      id="table-head"
                      style={{ width: '45%' }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      align="right"
                      id="table-head"
                      style={{ flex: 1 }}
                    >
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.order}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.order}
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(Request);
