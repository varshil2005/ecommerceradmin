import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import Drawer1 from './App/Drawer/Drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer1 />
    </NavigationContainer>

  )
}