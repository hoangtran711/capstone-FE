import { Grid } from '@mui/material';
import React from 'react';
import { Task, Wrapper } from './DashboardStudent.styled';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SubjectIcon from '@mui/icons-material/Subject';
import { IProject, useGetAllProjectsMe } from 'queries/useProjects';
import { useGetALlTaskOfStudent } from 'queries/useTask';
import { useGetRequestCurrentUser } from 'queries/useRequest';
import moment from 'moment';
import { useGetCurrentSchedules } from 'queries/useEmployee';

const DashboardStudent = () => {
  const [listProject, setListProject] = React.useState<Array<IProject>>([]);
  const [listTasks, setListTask] = React.useState<any>();
  const [schedules, setSchedules] = React.useState<any>([]);

  const onGetAllProject = useGetAllProjectsMe();
  const onGetAllTaskOfTeacher = useGetALlTaskOfStudent();
  const onGetSchedules = useGetCurrentSchedules();
  const { data: listRequests } = useGetRequestCurrentUser();
  React.useEffect(() => {
    onGetAllProject().then((rs: any) => {
      if (rs) {
        setListProject(rs);
      }
    });

    onGetAllTaskOfTeacher().then((rs: any) => {
      setListTask(rs);
    });

    onGetSchedules().then((rs: any) => {
      setSchedules(rs);
    });
  }, []);

  return (
    <Wrapper>
      <span className="welcome">Welcome !</span>
      <span className="breadcrumb">Dashboard</span>
      <Grid spacing={3} className="grid" container>
        <Grid item xs={6}>
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
        <Grid item xs={6}>
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
              Schedules Today
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
              <div className="time">Time</div>
            </div>
            {schedules?.map((item: any, key: any) => {
              let name = listProject?.find(
                (i: any) => i?._id === item?.projectId,
              )?.projectName;

              return (
                <div className="pro" key={key}>
                  <div className="proj-name">{name}</div>
                  <div className="time">
                    {moment(
                      item?.time?.date,
                      'dddd, MMMM Do YYYY, h:mm:ss',
                    ).format('dddd, DD-MM-YYYY, kk:mm:ss a')}
                  </div>
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
                {(listTasks?.taskCompleted?.length +
                  listTasks?.taskInprogress?.length +
                  listTasks?.taskPending?.length) |
                  0}{' '}
                task
              </span>
            </div>

            <Task
              value={
                ((listTasks?.taskCompleted?.length /
                  (listTasks?.taskCompleted?.length +
                    listTasks?.taskInprogress?.length +
                    listTasks?.taskPending?.length)) *
                  100) |
                0
              }
            >
              <div className="top">
                <div className="name pending">Pending Tasks</div>
                <div className="vals">
                  {listTasks?.taskPending?.length | 0} /{' '}
                  {(listTasks?.taskCompleted?.length +
                    listTasks?.taskInprogress?.length +
                    listTasks?.taskPending?.length) |
                    0}
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
                ((listTasks?.taskInprogress?.length /
                  (listTasks?.taskCompleted?.length +
                    listTasks?.taskInprogress?.length +
                    listTasks?.taskPending?.length)) *
                  100) |
                0
              }
            >
              <div className="top">
                <div className="name inprogress">Inprogress Tasks</div>
                <div className="vals">
                  {listTasks?.taskInprogress?.length | 0} /{' '}
                  {(listTasks?.taskCompleted?.length +
                    listTasks?.taskInprogress?.length +
                    listTasks?.taskPending?.length) |
                    0}
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
                ((listTasks?.taskCompleted?.length /
                  (listTasks?.taskCompleted?.length +
                    listTasks?.taskInprogress?.length +
                    listTasks?.taskPending?.length)) *
                  100) |
                0
              }
            >
              <div className="top">
                <div className="name completed">Completed Tasks</div>
                <div className="vals">
                  {listTasks?.taskCompleted?.length | 0} /{' '}
                  {(listTasks?.taskCompleted?.length +
                    listTasks?.taskInprogress?.length +
                    listTasks?.taskPending?.length) |
                    0}
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

export default DashboardStudent;
