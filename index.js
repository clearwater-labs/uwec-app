/**
 * @format
 */
import React from 'react-native';
import HomeScreen from './AppFrontPage.js';
import { name as appName } from './app.json';
import AppRegistry from 'react-native';
import ApolloClient from 'apollo-boost';
import ApolloProvider from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});
const App = () => (
  <ApolloProvider client={client}>
    <HomeScreen />
  </ApolloProvider>
);
AppRegistry.registerComponent(appName, () => App);
