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
  useGetHistoryAttendance,
  // useGetSchedules,
} from 'queries/useEmployee';
import { useGetAllProjectsAdmin } from 'queries/useProjects';
import { toast } from 'react-toastify';
import moment from 'moment';
import { useGetGeoLocation } from 'queries/useGetGeoLocation';
import InfoIcon from '@mui/icons-material/Info';

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

const Request = () => {
  const [defaultProject, setDefaultProject] = React.useState('');
  const [dateMatch, setDateMatch] = React.useState<any>();
  const [afterMinute, setAfterMinute] = React.useState<any>();
  const [distance, setDistance] = React.useState<any>();
  const [ableToCountDown, setAbleToCountDown] = React.useState<boolean>(false);
  const [schedules, setSchedules] = React.useState<Array<any>>([]);
  const [history, setHistory] = React.useState<Array<any>>([]);
  const [times, setTimes] = React.useState<any>();
  const [projects, setProjects] = React.useState<Array<any>>([]);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const [textNotify, setTextNotify] = React.useState<string>('');
  const [reload, setReload] = React.useState<boolean>(false);
  const [isAttended, setIsAttended] = React.useState<boolean>(false);
  const geoLocation = useGetGeoLocation();

  // const onGetSchedules = useGetSchedules();
  const onGetCurrentSchedules = useGetCurrentSchedules();
  const onGetAllProject = useGetAllProjectsAdmin();
  const attendanceMe = useAttendanceMe();
  const onGetHistoryAttendance = useGetHistoryAttendance();

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
        console.log(err);
      });
    onGetHistoryAttendance()
      .then((rs: any) => {
        if (rs) {
          console.log('rs', rs);
          setHistory(rs);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
    onGetAllProject().then((rs: any) => {
      setProjects(rs);
    });
  }, []);
  React.useEffect(() => {
    onGetHistoryAttendance()
      .then((rs: any) => {
        if (rs) {
          console.log('rs', rs);
          setHistory(rs);
        }
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, [reload]);
  React.useEffect(() => {
    if (defaultProject !== '') {
      if (
        history?.find((h: any) => {
          return h.projectId === defaultProject;
        })?.times[0]?.leave
      ) {
        setTextNotify('Joined');
        setAbleToCountDown(false);
      } else {
        // setTextNotify('Waiting');
        setTimes(
          schedules?.find((item: any) => item.projectId === defaultProject)
            ?.time,
        );
      }
    }
  }, [defaultProject, schedules, history, distance]);
  console.log(schedules);

  React.useEffect(() => {
    if (times) {
      console.log(
        'future - now',
        moment(times.date, 'dddd, MMMM Do YYYY, h:mm:ss').toDate().getTime() -
          new Date().getTime(),
      );
      if (
        moment(times.date, 'dddd, MMMM Do YYYY, h:mm:ss').toDate().getTime() -
          new Date().getTime() <=
        0
      ) {
        setAfterMinute(times.attendaceAfter);
        console.log('not waiting');
      } else {
        console.log(' waiting');

        setTextNotify('Waiting');
        startWaiting(
          moment(times.date, 'dddd, MMMM Do YYYY, h:mm:ss').toDate().getTime() -
            new Date().getTime(),
          times,
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
      setTextNotify('Time out');
    }
  }, [distance, isAttended]);
  React.useEffect(() => {
    setTextNotify(`${minute} : ${second}`);
  }, [minute, second]);
  const startTimer = (timer: number) => {
    let j = setInterval(() => {
      setMinute(parseInt((timer / 60000).toString(), 10));
      setSecond(parseInt(((timer % 60000) / 1000).toString(), 10));
      timer = timer - 1000;
      if (timer < 0) {
        setAbleToCountDown(false);
        setDistance(0);
        clearInterval(j);
        setReload(!reload);
      }
    }, 1000);
  };
  const startWaiting = (timer: number, times: any) => {
    let i = setInterval(() => {
      setReload(!reload);
      timer = timer - 1000;
      console.log(timer);
      if (timer <= 0) {
        setAfterMinute(times.attendaceAfter);
        clearInterval(i);
      }
    }, 1000);
  };

  const attendance = () => {
    if (defaultProject === '') {
      toast.error('Please choose specific project for attendance');
      return;
    }
    if (!geoLocation) {
      toast.error('Please enable location for our site');
    }
    attendanceMe(defaultProject, geoLocation)
      .then((rs: any) => {
        if (rs) {
          toast.success(
            'Successfull, your attendance has been recorded on this project',
          );
          setAbleToCountDown(false);
          setReload(!reload);
          setDistance(0);
          setTimes(0);
          setIsAttended(true);

          onGetHistoryAttendance()
            .then((rs: any) => {
              if (rs) {
                console.log('rs', rs);
                setHistory(rs);
              }
            })
            .catch((err: any) => {
              toast.error(err);
            });
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
                    <span>{textNotify}</span>
                  </div>
                </div>
                <div
                  className={
                    ableToCountDown && !isAttended
                      ? 'punch-btn'
                      : 'punch-btn disable'
                  }
                  onClick={() => {
                    if (ableToCountDown && !isAttended) {
                      attendance();
                    } else {
                      if (isAttended) {
                        toast.info('You have attended successfull');
                      } else {
                        toast.info('Can not attendance at this moment ');
                      }
                    }
                  }}
                >
                  <button type="button">
                    {isAttended ? 'Attended' : 'Attend'}
                  </button>
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
                          defaultValue={schedules[0]?.projectId}
                          value={defaultProject}
                          disabled={schedules?.length <= 0 ? true : false}
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
                  {schedules.length > 0 ? (
                    schedules?.map((sche, key) => {
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
                    })
                  ) : (
                    <p className="res-subject-time">
                      <InfoIcon />
                      You don{"'"}t have any class schedule today
                    </p>
                  )}
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
            <TableContainer component={Paper} id="table-wrapper">
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead id="table-head-wrapper">
                  <TableRow>
                    <TableCell
                      id="table-head"
                      style={{ width: '1%' }}
                    ></TableCell>
                    <TableCell
                      align="left"
                      id="table-head"
                      style={{ width: '30%' }}
                    >
                      Project
                    </TableCell>
                    <TableCell
                      align="left"
                      id="table-head"
                      style={{ width: '35%' }}
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
                  {history?.length > 0 ? (
                    history?.map((his: any, k: any) =>
                      his?.times
                        ?.sort(
                          (a: any, b: any) =>
                            moment(b?.date, 'dddd, MMMM Do YYYY, h:mm:ss')
                              .toDate()
                              .getTime() -
                            moment(a?.date, 'dddd, MMMM Do YYYY, h:mm:ss')
                              .toDate()
                              .getTime(),
                        )
                        ?.map((item: any, key: any) => (
                          <TableRow
                            key={key}
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 },
                            }}
                            className="table-title"
                          >
                            <TableCell component="th" scope="row"></TableCell>
                            <TableCell align="left">
                              {
                                projects?.find(
                                  (pro: any) => pro._id === his.projectId,
                                )?.projectName
                              }
                            </TableCell>
                            <TableCell align="left">
                              {moment(
                                item?.date,
                                'dddd, MMMM Do YYYY, h:mm:ss',
                              ).format('dddd, DD-MM-YYYY, kk:mm:ss a')}
                            </TableCell>
                            <TableCell align="right">
                              {item?.leave ? 'Joined' : 'Absent'}
                            </TableCell>
                          </TableRow>
                        )),
                    )
                  ) : (
                    <TableRow className="table-title">
                      <TableCell align="right"></TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell>
                        <p className="res-subject-time">
                          <InfoIcon />
                          You don{"'"}t have any history schedule today
                        </p>
                      </TableCell>
                    </TableRow>
                  )}
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
