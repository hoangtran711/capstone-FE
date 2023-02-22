import React from 'react';
import { Wrapper } from './Submissions.styled';
import CloseIcon from '@mui/icons-material/Close';
import { useGetAllEmployee } from 'queries/useEmployee';
import { IEmployee } from 'modules/Employee/Employee';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export const Submissions = ({
  setVisibility,
  submmitedList,
  reload,
  setReload,
}: any) => {
  console.log(submmitedList);
  const [students, setStudents] = React.useState<Array<IEmployee>>([]);
  const onGetAllEmployee = useGetAllEmployee();
  React.useEffect(() => {
    onGetAllEmployee().then((rs: any) => {
      setStudents(rs);
    });
  }, []);
  console.log(students);

  return (
    <Wrapper>
      <div className="overlay" onClick={() => setVisibility(false)}></div>
      <div className="content">
        <div className="close" onClick={() => setVisibility(false)}>
          <CloseIcon className="ic" />
        </div>
        <div className="title">Submissions</div>
        <div className="list">
          <div className="row head">
            <div className="stt">#</div>
            <div className="name">Name</div>
            <div className="comment">Comment</div>
            <div className="files">Files</div>
          </div>
          {submmitedList?.map((it: any, key: any) => {
            return (
              <div className="row" key={key}>
                <div className="stt">{key + 1}</div>
                <div className="name">
                  {
                    students?.find((st: any) => st?._id === it?.userId)
                      ?.username
                  }
                </div>
                <div className="comment">{it?.comment}</div>
                <div className="files">
                  <div className="files">
                    {it?.files?.length > 0
                      ? it?.files?.map((f: any, key: any) => {
                          return (
                            <div
                              className="file"
                              onClick={() => window.open(f)}
                              key={key}
                            >
                              file {key + 1}
                            </div>
                          );
                        })
                      : '...'}
                    <FileDownloadIcon className="ic" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
