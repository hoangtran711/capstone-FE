import { Wrapper } from './AddStudent.styled';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useAddStudentToProject, useGetAllEmployee } from 'queries/useEmployee';
import { IEmployee } from 'modules/Employee/Employee';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { toast } from 'react-toastify';
// import { useGetStudentOfProject } from 'queries/useProjects';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
export const AddStudent = ({
  setVisibility,
  projectID,
  reload,
  setReload,
}: any) => {
  const [students, setStudents] = React.useState<Array<IEmployee>>([]);
  const onAdd = useAddStudentToProject();
  const onGetAllUsers = useGetAllEmployee();
  // const { data: listStudent } = useGetStudentOfProject(projectID);
  React.useEffect(() => {
    onGetAllUsers().then((rs: any) => {
      let tmp = rs?.filter((item: any) => item.role === 'Student');
      setStudents(tmp);
    });
  }, []);

  return (
    <Wrapper>
      <div className="overlay" onClick={() => setVisibility(false)}></div>
      <div className="content">
        <div className="close" onClick={() => setVisibility(false)}>
          <CloseIcon className="ic" />
        </div>
        <div className="title">ADD STUDENT</div>
        <div className="list-user">
          <div className="user head">
            <div className="id">ID</div>
            <div className="username">Username</div>
            <div className="name">Name</div>
            <div className="action">
              <div className="btn-add">Actions</div>
            </div>
          </div>
          {students?.map((item: IEmployee, key) => {
            // let isJoined = listStudent?.findIndex(
            //   (st: any) => st._id === item._id,
            // );
            // console.log(listStudent);
            return (
              <div className="user" key={key}>
                <div className="id">{item._id}</div>
                <div className="username">{item.username}</div>
                <div className="name">
                  {item.lastName} {item.firstName}
                </div>
                <div className="action">
                  {/* {isJoined !== -1 ? (
                    <HowToRegIcon
                      className="ic-joined"
                      onClick={() => {
                        toast.info('Student already joined to this class');
                      }}
                    />
                  ) : ( */}
                  <div
                    className="btn-add"
                    onClick={() => {
                      onAdd(item._id, projectID)
                        .then((rs: any) => {
                          if (rs) {
                            toast.success('Add student successfull');
                            setReload(!reload);
                            setVisibility(false);
                          }
                        })
                        .catch((err: any) => {
                          toast.error(err);
                        });
                    }}
                  >
                    <GroupAddIcon />
                  </div>
                  {/* )} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
