/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';

import SearchResult from './src/screens/SearchResult';
import HomeScreen from './src/screens/HomeScreen'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SearchResult />

    </>
  );                                                  
};

export default App;
