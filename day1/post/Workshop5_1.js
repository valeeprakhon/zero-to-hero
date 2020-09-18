import * as React from 'react';
import { 
    Text,
    View,
 } from 'react-native';  

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Show1 from './Show1'
import Show2 from './Show2'
import Show3 from './Show3'

function Show1Screen() {
    const navigation = useNavigation();
    return (
      <Show1 navigation={navigation}/>
    );
}

function Show2Screen() {
    const navigation = useNavigation();
    return (
      <Show2 navigation={navigation}/>
    );
}

function Show3Screen() {
    const navigation = useNavigation();
    return (
      <Show3 navigation={navigation}/>
    );
}

const Stack = createStackNavigator();
function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:true}} name="Show1" component={Show1Screen} />
        <Stack.Screen name="Show2" component={Show2Screen} />
        <Stack.Screen name="Show3" component={Show3Screen} />
      </Stack.Navigator>
    );
  }

export default function Workshop5_1() {
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  );
}
