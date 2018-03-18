/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { PushNotificationIOS } from "react-native";
import Navigation from './Navigation';
import { Provider } from 'mobx-react';
import Store  from './Store';
const PushNotification = require("react-native-push-notification");

PushNotification

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function(token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification
    Store.willDisplayAvaliation = true;
    Store.main.isInClass = false;
    PushNotification.cancelAllLocalNotifications();

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

export default () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}