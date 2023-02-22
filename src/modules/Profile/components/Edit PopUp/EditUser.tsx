import React from 'react';
import { Wrapper } from './EditUser.styled';
import { TextField } from '@mui/material';
import { toast } from 'react-toastify';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Grid } from '@mui/material';

import * as yup from 'yup';
// import { ImageUploader } from 'components/FileUploader';
// import { IDataInputRegister } from './interfaces/IDataInputRegister';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { IEditUser } from 'modules/Profile/IEditUser';
import { useEditUserInfo } from 'queries/useEmployee';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';

export const EditUser = ({
  setVisibility,
  userInfo,
  reload,
  setReload,
}: any) => {
  const onEdit = useEditUserInfo();
  console.log(userInfo);
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<IEditUser>({
    resolver: yupResolver(schema),
  });
  const [date, setDate] = React.useState(moment(userInfo?.dateOfBirth));
  const onSubmit = async () => {
    const payload = getValues();
    console.log(payload);

    try {
      await onEdit(payload).then((rs: any) => {
        if (rs) {
          toast.success('User info updated successfull');
          setReload(!reload);
          setVisibility(false);
        }
      });
    } catch (err: any) {
      toast.error(err?.message || err);
    }
  };
  return (
    <Wrapper>
      <div className="overlay" onClick={() => setVisibility(false)}></div>

      <div className="content">
        <div className="close" onClick={() => setVisibility(false)}>
          <CloseIcon className="ic" />
        </div>
        <form className="form">
          <span className="title">Change Information</span>
          {/* <span className="subtitle">Access to our dashboard</span> */}
          <Grid spacing={3} className="grid" container>
            {/* <Grid item xs={4}>
              <ImageUploader
              disablePreview={false}
              max={1}
              accepts={acpt}
              onDrop={onImageUploaderDrop}
            />
            </Grid> */}
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    className="text-field"
                    label="Email"
                    type="email"
                    {...register('email', { required: 'Email cannot empty' })}
                    error={!!errors?.email?.message}
                    defaultValue={userInfo?.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    className="text-field"
                    label="Username"
                    {...register('username', {
                      required: 'Username cannot empty',
                    })}
                    error={!!errors?.username?.message}
                    defaultValue={userInfo?.username}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    className="text-field"
                    label="Phone"
                    {...register('phoneNumber', {
                      required: 'Phone Number cannot empty',
                    })}
                    error={!!errors?.phoneNumber?.message}
                    defaultValue={userInfo?.phoneNumber}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                className="text-field"
                label="First Name"
                {...register('firstName', {
                  required: 'First Name cannot empty',
                })}
                error={!!errors?.firstName?.message}
                defaultValue={userInfo?.firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                className="text-field"
                label="Last Name"
                {...register('lastName', {
                  required: 'Last Name cannot empty',
                })}
                error={!!errors?.lastName?.message}
                defaultValue={userInfo?.lastName}
              />
            </Grid>

            {/* <Grid item xs={6}>
              <TextField
                fullWidth
                className="text-field"
                label="StudentId"
                {...register('studentId', {
                  required: 'Student ID cannot empty',
                })}
                error={!!errors?.studentId?.message}

              />
            </Grid> */}

            <Grid item xs={12}>
              <TextField
                fullWidth
                className="text-field"
                label="Major"
                {...register('major', {
                  required: 'Major cannot empty',
                })}
                error={!!errors?.major?.message}
                defaultValue={userInfo?.major}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                className="text-field"
                label="Address"
                type="email"
                {...register('address', {
                  required: 'Address cannot empty',
                })}
                error={!!errors?.address?.message}
                defaultValue={userInfo?.address}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date Of Birth"
                  value={date}
                  onChange={(newValue: any) => {
                    setValue('dateOfBirth', newValue);
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>

          <div className="authenticate-button" onClick={onSubmit}>
            Update
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
const schema = yup
  .object({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Password is required'),
    repeatpassword: yup.string().required('Repeat password is required'),
    // maxJoin: yup.number().positive().integer().required('Max join is required'),
  })
  .required();
