import React from 'react';
import { Wrapper } from './CreateProject.styled';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useCreateProject } from 'queries/useProjects';
const MAX_JOIN_DEFAULT = 99;
const ATTENDANCE_AFTER_DEFAULT = 14;
export const CreateProject = ({ setVisibility, reload, setReload }: any) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onCreateProject = useCreateProject();
  console.log(reload);

  const onSubmit = (data: any) => {
    let payload = { ...data, startDate, endDate, learnDate };
    payload.maxJoin = Number(payload.maxJoin);
    payload.attendanceAfterMinute = Number(payload.attendanceAfterMinute);
    payload.totalLesson = Number(payload.totalLesson);
    console.log(payload);
    onCreateProject(payload).then((rs: any) => {
      if (rs) {
        toast.success(`Project ${payload.projectName} created successfull`);
        setReload(!reload);
        setVisibility(false);
      }
    });
  };
  const [startDate, setStart] = React.useState('2022-01-01');
  const [endDate, setEnd] = React.useState('2022-01-02');
  const [learnDate, setLearnDate] = React.useState<Array<string>>([]);
  const [learnDateShow, setLearnDateShow] = React.useState<Array<string>>([]);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));

  return (
    <Wrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="overlay" onClick={() => setVisibility(false)}></div>
        <div className="content">
          <div className="close" onClick={() => setVisibility(false)}>
            <CloseIcon className="ic" />
          </div>
          <div className="title">Create Project</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="project-name desc">
              <div className="item">
                <div className="label">Project Name</div>
                <input
                  type="text"
                  className="value"
                  {...register('projectName')}
                  placeholder="Enter your project name"
                />
                <p>{errors.projectName?.message?.toString()}</p>
              </div>
            </div>
            <div className="items first">
              <div className="item">
                <div className="label">Start Date</div>
                <TextField
                  type="date"
                  defaultValue={startDate}
                  onChange={(e) => {
                    setStart(e.target.value);
                  }}
                />
              </div>
              <div className="item">
                <div className="label">End Date</div>
                <TextField
                  type="date"
                  defaultValue={endDate}
                  onChange={(e) => {
                    setEnd(e.target.value);
                  }}
                />{' '}
              </div>
              <div className="item secondary">
                <div className="item">
                  <div className="label">Max join</div>
                  <select className="value" {...register('maxJoin')}>
                    {Array.from(Array(MAX_JOIN_DEFAULT).keys()).map(
                      (item, key) => {
                        return (
                          <option value={item + 1} key={key}>
                            {item + 1}
                          </option>
                        );
                      },
                    )}
                  </select>
                </div>
                <div className="item">
                  <div className="label">Total lesson</div>
                  <select className="value" {...register('totalLesson')}>
                    {Array.from(Array(ATTENDANCE_AFTER_DEFAULT).keys()).map(
                      (item, key) => {
                        return (
                          <option value={item + 1} key={key}>
                            {item + 1} {item + 1 > 1 ? 'lessons' : 'lesson'}
                          </option>
                        );
                      },
                    )}
                  </select>{' '}
                </div>
              </div>
              <div className="item third">
                <div className="item">
                  <div className="label">Attendance after</div>
                  <select
                    className="value"
                    {...register('attendanceAfterMinute')}
                  >
                    {Array.from(Array(ATTENDANCE_AFTER_DEFAULT).keys()).map(
                      (item, key) => {
                        return (
                          <option value={item + 1} key={key}>
                            {item + 1} {item + 1 > 1 ? 'minutes' : 'minute'}
                          </option>
                        );
                      },
                    )}
                  </select>{' '}
                </div>
              </div>
            </div>
            <div className="desc">
              <div className="item">
                <div className="label">Description</div>
                <textarea
                  className="value"
                  placeholder="Enter your project description here"
                  {...register('projectDescription')}
                ></textarea>
                <p>{errors.projectDescription?.message?.toString()}</p>
              </div>
            </div>
            <div className="desc">
              <div className="item">
                <div className="label">Learn Date</div>
                <div className="btn-add-wrapper">
                  <DateTimePicker
                    className="value"
                    value={value}
                    onChange={(value) => {
                      setValue(value);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <div
                    className="btn-add"
                    onClick={() => {
                      let flag = false;
                      for (let i = 0; i < learnDate.length; i++) {
                        if (
                          new Date(learnDate[i]).getTime() ===
                          new Date(value?.toISOString() || '').getTime()
                        ) {
                          flag = true;
                        }
                      }
                      if (flag) {
                        toast.info('Time overlap');
                        return;
                      }

                      let tmp = learnDate;
                      tmp.push(value?.toISOString() || '');
                      setLearnDate([...tmp]);

                      let tmp2 = learnDateShow;
                      tmp2.push(value?.format('H:mm - dddd MM/YYYY') || '');
                      setLearnDateShow([...tmp2]);
                    }}
                  >
                    Add
                  </div>
                </div>
              </div>
            </div>
            {learnDateShow.length > 0 && (
              <div className="desc">
                <div className="item lst">
                  <div className="label">List Learn Date : </div>
                  {learnDateShow?.map((item, key) => {
                    return <span key={key}>{item}</span>;
                  })}
                </div>
              </div>
            )}
            <div className="btn-create-wrapper">
              <button
                type="submit"
                className="btn"
                // disabled={!isDirty || !isValid}
              >
                {isSubmitting ? '...' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </LocalizationProvider>
    </Wrapper>
  );
};
const schema = yup
  .object({
    projectName: yup.string().required('Project Name is required'),
    projectDescription: yup
      .string()
      .required('Project Description is required'),
    // maxJoin: yup.number().positive().integer().required('Max join is required'),
  })
  .required();
