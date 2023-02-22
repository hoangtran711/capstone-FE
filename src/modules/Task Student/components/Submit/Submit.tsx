import React, { useCallback } from 'react';
import { Wrapper } from './Submit.styled';
import CloseIcon from '@mui/icons-material/Close';

import { ImageUploader } from 'components/FileUploader';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useSubmitTask } from 'queries/useTask';

export const Submit = ({ setVisibility, taskId, reload, setReload }: any) => {
  const acpt = {
    '*': [],
  };
  const onSubmitTask = useSubmitTask();
  const [file, setFiles] = React.useState<any>();
  const onFileUploaderDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    },
    [setFiles],
  );
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(file);
  const onSubmit = (data: any) => {
    if (file && data && taskId) {
      const form = new FormData();

      form.append('comment', data.comment);
      form.append('taskId', taskId);
      form.append('files', file);
      onSubmitTask(form).then((rs: any) => {
        if (rs) {
          toast.success('You submit successfull');
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
          <CloseIcon className="ic" onClick={() => setVisibility(false)} />
        </div>
        <div className="title">Submit</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="desc">
            <div className="item">
              <div className="label">Comment</div>
              <textarea
                className="value"
                placeholder="Enter your comment here"
                {...register('comment')}
              ></textarea>
              <span>{errors.comment?.message?.toString()}</span>
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
              {isSubmitting ? '...' : 'SUBMIT'}
            </button>{' '}
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
const schema = yup
  .object({
    comment: yup.string().required('Comment is required'),
    // maxJoin: yup.number().positive().integer().required('Max join is required'),
  })
  .required();
