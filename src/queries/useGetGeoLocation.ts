import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useGetGeoLocation = () => {
  const [geoLocation, setGeoLocation] = useState<any>();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log('Latitude is :', position.coords.latitude);
        console.log('Longitude is :', position.coords.longitude);
        setGeoLocation({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        if (error.code === 1) {
          toast.error('Please enable location to attendance!');
        } else {
          toast.error('Error Code = ' + error.code + ' - ' + error.message);
        }
      },
    );
  }, []);
  return geoLocation;
};
