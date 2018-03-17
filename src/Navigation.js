/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import { StackNavigator } from 'react-navigation';
import { LoginScreen, HomeScreen, HistoryScreen, MainScreen, QRCodeScreen } from "./Screen";
import { observer, inject } from 'mobx-react';

const Navigation = StackNavigator({
  Home: {
    screen: inject("store")(observer(HomeScreen))
  },
  Login: {
    screen: inject("store")(observer(LoginScreen))
  },
  Main: {
    screen: inject("store")(observer(MainScreen))
  },
  History: {
    screen: inject("store")(observer(HistoryScreen))
  },
  QRCode: {
    screen: inject("store")(observer(QRCodeScreen))
  }
});

export default Navigation;