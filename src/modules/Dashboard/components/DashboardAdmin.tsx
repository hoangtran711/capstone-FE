import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Task, Wrapper } from './DashboardAdmin.styled';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubjectIcon from '@mui/icons-material/Subject';
import {
  IProject,
  useGetAllProjects,
  useGetCurrentActiveProjects,
  useGetProjectAttendance,
  useRequestGenerateAttendance,
} from 'queries/useProjects';
import { IEmployee } from 'modules/Employee/Employee';
import { useGetAllEmployee } from 'queries/useEmployee';
import { useGetALlTaskOfTeacher } from 'queries/useTask';
import moment from 'moment';
import { Stack } from '@mui/system';

const DashboardAdmin = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { data: currenctActiveProject } = useGetCurrentActiveProjects();
  const [selectedProject, setSelectedProjects] = useState<any>();
  const generateAttendance = useRequestGenerateAttendance();
  const [listProject, setListProject] = React.useState<Array<IProject>>([]);
  const [listStudent, setListStudent] = React.useState<Array<IEmployee>>();
  const [listTasks, setListTask] = React.useState<any>();
  const onnGetAllEmployee = useGetAllEmployee();
  const onGetAllProject = useGetAllProjects();
  const onGetAllTaskOfTeacher = useGetALlTaskOfTeacher();
  const onGetProjectAttendance = useGetProjectAttendance();

  const [listAllAttendance, setListAllAttendance] = React.useState<any>([]);
  React.useEffect(() => {
    onGetAllProject().then((rs: any) => {
      if (rs) {
        setListProject(rs);
      }
    });
    onnGetAllEmployee().then((rs: any) => {
      setListStudent(rs);
    });
    onGetAllTaskOfTeacher().then((rs: any) => {
      setListTask(rs);
    });
  }, []);
  React.useEffect(() => {
    if (listAllAttendance.length === 0) {
      let tmp = listAllAttendance;

      listProject?.map(async (pro: any) => {
        const rs = await onGetProjectAttendance(pro._id);

        if (rs) {
          const obj = { id: pro._id, projectName: pro.projectName, arr: rs };
          tmp.push(obj);
        }
      });
      setListAllAttendance(tmp);
    }
  }, [listProject]);
  const getAmountAbsent = (item: any) => {
    let lst = item?.arr?.filter((it: any) => {
      let tmp = it?.timesUntilNow?.filter(
        (t: any) =>
          new Date(
            moment(t?.date, 'dddd, MMMM Do YYYY, h:mm:ss').format('L'),
          ).getTime() === new Date(moment().format('L')).getTime() && !t?.leave,
      );
      if (tmp.length > 0) {
        return it;
      }
    });
    if (lst.length > 0) {
      return lst.length;
    } else {
      return '-';
    }
  };
  const getAmountJoined = (item: any) => {
    let lst = item?.arr?.filter((it: any) => {
      let tmp = it?.timesUntilNow?.filter(
        (t: any) =>
          new Date(
            moment(t?.date, 'dddd, MMMM Do YYYY, h:mm:ss').format('L'),
          ).getTime() === new Date(moment().format('L')).getTime() &&
          t?.leave === 'Joined',
      );
      if (tmp.length > 0) {
        return it;
      }
    });
    if (lst.length > 0) {
      return lst.length;
    } else {
      return '-';
    }
  };

  const dialogComponent = useMemo(
    () => (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Re Attendance this project?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you certain you want to attendance in this project again?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={async () => {
              await generateAttendance(selectedProject?._id || '');
              handleClose();
            }}
            autoFocus
            variant="contained"
            color="success"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    ),
    [generateAttendance, open, selectedProject?._id],
  );

  return (
    <Wrapper>
      {dialogComponent}
      <span className="welcome">Welcome !</span>
      <span className="breadcrumb">Dashboard</span>
      <Grid spacing={3} className="grid" container>
        <Grid item xs={4}>
          <div className="card overview student">
            <div className="container-icon">
              <AccountCircleIcon className="icon student" />
              <div className="txt">Students</div>
            </div>
            <div className="card-info">
              <span className="card-info-number">
                {listStudent && listStudent?.length > 0
                  ? listStudent?.length
                  : 0}
              </span>
              <span className="card-info-title">Total Students</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="card overview project">
            <div className="container-icon">
              <AccountTreeIcon className="icon project" />
              <div className="txt">Projects</div>
            </div>
            <div className="card-info">
              <span className="card-info-number">
                {listProject && listProject?.length > 0
                  ? listProject?.length
                  : 0}
              </span>
              <span className="card-info-title">Total Projects</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="card overview task">
            <div className="container-icon">
              <SubjectIcon className="icon" />
              <div className="txt">Tasks</div>
            </div>
            <div className="card-info">
              <span className="card-info-number">
                {listTasks && listTasks?.length > 0 ? listTasks?.length : 0}
              </span>
              <span className="card-info-title">Total Tasks</span>
            </div>
          </div>
        </Grid>

        <Grid item xs={4}>
          <div className="card-statistic">
            <span className="card-info-number" style={{ fontSize: '24px' }}>
              Current Projects
            </span>
            <div className="card-title">
              <span style={{ color: '#1f1f1f' }}>Requests</span>
              <span className="percentage">
                {' '}
                {currenctActiveProject && currenctActiveProject?.length > 0
                  ? `${currenctActiveProject?.length} projects`
                  : 0}
              </span>
            </div>

            <div className="pendings">
              {currenctActiveProject?.map((project: any, key: any) => {
                return (
                  <div className="req" key={key}>
                    <div className="top">
                      <div className="user">
                        <div className="name">{project.projectName}</div>
                      </div>
                      <div className="status">
                        <div className="txt">Active</div>
                      </div>
                    </div>
                    <div className="bottom">
                      Time:{' '}
                      {moment(project?.activeSchedule?.startTime).format(
                        'HH:mm:ss',
                      )}{' '}
                      -{' '}
                      {moment(project?.activeSchedule?.endTime).format(
                        'HH:mm:ss',
                      )}
                    </div>
                    <Stack direction="row" justifyContent="space-between">
                      <Button
                        onClick={() =>
                          window.open(
                            `https://map.google.com/?q=${project?.activeSchedule?.location?.lat},${project?.activeSchedule?.location?.lng}`,
                          )
                        }
                        size="small"
                      >
                        View location
                      </Button>
                      <Button
                        onClick={() => {
                          setSelectedProjects(project);
                          handleClickOpen();
                        }}
                        color="error"
                        size="small"
                      >
                        Re-Attendance
                      </Button>
                    </Stack>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="card-statistic">
            <span className="card-info-number" style={{ fontSize: '24px' }}>
              Attendance Today
            </span>
            <div className="card-title">
              <span style={{ color: '#1f1f1f' }}>Total</span>
              <span className="percentage">
                {listProject && listProject.length > 0 ? listProject.length : 0}{' '}
                projects
              </span>
            </div>
            <div className="pro head">
              <div className="proj-name">Project</div>
              <div className="joined">Joined</div>
              <div className="absent">Absent</div>
            </div>
            {listAllAttendance?.map((item: any, key: any) => {
              return (
                <div className="pro" key={key}>
                  <div className="proj-name">{item.projectName}</div>
                  <div className="joined">{getAmountJoined(item)}</div>
                  <div className="absent">{getAmountAbsent(item)}</div>
                </div>
              );
            })}
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="card-statistic">
            <span className="card-info-number" style={{ fontSize: '24px' }}>
              Tasks
            </span>
            <div className="card-title">
              <span style={{ color: '#1f1f1f' }}>Total</span>
              <span className="percentage">
                {listTasks?.taskCompleted?.length +
                  listTasks?.taskInprogress?.length +
                  listTasks?.taskPending?.length}{' '}
                task
              </span>
            </div>

            <Task
              value={
                (listTasks?.taskCompleted?.length /
                  (listTasks?.taskCompleted?.length +
                    listTasks?.taskInprogress?.length +
                    listTasks?.taskPending?.length)) *
                100
              }
            >
              <div className="top">
                <div className="name pending">Pending Tasks</div>
                <div className="vals">
                  {listTasks?.taskPending?.length} /{' '}
                  {listTasks?.taskCompleted?.length +
                    listTasks?.taskInprogress?.length +
                    listTasks?.taskPending?.length}
                </div>
              </div>
              <div className="bottom">
                <div className="line">
                  <div className="value pending"></div>
                </div>
              </div>
            </Task>
            <Task
              value={
                (listTasks?.taskInprogress?.length /
                  (listTasks?.taskCompleted?.length +
                    listTasks?.taskInprogress?.length +
                    listTasks?.taskPending?.length)) *
                100
              }
            >
              <div className="top">
                <div className="name inprogress">Inprogress Tasks</div>
                <div className="vals">
                  {listTasks?.taskInprogress?.length} /{' '}
                  {listTasks?.taskCompleted?.length +
                    listTasks?.taskInprogress?.length +
                    listTasks?.taskPending?.length}
                </div>
              </div>
              <div className="bottom">
                <div className="line">
                  <div className="value inprogress"></div>
                </div>
              </div>
            </Task>
            <Task
              value={
                (listTasks?.taskCompleted?.length /
                  (listTasks?.taskCompleted?.length +
                    listTasks?.taskInprogress?.length +
                    listTasks?.taskPending?.length)) *
                100
              }
            >
              <div className="top">
                <div className="name completed">Completed Tasks</div>
                <div className="vals">
                  {listTasks?.taskCompleted?.length} /{' '}
                  {listTasks?.taskCompleted?.length +
                    listTasks?.taskInprogress?.length +
                    listTasks?.taskPending?.length}
                </div>
              </div>
              <div className="bottom">
                <div className="line">
                  <div className="value completed"></div>
                </div>
              </div>
            </Task>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default DashboardAdmin;
