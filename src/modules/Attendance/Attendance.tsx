import React, { memo } from 'react';
import { SidebarLayout } from 'components';

import { Wrapper } from './Attendance.styled';

import {
  Grid,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { TextField } from '@mui/material';
import {
  IProject,
  useGetAllProjects,
  useGetProjectAttendance,
} from 'queries/useProjects';
// import { IEmployee } from 'modules/Employee/Employee';
import moment from 'moment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

const Attendance = () => {
  const [listProject, setListProject] = React.useState<Array<IProject>>([]);
  const [listStudent, setListStudent] = React.useState<Array<any>>([]);
  const [activeProject, setActiveProject] = React.useState<string>('');
  const [columns, setColumns] = React.useState<any>([
    '#',
    'Name',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
  ]);

  const onGetAllProject = useGetAllProjects();
  const onGetProjectAttendance = useGetProjectAttendance();
  React.useEffect(() => {
    onGetAllProject().then((rs: any) => {
      setListProject(rs);
    });
  }, []);
  React.useEffect(() => {
    if (listProject) {
      setActiveProject(listProject[0]?._id);
    }
  }, [listProject]);
  React.useEffect(() => {
    if (activeProject) {
      onGetProjectAttendance(activeProject).then((rs: any) => {
        if (rs) {
          setListStudent(rs);
        }
      });
    }
  }, [activeProject]);
  React.useEffect(() => {
    const listday = listStudent[0]?.schedules
      ?.sort(
        (a: any, b: any) =>
          moment(a.startTime, 'dddd, MMMM Do YYYY,h:mm:ss').toDate().getTime() -
          moment(b.startTime, 'dddd, MMMM Do YYYY,h:mm:ss').toDate().getTime(),
      )
      .map((d: any) =>
        moment(d.startTime, 'dddd, MMMM Do YYYY,h:mm:ss').format(
          'dddd, DD-MM-YYYY',
        ),
      );
    let tmp = [];
    if (listday?.length > 0) {
      tmp = ['#', 'Name'].concat(listday);
    } else {
      tmp = ['#', 'Name'].concat(['-', '-', '-']);
    }
    setColumns(tmp);
  }, [listStudent]);

  console.log(activeProject);

  return (
    <SidebarLayout>
      <Wrapper>
        <span className="welcome">Attendance</span>
        <span className="breadcrumb">Dashboard / Attendance</span>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={9}>
            <TextField
              fullWidth
              className="select-major"
              id="outlined-select-currency-native"
              select
              onChange={(e: any) => setActiveProject(e.target.value)}
              helperText="Please select your specific project"
              value={activeProject}
            >
              {listProject?.map((option, key) => (
                <MenuItem key={key} value={option._id}>
                  {option.projectName}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column: any, key: any) => (
                      <TableCell
                        key={key}
                        style={{ minWidth: 150 }}
                        align={key === 2 ? 'center' : 'left'}
                      >
                        {column}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listStudent?.map((st: any, key: any) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                        <TableCell>{key + 1}</TableCell>
                        <TableCell id="profile-cell">
                          <img src={st?.avatar} alt="ava" />
                          <div className="info">
                            <div className="name">
                              {st?.firstName + st?.lastName}
                            </div>
                            {st?.email}
                          </div>
                        </TableCell>
                        {st?.timesUntilNow?.map((time: any, k: any) => {
                          return (
                            <TableCell key={k} align={'center'}>
                              {moment(
                                time.startTime,
                                'dddd, MMMM Do YYYY,h:mm:ss',
                              )
                                .toDate()
                                .getTime() < new Date().getTime() ? (
                                time?.isJoined ? (
                                  <CheckCircleIcon
                                    style={{ color: '#55ce63' }}
                                  />
                                ) : (
                                  <CancelIcon style={{ color: 'red' }} />
                                )
                              ) : (
                                <div id="line"></div>
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(Attendance);
