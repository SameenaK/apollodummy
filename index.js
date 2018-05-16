import { AppRegistry } from 'react-native';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
  // uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const Client = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>)
}

AppRegistry.registerComponent('apollo2', () => App);
