import React, { memo, useState } from 'react';
import { SidebarLayout } from 'components';
import { Wrapper } from './TaskTeacher.styled';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';

import { useGetAllProjectsMe } from 'queries/useProjects';
import { useGetAllTaskStatusByProject } from 'queries/useTask';
import { useHistory } from 'react-router-dom';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
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
    value: 'In Progress',
    label: 'inprogress',
  },
  {
    value: 'Completed',
    label: 'completed',
  },
];

const TaskTeacher = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [projects, setProjects] = useState<Array<any>>([]);
  const [projectsTemp, setProjectsTemp] = useState<Array<any>>([]);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const onGetAllProject = useGetAllProjectsMe();
  const onGetAllTaskStatusByProject = useGetAllTaskStatusByProject();

  const handleClickOpen = () => {
    setOpen(true);
  };
  React.useEffect(() => {
    onGetAllProject().then((rs: any) => {
      setProjects(rs);
      setProjectsTemp(rs);
    });
  }, []);
  React.useEffect(() => {
    if (searchValue !== '') {
      setProjects(
        projects?.filter((t: any) =>
          t.projectName.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      );
    } else {
      setProjects(projectsTemp);
    }
  }, [searchValue]);
  console.log(projects);
  React.useEffect(() => {
    onGetAllProject().then((rs: any) => {
      setProjects(rs);
      setProjectsTemp(rs);
    });
  }, [projects]);
  return (
    <SidebarLayout>
      <Wrapper>
        <div className="header">
          <div className="header-left">
            <span className="welcome">Tasks</span>
            <span className="breadcrumb">Dashboard / Tasks</span>
          </div>
          {/* {true && (
            <div className="header-right">
              <div className="add-icon" onClick={handleClickOpen}>
                <AddIcon className="icon" />
                Create Request
              </div>
            </div>
          )} */}
        </div>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              className="text-field textField"
              label="Search by project name..."
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Grid>
          <div className="projects">
            {projects?.map((pro: any, key: any) => {
              return (
                <div
                  className="project"
                  key={key}
                  onClick={() => history.push(`/task/teacher/${pro?._id}`)}
                >
                  <div className="add">
                    <LibraryAddIcon /> Add Task
                  </div>
                  <div className="top">
                    <div className="name">{pro?.projectName}</div>
                    <div className="date">
                      <div className="start">Start : {pro?.startDate}</div>
                      <div className="end">End : {pro?.endDate}</div>
                    </div>
                    {/* <div className="task-info">
                      <div className="pending">
                        Pending :{' '}
                        {taskInfo && taskInfo?.taskPending?.length > 0
                          ? taskInfo?.taskPending?.length
                          : 0}{' '}
                        task
                      </div>
                      <div className="inprogress">
                        In Progress :{' '}
                        {taskInfo && taskInfo?.taskInprogress?.length > 0
                          ? taskInfo?.taskInprogress?.length
                          : 0}{' '}
                        task
                      </div>
                      <div className="completed">
                        Completed :{' '}
                        {taskInfo && taskInfo?.taskCompleted?.length > 0
                          ? taskInfo?.taskCompleted?.length
                          : 0}{' '}
                        task
                      </div>
                    </div> */}
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

export default memo(TaskTeacher);
