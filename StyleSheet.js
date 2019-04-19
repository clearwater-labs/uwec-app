import React from 'react';
import {StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      marginTop: "5%"
    },
    // title: {
    //   fontSize: 25,
    //   textAlign: "left",
    //   margin: 20,
    //   marginTop: 40
    // },
    laundryImage: {
      height: "100%",
      //width: "100%",
      borderRadius: 10,
      resizeMode: "center"
    },
    laundryView: {
      alignItems: "center",
      justifyContent: "center",
      height: "60%", //30
      width: "100%",
      paddingBottom: "5%"
    },
    newsAndCarText: {
      flex: 1,
      flexDirection: "row",
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
      alignItems: "flex-end" ,
      //backgroundColor:"red"
    },
    newsImage: {
      height: "100%",
      //width: "40%",
      borderRadius: 10,
      resizeMode: "contain",
      left: 0
      //position: "relative"

    },
    cardImage: {
      height: "100%",
      width: "40%",
      borderRadius: 10
    }
  });
  