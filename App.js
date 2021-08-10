import 'react-native-gesture-handler';
import React from 'react';
import {Root} from 'native-base';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {PermissionsProvider} from './src/context/PermissionsContex';

import Navigator from './src/navigator/Navigator';

const AppState = ({children}) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

const App = () => {
  return (
    <>
      <Root>
        <StatusBar />
        <NavigationContainer>
          <AppState>
            <Navigator />
          </AppState>
        </NavigationContainer>
      </Root>
    </>
  );
};

export default App;
