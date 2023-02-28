import React, { memo, useCallback, useMemo } from 'react';
import { SidebarLayout } from 'components';
import { Wrapper } from './ProjectDetails.styled';
import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  ListItemText,
  Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useGetDetailProject } from 'queries/useProjects';
import { useSelector } from 'react-redux';
import { selectUser } from 'reducer/account/account.selector';
import { Stack } from '@mui/system';
// import moment from 'moment';
import { AddStudent } from '../Add Student/AddStudent';
import { toast } from 'react-toastify';
import { useCreateRequest } from 'queries/useRequest';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEnableStudent, usetGetDisabledStudent } from 'queries/useEmployee';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import moment from 'moment';
import RoomIcon from '@mui/icons-material/Room';
const ProjectDetails = () => {
  let { projectId } = useParams<any>();
  const { data, refetch } = useGetDetailProject(projectId);
  const user = useSelector(selectUser);
  const [isShowAddStudent, setIsShowAddStudent] = React.useState(false);
  const [listDisabled, setListDisabled] = React.useState<Array<any>>([]);
  const onGetListDisabled = usetGetDisabledStudent();
  const onEnable = useEnableStudent();
  const createRequest = useCreateRequest();
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    onGetListDisabled(projectId).then((rs: any) => {
      setListDisabled(rs);
    });
  }, [projectId]);
  console.log(listDisabled);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequest = useCallback(async () => {
    try {
      await createRequest({ projectId, type: 'Join Project' });
      toast.success(
        'Requested join project. Please wait for the teacher to accept this request to join the project.',
      );
      handleClose();
    } catch (err: any) {
      toast.error(err?.message || err);
    }

    handleClose();
  }, [createRequest, projectId]);

  const dialogComponent = useMemo(
    () => (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Join Project {data?.projectName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really wish to participate in this project?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="contained" onClick={handleClose}>
            Disagree
          </Button>
          <Button
            color="success"
            variant="contained"
            onClick={handleRequest}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    ),
    [data?.projectName, handleRequest, open],
  );

  return (
    <SidebarLayout>
      {isShowAddStudent && (
        <AddStudent
          setVisibility={setIsShowAddStudent}
          projectID={data?._id}
          reload={false}
          setReload={refetch}
        />
      )}
      {dialogComponent}
      <Wrapper>
        <div className="header">
          <div className="header-left">
            <span className="welcome">
              Welcome, {`${user.firstName} ${user.lastName}!`}
            </span>
            <span className="breadcrumb">
              Dashboard / Projects / {data?.projectName}
            </span>
          </div>
          <div className="header-right">
            {user.role === 'Admin' && user._id === data?.createdBy && (
              <div
                onClick={() => setIsShowAddStudent(true)}
                className="add-icon"
              >
                <AddIcon className="icon" />
                Add Student
              </div>
            )}

            {user.role === 'Student' && (
              <div onClick={handleClickOpen} className="add-icon">
                <AddIcon className="icon" />
                Join Project
              </div>
            )}
          </div>
        </div>
        <Grid spacing={2} className="grid" container>
          <Grid item xs={8}>
            <div className="card card-9">
              <div className="card-body">
                <div className="project-title">
                  <h5 className="card-title">{data?.projectName}</h5>
                  <small>
                    <span className="text-xs">2 </span>
                    <span className="text-muted">open tasks, </span>
                    <span className="text-xs">5 </span>
                    <span className="text-muted">tasks completed</span>
                  </small>
                </div>
                <p>{data?.projectDescription}</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="card">
              <div className="card-body">
                <Stack direction="row" alignItems="center">
                  <img
                    className="avatar"
                    src={data?.approverInfo?.avatar}
                    alt="Avatar"
                  />
                  <Stack direction="column">
                    <ListItemText
                      primary={
                        <Typography variant="h6">{`${data?.approverInfo?.firstName} ${data?.approverInfo?.lastName}`}</Typography>
                      }
                      secondary={
                        <Typography variant="body1" color="secondary">
                          {data?.approverInfo?.major}
                        </Typography>
                      }
                    />
                  </Stack>
                </Stack>
                <Divider sx={{ margin: '10px 0px' }} />
                <Stack direction="row" justifyContent={'space-between'}>
                  <ListItemText
                    primary={
                      <Typography className="label" variant="subtitle2">
                        Start Date
                      </Typography>
                    }
                    secondary={data?.startDate}
                  />
                  <ListItemText
                    sx={{ textAlign: 'end' }}
                    primary={
                      <Typography className="label" variant="subtitle2">
                        End Date
                      </Typography>
                    }
                    secondary={data?.endDate}
                  />
                </Stack>

                <Stack
                  sx={{ marginTop: '10px' }}
                  direction="row"
                  justifyContent={'space-between'}
                >
                  <ListItemText
                    primary={
                      <Typography className="label" variant="subtitle2">
                        Learn Date
                      </Typography>
                    }
                  />
                  <ListItemText
                    sx={{ textAlign: 'end' }}
                    primary={
                      <Typography
                        className="label"
                        variant="subtitle2"
                      ></Typography>
                    }
                  />
                </Stack>
                {data?.schedules?.map((sch: any, key: any) => {
                  return (
                    <Stack
                      sx={{ marginBottom: '10px' }}
                      direction="row"
                      justifyContent={'space-between'}
                      key={key}
                    >
                      <ListItemText
                        secondary={moment(
                          sch?.startTime,
                          'dddd MMMM Do YYYY, h:mm:ss',
                        ).format('dddd, kk:mm:ss a')}
                      />
                      <div
                        className="btn"
                        id="btn-view-location"
                        onClick={() =>
                          window.open(
                            `https://www.google.com/maps?q=${sch?.location?.lat},${sch?.location?.lng}`,
                          )
                        }
                      >
                        {' '}
                        View location <RoomIcon className="ic" />
                      </div>
                    </Stack>
                  );
                })}
                <Stack direction="row" justifyContent={'space-between'}>
                  <ListItemText
                    primary={
                      <Typography className="label" variant="subtitle2">
                        Student Joined
                      </Typography>
                    }
                    secondary={data?.joined}
                  />
                  <ListItemText
                    sx={{ textAlign: 'end' }}
                    primary={
                      <Typography className="label" variant="subtitle2">
                        Max Join
                      </Typography>
                    }
                    secondary={data?.maxJoin}
                  />
                </Stack>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="project-title">
                  <div className="joined-student-title">
                    <h5 className="card-title">Students</h5>
                  </div>
                  <div className="student-list">
                    {data?.studentsInfo?.map(
                      (student: any, index: number) =>
                        index < 10 && (
                          <>
                            <Link to={`/profile/${student._id}`}>
                              <Stack direction={'row'} alignItems="center">
                                <div className="list-left">
                                  <a href="#">
                                    <img
                                      className="avatar-student"
                                      src={student.avatar}
                                      alt="Logo"
                                    />
                                  </a>
                                </div>
                                <div className="list-right">
                                  <ListItemText
                                    primary={`${student.firstName} ${student.lastName}`}
                                    secondary={student.major}
                                  />
                                </div>
                              </Stack>
                            </Link>
                          </>
                        ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <h5 className="card-title">List of disabled students</h5>

          {user.role === 'Admin' && (
            <Grid item xs={12}>
              <TableContainer component={Paper} id="table-wrapper">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead id="table-head-wrapper">
                    <TableRow>
                      <TableCell id="table-head" style={{ width: '10%' }}>
                        #
                      </TableCell>
                      <TableCell
                        align="left"
                        id="table-head"
                        style={{ width: '20%' }}
                      >
                        Student ID
                      </TableCell>
                      <TableCell
                        align="left"
                        id="table-head"
                        style={{ width: '20%' }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        align="left"
                        id="table-head"
                        style={{ width: '25%' }}
                      >
                        Phone
                      </TableCell>
                      <TableCell
                        align="right"
                        id="table-head"
                        style={{ flex: 1 }}
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {listDisabled.length > 0 ? (
                      listDisabled?.map((item: any, key: any) => {
                        return (
                          <TableRow key={key}>
                            <TableCell
                              align="left"
                              id="table-head"
                              style={{ width: '10%' }}
                            >
                              {key + 1}
                            </TableCell>
                            <TableCell
                              align="left"
                              id="table-head"
                              style={{ width: '20%' }}
                            >
                              {item?._id}
                            </TableCell>
                            <TableCell
                              align="left"
                              id="table-head"
                              style={{ width: '20%' }}
                            >
                              {item?.firstName} {item?.lastName}
                            </TableCell>
                            <TableCell
                              align="left"
                              id="table-head"
                              style={{ width: '25%' }}
                            >
                              {item?.phoneNumber}
                            </TableCell>
                            <TableCell
                              align="right"
                              id="table-head"
                              style={{ flex: '1' }}
                            >
                              <HowToRegIcon
                                className="enable"
                                onClick={() => {
                                  onEnable(projectId, item?._id).then(
                                    (rs: any) => {
                                      if (rs) {
                                        toast.success(
                                          'Enable student successfull',
                                        );
                                      }
                                    },
                                  );
                                }}
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })
                    ) : (
                      <TableRow>
                        <TableCell align="left" style={{ width: '40%' }}>
                          Empty List
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          )}
        </Grid>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(ProjectDetails);
