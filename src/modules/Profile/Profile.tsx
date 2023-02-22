import React, { memo } from 'react';
import { Wrapper } from './Profile.styled';
import { SidebarLayout } from 'components';
import { Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from 'react-router-dom';
import { useGetDetailEmployee } from 'queries/useEmployee';
import moment from 'moment';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { EditUser } from './components/Edit PopUp/EditUser';

export interface IUser {
  address: string;
  avatar: string;
  dateOfBirth: string;
  email: string;
  emailVerified: string;
  firstName: string;
  lastName: string;
  major: string;
  phoneNumber: string;
  username: string;
  _id: string;
}
const Profile = () => {
  let param: { id: string } = useParams();
  const [userInfo, setUserInfo] = React.useState<IUser>();
  const [isShowEdit, setIsShowEdit] = React.useState(false);
  const [reload, setReload] = React.useState(false);
  const onGetDetailEmployee = useGetDetailEmployee();
  React.useEffect(() => {
    onGetDetailEmployee(param.id).then((rs: any) => {
      setUserInfo(rs);
    });
    console.log(param.id);
  }, [param]);
  React.useEffect(() => {
    onGetDetailEmployee(param.id).then((rs: any) => {
      setUserInfo(rs);
    });
    console.log(param.id);
  }, [reload]);
  console.log(userInfo);

  return (
    <SidebarLayout>
      <Wrapper>
        {isShowEdit && (
          <EditUser
            reload={reload}
            setReload={setReload}
            setVisibility={setIsShowEdit}
            userInfo={userInfo}
          />
        )}
        <span className="welcome">Profile</span>
        <span className="breadcrumb">Dashboard / Profile</span>
        <div className="main-card">
          <div className="card-container">
            <Grid spacing={3} className="grid-1" container>
              <Grid item xs={2} className="personal-img">
                <a href="#">
                  <img
                    className="image"
                    src={userInfo?.avatar}
                    alt="personal-img"
                  />
                </a>
              </Grid>
              <Grid item xs={3.5}>
                <div className="info-left">
                  <h3>{userInfo?.username}</h3>
                  <div className="major text-mute ">
                    Major: {userInfo?.major}
                  </div>
                  <div className="class text-mute">
                    First Name : {userInfo?.firstName}
                  </div>
                  <div className="class text-mute">
                    Last Name : {userInfo?.lastName}
                  </div>
                  <div className="student-id"></div>
                  <div className="send-message">
                    <a href="#">Send Mail</a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <ul className="info-right">
                  <li>
                    <div className="title">
                      <span>Phone: </span>
                    </div>
                    <div className="text">{userInfo?.phoneNumber}</div>
                  </li>
                  <li>
                    <div className="title">Email: </div>
                    <div className="text">
                      <a
                        href="#"
                        className={
                          userInfo?.emailVerified === 'false'
                            ? 'isNotVerified'
                            : 'isVerified'
                        }
                      >
                        {userInfo?.email}
                      </a>
                      {userInfo?.emailVerified === 'false' ? (
                        <InfoIcon className="info-ic" />
                      ) : (
                        <CheckCircleIcon className="check-ic" />
                      )}
                    </div>
                  </li>
                  <li>
                    <div className="title">Birthday: </div>
                    <div className="text">
                      {moment(userInfo?.dateOfBirth).format('dddd, DD-MM-YYYY')}
                    </div>
                  </li>
                  <li>
                    <div className="title">Address:</div>
                    <div className="text">{userInfo?.address}</div>
                  </li>
                </ul>
              </Grid>
              <Grid
                item
                xs={0.5}
                className="edit-profile"
                onClick={() => setIsShowEdit(true)}
              >
                <a href="#">
                  <EditIcon />
                </a>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="edit"></div>
      </Wrapper>
    </SidebarLayout>
  );
};

export default memo(Profile);
