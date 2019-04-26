/**
 * @format
 */

import AppFrontPage from './AppFrontPage';
import { name as appName } from './app.json';
import { AppRegistry } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import createStackNavigator from 'react-native-custom-components';
const client = new ApolloClient();
const App = () => (
  <ApolloProvider client={client}>
    <AppFrontPage />
  </ApolloProvider>
);
AppRegistry.registerComponent(appName, () => App);
