import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#c70d3a" />
      <Routes />
    </>
  );
}
