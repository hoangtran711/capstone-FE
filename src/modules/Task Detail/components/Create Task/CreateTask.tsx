import React, { useCallback } from 'react';
import { Wrapper } from './CreateTask.styled';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { ImageUploader } from 'components/FileUploader';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useCreateTask } from 'queries/useTask';

export const CreateTask = ({
  setVisibility,
  projId,
  reload,
  setReload,
}: any) => {
  const today = new Date();
  const nexdate = new Date();
  nexdate.setDate(today.getDate() + 1);
  const [startDate, setStart] = React.useState(
    dayjs(today).format('YYYY-MM-DD'),
  );
  const acpt = {
    '*': [],
  };
  const onCreateTask = useCreateTask();
  const [file, setFiles] = React.useState<any>();
  const onFileUploaderDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles[0]);
    },
    [setFiles],
  );
  const [endDate, setEnd] = React.useState(dayjs(nexdate).format('YYYY-MM-DD'));
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    if (file && data) {
      const form = new FormData();
      form.append('title', data.title);
      form.append('description', data.description);
      form.append('projectId', projId);
      form.append('startTime', startDate);
      form.append('endTime', endDate);
      form.append('files', file);
      onCreateTask(form).then((rs: any) => {
        if (rs) {
          toast.success('Task created successfull');
          setReload(!reload);
          setVisibility(false);
        }
      });

      console.log(form);
    } else {
      toast.error('Please choose a file');
    }
  };
  return (
    <Wrapper>
      <div className="overlay" onClick={() => setVisibility(false)}></div>
      <div className="content">
        <div className="close">
          <CloseIcon className="ic" />
        </div>
        <div className="title">Create Task</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="desc ">
            <div className="item">
              <div className="label">Title</div>
              <input type="text" className="value" {...register('title')} />
              <span>{errors.title?.message?.toString()}</span>
            </div>
          </div>
          <div className="items">
            <div className="item secondary">
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
            </div>
          </div>
          <div className="desc">
            <div className="item">
              <div className="label">Description</div>
              <textarea
                className="value"
                placeholder="Enter your description here"
                {...register('description')}
              ></textarea>
              <span>{errors.description?.message?.toString()}</span>
            </div>
          </div>
          <div className="desc">
            <ImageUploader
              disablePreview
              accepts={acpt}
              max={10}
              onDrop={onFileUploaderDrop}
            />
            {file && (
              <div className="list-item">
                <div className="list-left">
                  <a href="">
                    <UploadFileIcon className="file-icon" />
                  </a>
                </div>
                <div className="list-right">
                  <div>
                    <a href={file?.path}>{file?.path} </a>
                  </div>
                  <div>Size: {file?.size}</div>{' '}
                </div>
              </div>
            )}
          </div>
          <div className="btn-create-wrapper">
            <button
              type="submit"
              className="btn"
              // disabled={!isDirty || !isValid}
            >
              {isSubmitting ? '...' : 'Create'}
            </button>{' '}
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
const schema = yup
  .object({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    // maxJoin: yup.number().positive().integer().required('Max join is required'),
  })
  .required();
