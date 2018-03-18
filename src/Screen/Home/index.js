/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import Video from "react-native-video";
import { NavigationScreenProps } from "react-navigation";
import { Button, Text } from "native-base";

export default class extends React.Component<NavigationScreenProps> {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
          <VideoBackground onPress={()=>{
            this.props.navigation.navigate("Login");
          }} />
        );
    }
};

const VideoBackground = ({ onPress }) => (
  <View style={styles.background}>
    <StatusBar hidden={true} />
    <View style={styles.logo}>
      <Image source={require("../../../assets/images/cropped-logo.png")} />
      <Button
        block
        style={{ marginTop: 100, backgroundColor: "#643796" }}
        onPress={onPress}
      >
        <Text>Entrar</Text>
      </Button>
    </View>
    <Video
      source={require("../../../assets/videos/homevideo.mp4")}
      style={styles.backgroundVideo}
      resizeMode="cover"
      repeat={true}
      key="video2"
    />
  </View>
);

// Later on in your styles..
var styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 0,
    justifyContent: "center"
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1
  },
  logo: {
      zIndex: 2,
      alignSelf: "center",
      justifyContent: "space-between",
  }
});
