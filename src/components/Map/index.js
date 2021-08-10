import React, {useRef, useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import {useLocation} from '../../hooks/useLocation';
import Loading from '../../Views/Loading';
import Fab from '../Fab';

//Styles
import styles from './styles';

const Map = () => {
  const [showPolyline, setShowPolyline] = useState(true);
  const {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
    routeLines,
  } = useLocation();
  const mapViewRef = useRef();
  const following = useRef(true);

  useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowUserLocation;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (!following.current) {
      return;
    }
    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  }, [userLocation]);

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();
    following.current = true;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  };

  if (!hasLocation) {
    return <Loading />;
  }
  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el)}
        provider={PROVIDER_GOOGLE}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        showsUserLocation
        region={{
          latitude: initialPosition.latitude,
          longitude: initialPosition.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={() => (following.current = false)}>
        {showPolyline && (
          <Polyline
            coordinates={routeLines}
            strokeColor="black"
            strokeWidth={3}
          />
        )}
        {/* <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Marcador"
          description="Descripcion"
        /> */}
      </MapView>
      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={styles.centerButton}
      />
      <Fab
        iconName="brush-outline"
        onPress={() => setShowPolyline(!showPolyline)}
        style={styles.brushButton}
      />
    </>
  );
};

export default Map;
