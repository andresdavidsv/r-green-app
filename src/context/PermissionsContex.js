import React, {createContext, useState, useEffect} from 'react';
import {AppState, Platform} from 'react-native';
import {
  PermissionStatus,
  PERMISSIONS,
  request,
  check,
  openSettings,
} from 'react-native-permissions';

export const permissionInitState = {
  locationStatus: 'unavailable',
};

export const PermissionsContex = createContext({});

export const PermissionsProvider = ({children}) => {
  const [permissions, setPermissions] = useState(permissionInitState);
  useEffect(() => {
    checkLocationPermissions();
    AppState.addEventListener('change', state => {
      if (state !== 'active') {
        return;
      }
      checkLocationPermissions();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const askLocationPermissions = async () => {
    let permissionStatus = PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    }
    if (permissionStatus === 'blocked') {
      openSettings();
    }
    setPermissions({...permissions, locationStatus: permissionStatus});
  };

  const checkLocationPermissions = async () => {
    let permissionStatus = PermissionStatus;
    if (Platform.OS === 'ios') {
      permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    setPermissions({...permissions, locationStatus: permissionStatus});
  };
  return (
    <PermissionsContex.Provider
      value={{
        permissions,
        askLocationPermissions,
        checkLocationPermissions,
      }}>
      {children}
    </PermissionsContex.Provider>
  );
};
