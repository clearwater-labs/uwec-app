/**
 * Clearwater Labs 2019
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import LaundryNotifier from "./src/LaundryNotifier/LaundryNotifier.js";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>UWEC</Text>
        <View style = {styles.laundryView}>
          <Image 
            style={styles.laundry}
            source={require("./src/assets/laundry.png")}
          />
        </View>
        <View style = {styles.newsView}>
          <Image 
            style={styles.news}
            source={require("./src/assets/news.jpg")}
          />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    margin: 20,
    marginTop: 40
  },
  laundry: {
    height: "60%",
    width: "90%"
  },
  laundryView: {
    alignItems: "center",
    backgroundColor: "red"
  },
  newsView: {
  },
  news: {
    height: "40%",
    width: "30%",
    paddingLeft: "30%"
  }

});
