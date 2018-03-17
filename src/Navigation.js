/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from "react";
import { StackNavigator } from 'react-navigation';
import { LoginScreen, HistoryScreen, MainScreen } from "./Screen";
import { observer, inject } from 'mobx-react';

const Navigation = StackNavigator({
  Home: {
    screen: inject("store")(observer(LoginScreen))
  },
  Main: {
    screen: inject("store")(observer(MainScreen))
  },
  History: {
    screen: inject("store")(observer(HistoryScreen))
  }
});

export default Navigation;