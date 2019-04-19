/**
 * Clearwater Labs 2019
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, { Component } from "react";
import {StyleSheet,Text,View,Image, TouchableOpacity } from "react-native";
import Laundry from './src/LaundryNotifier/Laundry.js';
import styles from './StyleSheet'


class HomeScreen extends Component {

  constructor(props){
    super(props)
  }
  render() {
    //const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>UWEC</Text>
        <View style={styles.laundryView}>
          <Text>Laundry Notifier</Text>
          <TouchableOpacity               
            onPress={()=>this.props.navigation.navigate("Laundry")}> 
            <Image
              style={styles.laundryImage}
              source={require("./src/assets/laundry.png")}
            />
           </TouchableOpacity> 
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


const HomePageNavigator = createStackNavigator ({
  Home: {
    screen: HomeScreen,
  },
  Laundry: {
    screen: Laundry,
  }
});

const App = createAppContainer(HomePageNavigator);
export default App;
