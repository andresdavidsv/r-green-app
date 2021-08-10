import React from 'react';
import {
  Container,
  Button,
  Text,
  H2,
  Content,
  List,
  ListItem,
  Left,
  Right,
} from 'native-base';
import {View} from 'react-native';
import Map from '../../components/Map';
//styles
import globalStyles from '../../styles/global';
import styles from './styles';

const Maps = () => {
  return (
    <Container style={[globalStyles.container, styles.container]}>
      {/* <Button style={[globalStyles.button, styles.button]} square block>
        <Text style={globalStyles.text}>Maps</Text>
      </Button> */}
      <View style={styles.container}>
        <Map />
      </View>
    </Container>
  );
};

export default Maps;
