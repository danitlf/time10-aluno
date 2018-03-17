/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import Navigation from './Navigation';
import { Provider } from 'mobx-react';
import { Store } from './Store';

export default () => (
  <Provider store={Store}>
    <Navigation />
  </Provider>
);