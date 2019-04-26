//Clearwater Labs 2019
import React, { Component } from 'react';
import { View, StyleSheet, Text, RCTNativeAppEventEmitter } from 'react-native';
import LaundryQuery from './LaundryQuery';

class Laundry extends Component {
  static navigationOptions = {
    title: 'Laundry Notifier'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Plz put information in me sully </Text>
        <LaundryQuery />
      </View>
    );
  }
}

// {({loading, error, data}) => {
//   if (loading) return 'Loading'
//   if (errror) return 'Error: 404 Dick not found'
//   return (
//     <select name="laundryRoom" onChange={onLaundryRoomSelected}>
//       {data.laundryRooms.map(laundryRoom => (
//         <option key={laundryRoom.id} value={laundryRoom.totalNumWashers}>
//           {laundryRoom.totalNumWashers}
//         </option>
//       ))}
//     </select>
//   );
// }}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default Laundry;
