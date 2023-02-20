import React, { memo, useCallback, useMemo, useState } from 'react';
import { SidebarLayout } from 'components';
import { Wrapper } from './Request.styled';
import AddIcon from '@mui/icons-material/Add';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material';
import { Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  useCreateRequest,
  useGetRequestCurrentUser,
  useUpdateStatusRequest,
} from 'queries/useRequest';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { IDataInputRequest } from './model/IDataInputRequest';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useGetProjectUserJoined } from 'queries/useProjects';
import { LoadingButton } from '@mui/lab';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectRole } from 'reducer/account/account.selector';

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
    value: 'Accepted',
    label: 'Accepted',
  },
  {
    value: 'Denied',
    label: 'Denied',
  },
];

const Request = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const { data } = useGetRequestCurrentUser();
  const createRequest = useCreateRequest();
  const updateRequest = useUpdateStatusRequest();
  const [open, setOpen] = React.useState(false);
  const {
    register,
    setValue,
    getValues,
    trigger,
    reset,
    formState: { errors },
  } = useForm<IDataInputRequest>();
  const { data: projects } = useGetProjectUserJoined();
  const role = useSelector(selectRole);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleRequest = useCallback(async () => {
    const isValid = await trigger();
    if (!isValid) {
      return;
    }
    const data = getValues();
    setIsLoading(true);
    try {
      await createRequest(data);
      toast.success('Create request success');
      handleClose();
    } catch (err: any) {
      toast.error(err?.message || err);
    }
    setIsLoading(false);

    handleClose();
  }, [createRequest, getValues, handleClose, trigger]);

  const isAdmin = role === 'Admin';

  const filteredData = useMemo(
    () =>
      data?.filter((request: any) =>
        `${request.userInfo.firstName} ${request.userInfo.lastName}`
          .toLowerCase()
          .trim()
          .includes(searchValue.toLowerCase().trim()),
      ),
    [data, searchValue],
  );

  const dialogComponent = useMemo(
    () => (
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        <DialogTitle>Create Request</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                label="Project ID"
                fullWidth
                select
                variant="standard"
                {...register('projectId', {
                  required: 'Project ID cannot empty',
                })}
                helperText={errors.projectId?.message}
                error={!!errors.projectId?.message}
              >
                {projects?.map((project: any) => (
                  <MenuItem key={project._id} value={project._id}>
                    {project.projectName}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                label="Reason"
                fullWidth
                variant="standard"
                {...register('reason', {
                  required: 'Reason cannot empty',
                })}
                helperText={errors.reason?.message}
                error={!!errors.reason?.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="dense"
                label="Type"
                fullWidth
                variant="standard"
                select
                {...register('type', {
                  required: 'Type cannot empty',
                })}
                helperText={errors.type?.message}
                error={!!errors.type?.message}
              >
                <MenuItem value={'Leave'}>Leave</MenuItem>
                <MenuItem value={'Join Project'}>Join Project</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date"
                  value={getValues('date')}
                  onChange={(newValue: any) => {
                    setValue('date', newValue);
                  }}
                  renderInput={(params: any) => (
                    <TextField fullWidth {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <ListItemText secondary="Proof Image" />
              <TextField
                onChange={(e: any) => setValue('proof', e.target.files)}
                type="file"
                inputProps={{ multiple: true }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            variant="contained"
            color="error"
            onClick={handleClose}
            loading={isLoading}
          >
            Cancel
          </LoadingButton>
          <LoadingButton onClick={handleRequest} variant="contained">
            Create Requeste
          </LoadingButton>
        </DialogActions>
      </Dialog>
    ),
    [
      errors.projectId?.message,
      errors.reason?.message,
      errors.type?.message,
      getValues,
      handleClose,
      handleRequest,
      isLoading,
      open,
      projects,
      register,
      setValue,
    ],
  );
  const menu = useMemo(() => {
    return (
      isAdmin &&
      selectedItem?.status === 'Pending' && (
        <Menu
          key={selectedItem?._id}
          aria-labelledby="status-button"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleCloseMenu}
        >
          <MenuItem
            onClick={async () => {
              await updateRequest({
                requestId: selectedItem?._id,
                status: 'Accepted',
              });
              handleCloseMenu();
            }}
          >
            Accepted
          </MenuItem>
          <MenuItem
            onClick={async () => {
              await updateRequest({
                requestId: selectedItem?._id,
                status: 'Denied',
              });
              handleCloseMenu();
            }}
          >
            Denied
          </MenuItem>
        </Menu>
      )
    );
  }, [
    anchorEl,
    isAdmin,
    openMenu,
    selectedItem?._id,
    selectedItem?.status,
    updateRequest,
  ]);

  return (
    <SidebarLayout>
      {dialogComponent}
      {menu}
      <Wrapper>
        <div className="header">
          <div className="header-left">
            <span className="welcome">Requests</span>
            <span className="breadcrumb">Dashboard / Requests</span>
          </div>
          {!isAdmin && (
            <div className="header-right">
              <div className="add-icon" onClick={handleClickOpen}>
                <AddIcon className="icon" />
                Create Request
              </div>
            </div>
          )}
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
              <h6>Completed Requests</h6>
              <h4>
                {data?.filter((item: any) => item.status === 'Accepted')
                  .length || 0}{' '}
                <span>Requests</span>
              </h4>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="stats-info">
              <h6>Denied Requests</h6>
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
              className="text-field textField"
              label="Student Name"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              fullWidth
              className="select-requestType textField"
              id="outlined-select-currency-native"
              select
              label="Request Type"
              defaultValue="Request Type"
              SelectProps={{
                native: true,
              }}
            >
              {requestType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              className="select-requestType textField"
              id="outlined-select-currency-native"
              select
              label="Request Status"
              defaultValue="Request Statusa"
              SelectProps={{
                native: true,
              }}
            >
              {requestStatus.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
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
                    <TableCell align="center" id="table-head">
                      Request Type
                    </TableCell>
                    <TableCell align="center" id="table-head">
                      Date
                    </TableCell>
                    <TableCell align="center" id="table-head">
                      Reason
                    </TableCell>
                    <TableCell align="center" id="table-head">
                      Approver
                    </TableCell>
                    <TableCell align="center" id="table-head">
                      Project Name
                    </TableCell>
                    <TableCell align="center" id="table-head">
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData?.map((row: any) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {`${row.userInfo.firstName} ${row.userInfo.lastName}`}
                      </TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">
                        {row.date &&
                          moment(row.date).format('dddd, MMMM Do YYYY')}
                      </TableCell>
                      <TableCell align="center">{row.reason}</TableCell>
                      <TableCell align="center">{`${row.approverInfo.firstName} ${row.approverInfo.lastName}`}</TableCell>
                      <TableCell align="center">
                        {row.projectInfo.projectName}
                      </TableCell>
                      <TableCell align="center">
                        <div
                          onClick={(e) => {
                            setSelectedItem(row);
                            handleOpenMenu(e);
                          }}
                          id="status-button"
                          className={`status ${row.status}`}
                        >
                          {row.status}
                        </div>
                      </TableCell>
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
