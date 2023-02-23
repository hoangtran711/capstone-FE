import { Grid } from '@mui/material';
import React from 'react';
import { Task, Wrapper } from './DashboardAdmin.styled';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubjectIcon from '@mui/icons-material/Subject';
import {
  IProject,
  useGetAllProjects,
  useGetProjectAttendance,
} from 'queries/useProjects';
import { IEmployee } from 'modules/Employee/Employee';
import { useGetAllEmployee } from 'queries/useEmployee';
import { useGetALlTaskOfTeacher } from 'queries/useTask';
import { useGetRequestCurrentUser } from 'queries/useRequest';
import moment from 'moment';

const DashboardAdmin = () => {
  const [listProject, setListProject] = React.useState<Array<IProject>>([]);
  const [listStudent, setListStudent] = React.useState<Array<IEmployee>>();
  const [listTasks, setListTask] = React.useState<any>();
  const onnGetAllEmployee = useGetAllEmployee();
  const onGetAllProject = useGetAllProjects();
  const onGetAllTaskOfTeacher = useGetALlTaskOfTeacher();
  const onGetProjectAttendance = useGetProjectAttendance();
  const { data: listRequests } = useGetRequestCurrentUser();
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
  console.log(listTasks);
  const getAmountAbsent = (item: any) => {
    let lst = item?.arr?.filter((it: any) => {
      let tmp = it?.timesUntilNow?.filter(
        (t: any) =>
          new Date(
            moment(t?.date, 'dddd, MMMM Do YYYY, h:mm:ss').format('L'),
          ).getTime() === new Date(moment().format('L')).getTime() && !t?.leave,
      );
      console.log(tmp.length);
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
      console.log(tmp.length);
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

  return (
    <Wrapper>
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
              Pending Requests
            </span>
            <div className="card-title">
              <span style={{ color: '#1f1f1f' }}>Requests</span>
              <span className="percentage">
                {' '}
                {listRequests && listRequests?.length > 0
                  ? listRequests?.length
                  : 0}
              </span>
            </div>

            <div className="pendings">
              {listRequests
                ?.filter((item: any) => item.status === 'Pending')
                ?.map((req: any, key: any) => {
                  return (
                    <div className="req" key={key}>
                      <div className="top">
                        <div className="user">
                          <img
                            src={req?.userInfo?.avatar}
                            alt="aa"
                            className="ava"
                          />
                          <div className="name">{req?.userInfo?.username}</div>
                        </div>
                        <div className="status">
                          <div className="txt">{req?.status}</div>
                        </div>
                      </div>
                      <div className="bottom">
                        Join : {req?.projectInfo?.projectName}
                      </div>
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
