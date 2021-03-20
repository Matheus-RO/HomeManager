import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppList from '../pages/ShoppList';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="ShoppList" component={ShoppList} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;
