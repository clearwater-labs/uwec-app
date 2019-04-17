/**
 * Clearwater Labs 2019
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import LaundryNotifier from "./src/LaundryNotifier/LaundryNotifier.js";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>UWEC</Text>
        <View style={styles.laundryView}>
        <Text>Laundry Notifier</Text>
          <Image
            style={styles.laundryImage}
            source={require("./src/assets/laundry.png")}
          />
        </View>
        <View style={styles.newsAndCarText}>
          <Text style={styles.newsText}> Spectator</Text>
          <Text style={styles.BluGoldIdText}> BluGold ID</Text>
        </View>
        <View style={styles.newsAndCarView}>
          <Image
            style={styles.newsImage}
            source={require("./src/assets/news.jpg")}
          />
          <Image
            style={styles.cardImage}
            source={require("./src/assets/credit-card.jpg")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 25,
    textAlign: "left",
    margin: 20,
    marginTop: 40
  },
  laundryImage: {
    height: "100%",
    width: "90%",
    borderRadius: 10
  },
  laundryView: {
    alignItems: "center",
    justifyContent: "center",
    height: "50%", //30
    width: "100%",
    paddingBottom: "5%"
  },
  newsAndCarText: {
    flex: 1,
    flexDirection: "row",
    //backgroundColor: "red",
    justifyContent: "space-around",
    alignItems:"center"
  },
  newsText: {
    justifyContent: "flex-start"
  },
  BluGoldIdText: {
    justifyContent: "flex-start"
   
  },
  newsAndCarView: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end"  
  },
  newsImage: {
    height: "100%",
    width: "40%",
    borderRadius: 10
  },
  cardImage: {
    height: "100%",
    width: "40%",
    borderRadius: 10
  }
});
