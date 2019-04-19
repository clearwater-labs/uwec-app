//Clearwater Labs 2019
import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class Laundry extends Component{
  static navigationOptions = {
    title: 'Laundry Notifier',
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text>Hello</Text>
   </View>
    )
  }
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },

  });

export default Laundry;
