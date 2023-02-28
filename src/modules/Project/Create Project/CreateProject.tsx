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
import { MapPickerAlert } from 'components/MapPicker';
import { Stack } from '@mui/system';

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

  const onSubmit = (data: any) => {
    let payload = { ...data, startDate, endDate, learnDate };
    let flag = false;
    learnDate?.map((d: any) => {
      if (!d.location.lng || !d.location.lat) {
        flag = true;
      }
    });
    if (flag) {
      toast.error('Please choose location for each of learn date');
      return;
    }
    payload.maxJoin = Number(payload.maxJoin);
    payload.attendanceAfterMinute = Number(payload.attendanceAfterMinute);
    payload.totalLesson = Number(payload.totalLesson);
    onCreateProject(payload).then((rs: any) => {
      if (rs) {
        toast.success(`Project ${payload.projectName} created successfull`);
        setReload(!reload);
        setVisibility(false);
      }
    });
  };
  const today = new Date();
  const nexdate = new Date();
  nexdate.setDate(today.getDate() + 1);

  const [startDate, setStart] = React.useState(
    dayjs(today).format('YYYY-MM-DD'),
  );
  const [endDate, setEnd] = React.useState(dayjs(nexdate).format('YYYY-MM-DD'));
  const [learnDate, setLearnDate] = React.useState<Array<any>>([]);
  const [learnDateShow, setLearnDateShow] = React.useState<Array<string>>([]);
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));
  console.log(learnDate);
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
                        console.log(new Date(learnDate[i]?.time).getTime());
                        console.log(
                          new Date(value?.toISOString() || '').getTime(),
                        );
                        if (
                          new Date(learnDate[i]?.time).getTime() ===
                            new Date(value?.toISOString() || '').getTime() ||
                          Math.abs(
                            new Date(learnDate[i]?.time).getTime() -
                              new Date(value?.toISOString() || '').getTime(),
                          ) <
                            4 * 60 * 60 * 1000
                        ) {
                          flag = true;
                        }
                      }
                      if (flag) {
                        toast.info('Time invalid');
                        return;
                      }

                      let tmp = learnDate;
                      tmp.push({
                        time: value?.toISOString(),
                        location: { lat: '', lng: '' },
                      });
                      setLearnDate([...tmp]);

                      let tmp2 = learnDateShow;
                      tmp2.push(value?.format('H:mm - dddd') || '');
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
                  {learnDateShow?.map((item, key: number) => {
                    return (
                      <Stack
                        key={key}
                        direction="row"
                        justifyContent="space-between"
                        className="learn-date-item"
                      >
                        <span>{item}</span>
                        <div className="btn">
                          <MapPickerAlert
                            submit={(data) => {
                              console.log(data);
                              learnDate[key].location.lat = data?.lat;
                              learnDate[key].location.lng = data?.lng;
                            }}
                          />
                          <div
                            className="delete"
                            onClick={() => {
                              const temp = [...learnDateShow];
                              const temp2 = [...learnDate];
                              temp2.splice(key, 1);
                              temp.splice(key, 1);
                              setLearnDate(temp2);
                              setLearnDateShow(temp);
                            }}
                          >
                            Delete
                          </div>
                        </div>
                      </Stack>
                    );
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
