
import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  // uri: 'http://172.20.1.194:8080/graphql'
  uri: 'http://192.168.29.137:8080/graphql'
});

const client = new ApolloClient({
  networkInterface
});

export default client;