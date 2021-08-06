import {ApolloClient, InMemoryCache} from '@apollo/client';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {setContext} from '@apollo/client/link/context';

const setAuthorizationLink = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};

const uri =
  Platform.OS === 'ios'
    ? 'http://localhost:3003/graphql'
    : 'http://10.0.2.2:3003/graphql';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri,
  headers: {
    authorization: setAuthorizationLink,
  },
});

export default client;
