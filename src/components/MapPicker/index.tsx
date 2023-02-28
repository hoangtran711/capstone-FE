import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { Stack } from '@mui/system';
import React, { memo, useState } from 'react';
import MapPicker from 'react-google-map-picker';

interface IMapPickerAlertProps {
  submit: (location: any) => void;
}

const MapPickerAlertComponent = ({ submit }: IMapPickerAlertProps) => {
  const [open, setOpen] = useState(false);

  const [location, setLocation] = useState({
    lat: 10.84734,
    lng: 106.837037,
  });
  const [zoom, setZoom] = useState(15);

  function handleChangeLocation(lat: any, lng: any) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom: number) {
    setZoom(newZoom);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Pick Location
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Pick location'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Stack direction="column">
              <span>Lattitude: {location.lat}</span>
              <span>Longtitude: {location.lng}</span>
            </Stack>
          </DialogContentText>
          <MapPicker
            defaultLocation={{
              lat: 10.846825775345522,
              lng: 106.83831735650426,
            }}
            zoom={zoom}
            style={{ height: '400px', width: '500px' }}
            onChangeLocation={handleChangeLocation}
            onChangeZoom={handleChangeZoom}
            apiKey="AIzaSyC3yv93VlAx-ypGVwd8Ra1zdXv-DCAIGYA"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              submit(location);
              handleClose();
            }}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export const MapPickerAlert = memo(MapPickerAlertComponent);
