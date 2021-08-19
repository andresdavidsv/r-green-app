import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {Platform} from 'react-native';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = createHttpLink({
  uri: 'https://r-green-api.herokuapp.com',
  // uri: 'https://r-green-api.vercel.app/graphql',
  // Platform.OS === 'ios'
  //   ? 'http://localhost:3003/graphql'
  //   : 'http://10.0.2.2:3003/graphql',
});

const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
