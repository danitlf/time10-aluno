/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import { View, StyleSheet, Image, StatusBar, PushNotificationIOS } from "react-native";
import Video from "react-native-video";
import { NavigationScreenProps } from "react-navigation";
import { Button, Text } from "native-base";
const PushNotification = require("react-native-push-notification");

PushNotification.localNotification({
  /* iOS and Android properties */
  title: "My Notification Title", // (optional)
  message: "My Notification Message", // (required)
  playSound: false, // (optional) default: true
  soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
  number: "10", // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
  repeatType: "day", // (Android only) Repeating interval. Could be one of `week`, `day`, `hour`, `minute, `time`. If specified as time, it should be accompanied by one more parameter 'repeatTime` which should the number of milliseconds between each interval
});

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function(token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification
    alert(JSON.stringify(notification));

    // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   */
  requestPermissions: true
});

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
