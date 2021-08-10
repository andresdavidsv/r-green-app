import React from 'react';
import {Container, Button, Text} from 'native-base';
//styles
import globalStyles from '../../styles/global';
import styles from './styles';
import {ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <Container style={[globalStyles.container, styles.container]}>
      <ActivityIndicator size="large" color="white" />
    </Container>
  );
};

export default Loading;
