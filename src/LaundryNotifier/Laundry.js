//Clearwater Labs 2019
import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import {ApolloClient} from "apollo-boost"
import {gql} from "graphql-tag"
import {Query} from "react-apollo" 

class Laundry extends Component{
  static navigationOptions = {
    title: 'Laundry Notifier',
  }
  render() {
    const {navigate} = this.props.navigation;
    return (

      <View style={styles.container}>
      <Text>Plz put information in me sully </Text>
   </View>
    )
  }
};
const client = new ApolloClient ({
  uri: 'http://localhost:4000'
})

const GET_LAUNDRY_DATA = gql`
  query laundryRooms {
    id
    totalNumWashers
    totalNumDryers
    washersAvailable
    dryersAvailable
  }
`
const LaundryRoom = ({onLaundryRoomSelected}) => (
  <Query query={GET_LAUNDRY_DATA}>
    {({loading, error, data}) => {
      if (loading) return 'Loading'
      if (errror) return 'Error: 404 Dick not found'
      return (
        <select name="laundryRoom" onChange={onLaundryRoomSelected}>
          {data.laundryRooms.map(laundryRoom => (
            <option key={laundryRoom.id} value={laundryRoom.totalNumWashers}>
              {laundryRoom.totalNumWashers}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
);

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },

  });

export default Laundry;
