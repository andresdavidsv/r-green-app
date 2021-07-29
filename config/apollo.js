import {ApolloClient, InMemoryCache} from '@apollo/client';
import {Platform} from 'react-native';

const uri =
  Platform.OS === 'ios'
    ? 'http://localhost:3003/graphql'
    : 'http://10.0.2.2:3003/graphql';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri,
});

export default client;
