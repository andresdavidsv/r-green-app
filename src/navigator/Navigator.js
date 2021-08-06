import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Componentes
import Login from '../Views/Login';
import SignUp from '../Views/SignUp';
import UserMaterials from '../Views/UserMaterials';
import Maps from '../Views/Maps';
import Permissions from '../Views/Permissions';
import Loading from '../Views/Loading';
import {PermissionsContex} from '../context/PermissionsContex';

const Stack = createStackNavigator();

const Navigator = () => {
  const {permissions} = useContext(PermissionsContex);
  if (permissions.locationStatus === 'unavailable') {
    return <Loading />;
  }
  return (
    <Stack.Navigator>
      {permissions.locationStatus === 'granted' ? (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login', headerShown: false}}
        />
      ) : (
        <Stack.Screen name="Permissions" component={Permissions} />
      )}
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Sign Up'}}
      />
      <Stack.Screen
        name="UserMaterials"
        component={UserMaterials}
        options={{title: 'User Materials'}}
      />
      <Stack.Screen name="Maps" component={Maps} options={{title: 'Maps'}} />
    </Stack.Navigator>
  );
};

export default Navigator;
