import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import Loading from '../Views/Loading';

const Map = () => {
  const {hasLocation, initialPosition} = useLocation();
  if (!hasLocation) {
    return <Loading />;
  }
  return (
    <>
      
      <MapView
        provider={PROVIDER_GOOGLE}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        showsUserLocation
        region={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          // latitudeDelta: 0.015,
          // longitudeDelta: 0.0121,
        }}>
        {/* <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Marcador"
          description="Descripcion"
        /> */}
      </MapView>
    </>
  );
};

export default Map;
