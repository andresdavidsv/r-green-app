import 'react-native-gesture-handler';
import React from 'react';
import {Root} from 'native-base';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

//Componentes
import Login from './src/Views/Login';
import SignUp from './src/Views/SignUp';

const App = () => {
  return (
    <>
      {/* <Root> */}
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Login', headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: 'Sign Up'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </Root> */}
    </>
  );
};

export default App;
