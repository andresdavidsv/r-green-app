import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

export const useLocation = () => {
  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState({
    longitude: 0,
    latitude: 0,
  });
  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({coords}) => {
        setInitialPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        setHasLocation(true);
      },
      err => console.log(err),
    );
  }, []);
  return {
    hasLocation,
    initialPosition,
  };
};
