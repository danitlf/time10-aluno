/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from "react-native";
import Camera from "react-native-camera";

export default class extends Component {
  static navigationOptions = {
    title: "Escaneie o QRCode da Aula",
    headerTintColor: "#643796"
  };
  
  render() {
    return <View style={styles.container}>
        <Camera ref={cam => {
            this.camera = cam;
          }} style={styles.preview} aspect={Camera.constants.Aspect.fill} barCodeTypes={["qr"]} onBarCodeRead={(data, bounds) => {
            alert(JSON.stringify(data));
          }}>
          <Image style={{ position: "absolute", top: 0, left: 0 }} source={require("../../../assets/images/qrcodeTarget.png")} />
          <Image style={{ position: "absolute", top: 0, right: 0, transform: [{ rotate: "90deg" }] }} source={require("../../../assets/images/qrcodeTarget.png")} />
          <Image style={{ position: "absolute", bottom: 0, left: 0, transform: [{ rotate: "270deg" }] }} source={require("../../../assets/images/qrcodeTarget.png")} />
          <Image style={{ position: "absolute", bottom: 0, right:0, transform: [{ rotate: '180deg'}] }} source={require("../../../assets/images/qrcodeTarget.png")} />
        </Camera>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
    padding: 10,
    margin: 40
  }
});
