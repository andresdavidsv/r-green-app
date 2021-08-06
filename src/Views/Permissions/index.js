import React, {useContext} from 'react';
import {Container, Button, Text, H1} from 'native-base';
//styles
import globalStyles from '../../styles/global';
import styles from './styles';
import {PermissionsContex} from '../../context/PermissionsContex';

const Permissions = () => {
  const {permissions, askLocationPermissions} = useContext(PermissionsContex);
  return (
    <Container style={[globalStyles.container, styles.container]}>
      <H1 style={globalStyles.title}>
        GPS is required to use this application
      </H1>
      <Button
        style={[globalStyles.button, styles.button]}
        square
        block
        onPress={askLocationPermissions}>
        <Text style={globalStyles.text}>Allow</Text>
      </Button>
      <Text> {JSON.stringify(permissions, null, 4)}</Text>
    </Container>
  );
};

export default Permissions;
