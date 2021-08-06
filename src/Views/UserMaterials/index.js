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

const UserMaterials = () => {
  return (
    <Container style={[globalStyles.container, styles.container]}>
      <Button style={[globalStyles.button, styles.button]} square block>
        <Text style={globalStyles.text}>New Material</Text>
      </Button>
      <H2 style={globalStyles.subtitle}>Select Material</H2>
    </Container>
  );
};

export default UserMaterials;
