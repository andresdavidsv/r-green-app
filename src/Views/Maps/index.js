import React from 'react';
import {Container} from 'native-base';
import {View} from 'react-native';
import Map from '../../components/Map';
//styles
import globalStyles from '../../styles/global';
import styles from './styles';

const Maps = () => {
  return (
    <Container style={[globalStyles.container, styles.container]}>
      <View style={styles.container}>
        <Map />
      </View>
    </Container>
  );
};

export default Maps;
