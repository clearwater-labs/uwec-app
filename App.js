/**
 * Clearwater Labs 2019
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
import React, { Component } from "react";
import {StyleSheet,Text,View,Image, TouchableOpacity, TouchableHighlight } from "react-native";
import Laundry from './src/LaundryNotifier/Laundry.js';
import Spectator from './Spectator.js';
import styles from './StyleSheet'


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'UWEC',
    headerStyle: {
      //you can alter color here : D
    },
    // headerTintColor: '#fff',
    headerTitleStyle: {
      position: "absolute",
      left: 0

    },
  };

  render() {
    //const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
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
          <TouchableHighlight           
          onPress={()=>this.props.navigation.navigate("Spectator")}>   
          <Image
            style={styles.newsImage}
            source={require("./src/assets/news.jpg")}
          />
         </TouchableHighlight>  

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
  },
  Spectator: {
    screen: Spectator
  }
});

const App = createAppContainer(HomePageNavigator);
export default App;
