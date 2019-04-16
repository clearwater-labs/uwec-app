//Clearwater Labs 2019
import React from "react";
import { View, StyleSheet, Image } from "react-native";

const laundryImage = props => {
    <View style={styles.container}>
        <Image 
        style={styles.laundry} 
        // source={require("/src/assets/laundry.png")} 
        />;
    </View>
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    laundry: {
      height: "50%",
      width: "90%",
      margin: 10
      //resizeMode: "contain"
    }
   
  });

export default laundryImage;
