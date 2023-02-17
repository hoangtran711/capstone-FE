import React, { memo } from 'react';
import { SidebarLayout } from 'components';
import { Wrapper } from './Request.styled';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  return (
    <SidebarLayout>
      <Wrapper>
        <div className="header">
          <div className="header-left">
            <span className="welcome">Requests</span>
            <span className="breadcrumb">Dashboard / Requests</span>
          </div>
          <div className="header-right">
            <div className="add-icon">
              <AddIcon className="icon" />
              Add Request
            </div>
          </div>
        </div>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={3}>
            <div className="stats-info">
              <h6>Today Presents</h6>
              <h4>12 / 60</h4>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="stats-info">
              <h6>Planned Leaves</h6>
              <h4>
                12 <span>Today</span>
              </h4>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="stats-info">
              <h6>Unplanned Leaves</h6>
              <h4>
                60 <span>Today</span>
              </h4>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="stats-info">
              <h6>Pending Requests</h6>
              <h4>12 / 60</h4>
            </div>
          </Grid>
          <Grid item xs={2}>
            <TextField
              fullWidth
              className="text-field"
              label="Student Name"
              type="number"
            />
          </Grid>

          <Grid item xs={2}>
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
          <Grid item xs={2}>
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
          <Grid item xs={2}>
            <Stack component="form" noValidate spacing={3}>
              <TextField
                id="date"
                label="From"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />{' '}
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <Stack component="form" noValidate spacing={3}>
              <TextField
                id="date"
                label="To"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />{' '}
            </Stack>
          </Grid>
          <Grid item xs={2}>
            <div className="button-search">
              <a href="#">Search</a>
            </div>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="table-title">
                    <TableCell id="table-head">Student</TableCell>
                    <TableCell align="right" id="table-head">
                      Request Type
                    </TableCell>
                    <TableCell align="right" id="table-head">
                      From
                    </TableCell>
                    <TableCell align="right" id="table-head">
                      To
                    </TableCell>
                    <TableCell align="right" id="table-head">
                      No of Days
                    </TableCell>
                    <TableCell align="right" id="table-head">
                      Reason
                    </TableCell>
                    <TableCell align="right" id="table-head">
                      Status
                    </TableCell>
                    <TableCell align="right" id="table-head">
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.leaveType}</TableCell>
                      <TableCell align="right">{row.from}</TableCell>
                      <TableCell align="right">{row.to}</TableCell>
                      <TableCell align="right">{row.noofdays}</TableCell>
                      <TableCell align="right">{row.reason}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                      <TableCell align="right">{row.actions}</TableCell>
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
