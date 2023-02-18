import React, { memo } from 'react';
import { SidebarLayout } from 'components';
import { Wrapper } from './Project.styled';
import { Grid } from '@mui/material';

// import AppsIcon from '@mui/icons-material/Apps';
// import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
import { CreateProject } from './Create Project/CreateProject';
import { IProject, useGetAllProjects } from 'queries/useProjects';
import { useGetDetailOfMe } from 'queries/useEmployee';
import { IEmployee } from 'modules/Employee/Employee';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const majors = [
  {
    value: 'Information Technology',
    label: 'Information Technology',
  },
  {
    value: 'Food Technology',
    label: 'Food Technology',
  },
  {
    value: 'Business Administration',
    label: 'Business Administration',
  },
  {
    value: 'English Studies',
    label: 'English Studies',
  },
];

const Project = () => {
  const [isShowCreateProject, setIsShowCreateProject] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const [me, setMe] = React.useState<IEmployee>({
    email: '',
    password: '',
    username: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    _id: '',
  });
  const [searchvalue, setSearchValue] = React.useState<string>('');
  const [listProject, setListProject] = React.useState<Array<IProject>>([]);
  const [listProjectTemp, setListProjectTemp] = React.useState<Array<IProject>>(
    [],
  );
  const onGetAllProject = useGetAllProjects();
  const onGetDetailOfMe = useGetDetailOfMe();
  React.useEffect(() => {
    onGetAllProject().then((rs: any) => {
      if (rs) {
        setListProject(rs);
        setListProjectTemp(rs);
      }
    });
    onGetDetailOfMe().then((rs: any) => {
      if (rs) {
        setMe(rs);
      }
    });
  }, []);
  console.log(listProject);
  const search = () => {
    if (searchvalue === '') {
      setListProject(listProjectTemp);
      return;
    }
    setListProject(
      listProject?.filter((item: IProject) =>
        item.projectName.toLowerCase().includes(searchvalue.toLowerCase()),
      ),
    );
  };

  return (
    <SidebarLayout>
      <Wrapper>
        {isShowCreateProject && (
          <CreateProject
            setVisibility={setIsShowCreateProject}
            setReload={setReload}
            reload={reload}
          />
        )}
        <div className="header">
          <div className="header-left">
            <span className="welcome">Projects</span>
            <span className="breadcrumb">Dashboard / Projects</span>
          </div>
          <div className="header-right">
            {/* <div className="container-icon">
              <AppsIcon className="icon" />
            </div>
            <div className="container-icon">
              <MenuIcon className="icon" />
            </div> */}
            <div
              className="add-icon"
              onClick={() => setIsShowCreateProject(true)}
            >
              <AddIcon className="icon" />
              Add Project
            </div>
          </div>
        </div>
        <Grid spacing={3} className="grid" container>
          <Grid item xs={9}>
            <TextField
              fullWidth
              className="text-field"
              label="Project Name"
              type="text"
              onChange={(e) => {
                setSearchValue(e.target.value);
                if (e.target.value === '') {
                  setListProject(listProjectTemp);
                }
              }}
              onKeyDown={(e: any) => {
                if (e.key === 'Enter') {
                  search();
                }
              }}
            />
          </Grid>

          {/* <Grid item xs={3}>
            <TextField
              fullWidth
              className="select-major"
              id="outlined-select-currency-native"
              select
              label="Select Major"
              defaultValue="Information Technology"
              SelectProps={{
                native: true,
              }}
            >
              {majors.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid> */}
          <Grid item xs={3}>
            <div className="button-search" onClick={() => search()}>
              <a href="#">Search</a>
            </div>
          </Grid>
          {listProject ? (
            listProject?.map((item, key) => {
              return (
                <Grid item xs={3} key={key}>
                  <div className="card">
                    <div className="card-body">
                      <div className="dropdown"></div>
                      <h4 className="project-title">{item?.projectName}</h4>
                      <small>
                        <span className="text-xs">{item?.totalLesson}</span>
                        <span className="text-muted">
                          {' '}
                          {item?.totalLesson > 1 ? 'lessons' : 'lesson'}{' '}
                        </span>
                        <span className="text-xs">{item?.maxJoin}</span>
                        <span className="text-muted"> students</span>
                      </small>
                      <p className="text-muted">{item?.projectDescription}</p>
                      <div className="date">
                        <div className="deadline">
                          <div className="sub-title">Start Date: </div>
                          <div className="text-muted">{item?.startDate}</div>
                        </div>
                        <div className="deadline">
                          <div className="sub-title">End Date: </div>
                          <div className="text-muted">{item?.endDate}</div>
                        </div>
                      </div>
                      <div className="leader">
                        <div className="sub-title">Attendance after: </div>
                        <div className="text-muted">
                          {item?.attendanceAfterMinute}{' '}
                          {item?.attendanceAfterMinute > 1
                            ? 'minutes'
                            : 'minute'}
                        </div>
                      </div>
                      <div className="leader">
                        <div className="sub-title">Joined: </div>
                        <div className="text-muted">
                          {item?.joined}{' '}
                          {item?.joined > 1 ? 'students' : 'student'}
                        </div>
                      </div>
                      <div className="leader">
                        <div className="sub-title">Project Leader: </div>
                        <div className="text-muted">
                          <AccountCircleIcon className="ic" />
                          <strong>
                            {me?.lastName} {me?.firstName}
                          </strong>{' '}
                          - {me?.email}
                        </div>
                      </div>
                      <div className="team">
                        <div className="sub-title">Team: </div>
                        <ul className="team-member">
                          <li>
                            <div className="team-img mini-img">
                              <a href="#">
                                <img
                                  className="logo"
                                  src={require('assets/images/student/student-01.jpg')}
                                  alt="Logo"
                                />
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="team-img mini-img">
                              <a href="#">
                                <img
                                  className="logo"
                                  src={require('assets/images/student/avatar-13.jpg')}
                                  alt="Logo"
                                />
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="team-img mini-img">
                              <a href="#">
                                <img
                                  className="logo"
                                  src={require('assets/images/student/avatar-04.jpg')}
                                  alt="Logo"
                                />
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="team-img mini-img">
                              <a href="#">
                                <img
                                  className="logo"
                                  src={require('assets/images/student/avatar-11.jpg')}
                                  alt="Logo"
                                />
                              </a>
                            </div>
                          </li>
                          <li>
                            <div className="team-img mini-img">
                              <a href="#">
                                <img
                                  className="logo"
                                  src={require('assets/images/student/avatar-10.jpg')}
                                  alt="Logo"
                                />
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="progress">
                        <div className="sub-title">Progress</div>
                        <div className="progress-bar"></div>
                      </div>
                    </div>
                  </div>
                </Grid>
              );
            })
          ) : (
            <div className="loading">loading</div>
          )}
        </Grid>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(Project);
