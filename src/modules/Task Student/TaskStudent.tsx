import React, { memo, useState } from 'react';
import { SidebarLayout } from 'components';
import { Wrapper } from './TaskStudent.styled';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';

import { useGetALlTaskOfStudentToday } from 'queries/useTask';
import { useHistory } from 'react-router-dom';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { Submit } from './components/Submit/Submit';
import { toast } from 'react-toastify';
import moment from 'moment';

const TaskStudent = () => {
  const [reload, setReload] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [tasks, setTasks] = useState<Array<any>>([]);
  const [tasksTemp, setTasksTemp] = useState<Array<any>>([]);
  const history = useHistory();
  const [isShowSubmit, setIsShowSubmit] = React.useState(false);
  const [activeTask, setActiveTask] = React.useState('');

  const onGetALlTaskOfStudentToday = useGetALlTaskOfStudentToday();

  React.useEffect(() => {
    onGetALlTaskOfStudentToday().then((rs: any) => {
      setTasks(rs);
      setTasksTemp(rs);
    });
  }, []);
  React.useEffect(() => {
    onGetALlTaskOfStudentToday().then((rs: any) => {
      setTasks(rs);
      setTasksTemp(rs);
    });
  }, [reload]);
  React.useEffect(() => {
    if (searchValue !== '') {
      setTasks(
        tasks?.filter((t: any) =>
          t.title.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      );
    } else {
      setTasks(tasksTemp);
    }
  }, [searchValue]);

  return (
    <SidebarLayout>
      <Wrapper>
        {isShowSubmit && (
          <Submit
            reload={reload}
            setReload={setReload}
            setVisibility={setIsShowSubmit}
            taskId={activeTask}
          />
        )}
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
              label="Search by task name..."
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Grid>
          <div className="projects">
            <div className="project head">
              <div className="name">Name</div>
              <div className="start">Start</div>
              <div className="end">End</div>
              <div className="submission">Submission</div>
              <div className="files">Files</div>
              <div className="actions">Actions</div>
            </div>
            {tasks?.map((pro: any, key: any) => {
              return (
                <div className="project" key={key} onClick={() => {}}>
                  <div className="name">{pro?.title}</div>

                  <div className="start">{pro?.startTime}</div>
                  <div className="end">{pro?.endTime}</div>

                  <div className="submission">
                    {pro?.isSubmited ? (
                      <CheckCircleIcon style={{ color: '#55ce63' }} />
                    ) : (
                      <CancelIcon style={{ color: 'red' }} />
                    )}
                  </div>
                  <div className="files">
                    Task files :
                    {pro?.files?.map((f: any, key: any) => {
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
                  <div className="actions">
                    {moment(pro?.endTime).toDate().getTime() >=
                    new Date().getTime() ? (
                      <div
                        className={
                          pro?.isSubmited ? 'submit disable' : 'submit'
                        }
                        onClick={() => {
                          if (!pro?.isSubmited) {
                            setActiveTask(pro?._id);
                            setIsShowSubmit(true);
                          } else {
                            toast.info('Your submission has been recorded');
                          }
                        }}
                      >
                        Submit
                      </div>
                    ) : (
                      'Time out'
                    )}
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

export default memo(TaskStudent);
