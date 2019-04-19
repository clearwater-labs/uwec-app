import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class Spectator extends Component{
  static navigationOptions = {
    title: 'Spectator',
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Text> EXTRA EXTRA READ ABOUT IT </Text>
   </View>
    )
  }
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },

  });

export default Spectator;