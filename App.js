import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Main from './components/MainComponent';

export default class App extends React.Component {
  render(){
      return (
        <Main />
      );
  }
}

