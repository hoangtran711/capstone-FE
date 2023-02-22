import React, { memo, useState } from 'react';
import { SidebarLayout } from 'components';
import { Wrapper } from './TaskDetail.styled';
import AddIcon from '@mui/icons-material/Add';
// import { TextField } from '@mui/material';
import { Grid } from '@mui/material';

import { useGetDetailProject } from 'queries/useProjects';
import { useGetAllTaskStatusByProject } from 'queries/useTask';
import { useParams } from 'react-router-dom';
import { CreateTask } from './components/Create Task/CreateTask';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InfoIcon from '@mui/icons-material/Info';
import { Submissions } from './components/Submissions/Submissions';
import { toast } from 'react-toastify';
const requestStatus = [
  {
    value: 'Pending',
    label: 'Pending',
  },
  {
    value: 'In Progress',
    label: 'inprogress',
  },
  {
    value: 'Completed',
    label: 'completed',
  },
];

const TaskDetail = () => {
  let { id } = useParams<any>();

  const [isShowCreateTask, setIsShowCreateTask] = useState(false);
  const [isShowSubmissions, setIsShowSubmissions] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [projects, setProjects] = useState<Array<any>>([]);
  const [submmitedList, setSubmmitedList] = useState<Array<any>>([]);

  const [title, setTitle] = React.useState<string>('');
  const [task, setTask] = React.useState<any>();
  const [reload, setReload] = React.useState<any>();

  const onGetAllTaskStatusByProject = useGetAllTaskStatusByProject();
  const { data: projectDetail } = useGetDetailProject(id);
  const handleClickOpen = () => {
    setIsShowCreateTask(true);
  };
  React.useEffect(() => {
    onGetAllTaskStatusByProject(id)?.then((rs: any) => {
      setTask(rs);
    });
  }, []);
  React.useEffect(() => {
    onGetAllTaskStatusByProject(id)?.then((rs: any) => {
      setTask(rs);
    });
  }, [reload]);
  console.log(task);

  return (
    <SidebarLayout>
      <Wrapper>
        {isShowCreateTask && (
          <CreateTask
            reload={reload}
            setReload={setReload}
            projId={id}
            setVisibility={setIsShowCreateTask}
          />
        )}
        {isShowSubmissions && (
          <Submissions
            reload={reload}
            setReload={setReload}
            submmitedList={submmitedList}
            setVisibility={setIsShowSubmissions}
          />
        )}
        <div className="header">
          <div className="header-left">
            <span className="welcome">{projectDetail?.projectName}</span>
            <span className="breadcrumb"></span>
          </div>
          {true && (
            <div className="header-right">
              <div className="add-icon" onClick={handleClickOpen}>
                <AddIcon className="icon" />
                Create Task
              </div>
            </div>
          )}
        </div>
        <Grid spacing={3} className="grid" container>
          {/* <Grid item xs={3}>
            <div className="stats-info total">
              <h6>Total Projects</h6>
              <h4>{projects?.length}</h4>
            </div>
          </Grid> */}
          <Grid item xs={4}>
            <div className="task-wrapper pending">
              <div className="stats-info pending">
                <h6>Pending Tasks</h6>
                <h4>
                  {task?.taskPending?.length || 0} <span>tasks</span>
                </h4>
              </div>
              <div className="tasks">
                {task?.taskPending?.length > 0 ? (
                  task?.taskPending?.map((item: any, key: any) => {
                    return (
                      <div className="task" key={key}>
                        <div className="title">{item?.title}</div>
                        <div className="date">
                          <div className="start">Start : {item?.startTime}</div>
                          <div className="end">End : {item?.endTime}</div>
                        </div>
                        <div className="files">
                          Task files :
                          {item?.files?.map((f: any, key: any) => {
                            return (
                              <div
                                className="file"
                                onClick={() => window.open(f)}
                                key={key}
                              >
                                file {key + 1}
                              </div>
                            );
                          })}
                          <FileDownloadIcon className="ic" />
                        </div>
                        <div
                          className="files subs"
                          onClick={() => {
                            if (item?.submmited?.length > 0) {
                              setIsShowSubmissions(true);
                              setSubmmitedList(item?.submmited);
                            } else {
                              toast.info('No one submmited yet');
                            }
                          }}
                        >
                          Submission files :
                          <InfoIcon className="more" />
                          <div className="submmited">
                            {item?.submmited?.length > 0
                              ? item?.submmited?.length
                              : 0}{' '}
                            submmited
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="empty">Don{"'"}t have any task here</div>
                )}
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="task-wrapper inpro">
              <div className="stats-info inpro">
                <h6>In Progress Tasks</h6>
                <h4>
                  {task?.taskInprogress?.length || 0} <span>tasks</span>
                </h4>
              </div>
              <div className="tasks ">
                {task?.taskInprogress?.length > 0 ? (
                  task?.taskInprogress?.map((item: any, key: any) => {
                    return (
                      <div className="task" key={key}>
                        <div className="title">{item?.title}</div>
                        <div className="date">
                          <div className="start">Start : {item?.startTime}</div>
                          <div className="end">End : {item?.endTime}</div>
                        </div>
                        <div className="files">
                          Task files :
                          {item?.files?.map((f: any, key: any) => {
                            return (
                              <div
                                className="file"
                                onClick={() => window.open(f)}
                                key={key}
                              >
                                file {key + 1}
                              </div>
                            );
                          })}
                          <FileDownloadIcon className="ic" />
                        </div>
                        <div
                          className="files subs"
                          onClick={() => {
                            if (item?.submmited?.length > 0) {
                              setIsShowSubmissions(true);
                              setSubmmitedList(item?.submmited);
                            } else {
                              toast.info('No one submmited yet');
                            }
                          }}
                        >
                          Submission files :
                          <InfoIcon className="more" />
                          <div className="submmited">
                            {item?.submmited?.length > 0
                              ? item?.submmited?.length
                              : 0}{' '}
                            submmited
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="empty">Don{"'"}t have any task here</div>
                )}
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="task-wrapper completed">
              <div className="stats-info completed">
                <h6>Completed Tasks</h6>
                <h4>
                  {task?.taskCompleted?.length || 0} <span>tasks</span>
                </h4>
              </div>
              <div className="tasks">
                {task?.taskCompleted?.length > 0 ? (
                  task?.taskCompleted?.map((item: any, key: any) => {
                    return (
                      <div className="task" key={key}>
                        <div className="title">{item?.title}</div>
                        <div className="date">
                          <div className="start">Start : {item?.startTime}</div>
                          <div className="end">End : {item?.endTime}</div>
                        </div>
                        <div className="files">
                          Task files :
                          {item?.files?.map((f: any, key: any) => {
                            return (
                              <div
                                className="file"
                                onClick={() => window.open(f)}
                                key={key}
                              >
                                file {key + 1}
                              </div>
                            );
                          })}
                          <FileDownloadIcon className="ic" />
                        </div>
                        <div
                          className="files subs"
                          onClick={() => {
                            if (item?.submmited?.length > 0) {
                              setIsShowSubmissions(true);
                              setSubmmitedList(item?.submmited);
                            } else {
                              toast.info('No one submmited yet');
                            }
                          }}
                        >
                          Submission files :
                          <InfoIcon className="more" />
                          <div className="submmited">
                            {item?.submmited?.length > 0
                              ? item?.submmited?.length
                              : 0}{' '}
                            submmited
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="empty">Don{"'"}t have any task here</div>
                )}
              </div>
            </div>
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              fullWidth
              className="text-field textField"
              label="Student Name"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Grid> */}
          <div className="projects">
            {projects?.map((pro: any, key: any) => {
              let taskInfo: any;
              onGetAllTaskStatusByProject(pro?._id).then((rs: any) => {
                taskInfo = rs;
              });
              return (
                <div className="project" key={key}>
                  <div className="top">
                    <div className="name">{pro?.projectName}</div>
                    <div className="date">
                      <div className="start">Start : {pro?.startDate}</div>
                      <div className="end">End : {pro?.endDate}</div>
                    </div>
                    <div className="task-info">
                      <div className="pending">
                        Pending :{' '}
                        {taskInfo?.taskPending?.length > 0
                          ? taskInfo?.taskPending?.length
                          : 0}{' '}
                        task
                      </div>
                      <div className="inprogress">
                        In Progress :{' '}
                        {taskInfo?.taskInProgress?.length > 0
                          ? taskInfo?.taskInProgress?.length
                          : 0}{' '}
                        task
                      </div>
                      <div className="completed">
                        Completed :{' '}
                        {taskInfo?.taskCompleted?.length > 0
                          ? taskInfo?.taskCompleted?.length
                          : 0}{' '}
                        task
                      </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="peoples">
                      {pro?.studentJoined
                        ?.slice(0, 5)
                        .map((st: any, key: any) => {
                          return <img src={st?.avatar} alt="ava" key={key} />;
                        })}
                      ...
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Grid>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(TaskDetail);
