import React, { memo } from 'react';
import { SidebarLayout } from 'components';
import { Wrapper } from './Request.styled';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CreateProject } from './components/Create Project/CreateProject';
import { useGetRequestTeacher } from 'queries/useRequest';
import moment from 'moment';

const requestType = [
  {
    value: 'Casual Request',
    label: 'Casual Request',
  },
  {
    value: 'Medical Request',
    label: 'Medical Request',
  },
];

const requestStatus = [
  {
    value: 'Pending',
    label: 'Pending',
  },
  {
    value: 'Approved',
    label: 'Approved',
  },
  {
    value: 'Reject',
    label: 'Reject',
  },
];

function createData(
  name: string,
  leaveType: string,
  from: string,
  to: string,
  noofdays: number,
  reason: string,
  status: string,
  actions: string,
) {
  return { name, leaveType, from, to, noofdays, reason, status, actions };
}

const rows = [
  createData(
    'Frozen yoghurt',
    'Casual Leave',
    '10 Jan 2019',
    '10 Jan 2019',
    4.0,
    'Going to Hospital',
    'new',
    'new',
  ),
  createData(
    'Ice cream sandwich',
    'Casual Leave',
    '10 Jan 2019',
    '10 Jan 2019',
    4.3,
    'Going to Hospital',
    'new',
    'new',
  ),
  createData(
    'Eclair',
    'Casual Leave',
    '10 Jan 2019',
    '10 Jan 2019',
    6.0,
    'Going to Hospital',
    'new',
    'new',
  ),
  createData(
    'Cupcake',
    'Casual Leave',
    '10 Jan 2019',
    '10 Jan 2019',
    4.3,
    'Going to Hospital',
    'new',
    'new',
  ),
  createData(
    'Gingerbread',
    'Casual Leave',
    '10 Jan 2019',
    '10 Jan 2019',
    3.9,
    'Going to Hospital',
    'new',
    'new',
  ),
];
const Request = () => {
  const [isShowCreateProject, setIsShowCreateProject] = React.useState(false);
  const { data } = useGetRequestTeacher();
  console.log(data);
  return (
    <SidebarLayout>
      <Wrapper>
        {isShowCreateProject && (
          <CreateProject setVisibility={setIsShowCreateProject} />
        )}
        <div className="header">
          <div className="header-left">
            <span className="welcome">Requests</span>
            <span className="breadcrumb">Dashboard / Requests</span>
          </div>
          <div className="header-right">
            <div
              className="add-icon"
              onClick={() => setIsShowCreateProject(true)}
            >
              <AddIcon className="icon" />
              Add Request
            </div>
          </div>
        </div>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={3}>
            <div className="stats-info">
              <h6>Total Requests</h6>
              <h4>{data?.length}</h4>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="stats-info">
              <h6>Pending Requests</h6>
              <h4>
                {data?.filter((item: any) => item.status === 'Pending')
                  .length || 0}{' '}
                <span>Requests</span>
              </h4>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="stats-info">
              <h6>Denied Requests</h6>
              <h4>
                {data?.filter((item: any) => item.status === 'Accepted')
                  .length || 0}{' '}
                <span>Requests</span>
              </h4>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="stats-info">
              <h6>Completed Requests</h6>
              <h4>
                {data?.filter((item: any) => item.status === 'Denied').length ||
                  0}{' '}
                <span>Requests</span>
              </h4>
            </div>
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
              className="select-requestType"
              id="outlined-select-currency-native"
              select
              label="Request Type"
              defaultValue="Request Type"
              SelectProps={{
                native: true,
              }}
            >
              {requestType.map((option) => (
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
              label="Request Status"
              defaultValue="Request Statusa"
              SelectProps={{
                native: true,
              }}
            >
              {requestStatus.map((option) => (
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
                    <TableCell id="table-head">Requester</TableCell>
                    <TableCell align="right" id="table-head">
                      Request Type
                    </TableCell>
                    <TableCell align="right" id="table-head">
                      Date
                    </TableCell>
                    <TableCell align="right" id="table-head">
                      Reason
                    </TableCell>
                    <TableCell align="right" id="table-head">
                      Approver
                    </TableCell>
                    <TableCell align="right" id="table-head">
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((row: any) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row._id}
                      </TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">
                        {row.date &&
                          moment(row.date).format('dddd, MMMM Do YYYY')}
                      </TableCell>
                      <TableCell align="right">{row.reason}</TableCell>
                      <TableCell align="right">{row.approver}</TableCell>
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
