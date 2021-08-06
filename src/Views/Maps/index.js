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
//styles
import globalStyles from '../../styles/global';
import styles from './styles';

const Maps = () => {
  return (
    <Container style={[globalStyles.container, styles.container]}>
      <Button style={[globalStyles.button, styles.button]} square block>
        <Text style={globalStyles.text}>Maps</Text>
      </Button>
    </Container>
  );
};

export default Maps;
