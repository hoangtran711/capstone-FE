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
import moment from 'moment';
import { AddStudent } from '../Add Student/AddStudent';
import { toast } from 'react-toastify';
import { useCreateRequest } from 'queries/useRequest';

const ProjectDetails = () => {
  let { projectId } = useParams<any>();
  const { data, refetch } = useGetDetailProject(projectId);
  const user = useSelector(selectUser);
  const [isShowAddStudent, setIsShowAddStudent] = React.useState(false);
  const createRequest = useCreateRequest();
  const [open, setOpen] = React.useState(false);

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
                    secondary={
                      data?.learnDate[0].dayOfWeek &&
                      moment().day(data?.learnDate[0].dayOfWeek).format('ddd')
                    }
                  />
                  <ListItemText
                    sx={{ textAlign: 'end' }}
                    primary={
                      <Typography className="label" variant="subtitle2">
                        At Time
                      </Typography>
                    }
                    secondary={`${data?.learnDate[0].atHour}:${data?.learnDate[0].atMinute}:${data?.learnDate[0].atSecond}`}
                  />
                </Stack>
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
        </Grid>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(ProjectDetails);
