import * as React from 'react';
import { 
    Text,
    View,
 } from 'react-native';  

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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

const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
      <Tab.Navigator 
         tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
        <Tab.Screen name="Show1" component={Show1Screen} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="Show2" component={Show2Screen} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen name="Show3" component={Show3Screen} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}/>
      </Tab.Navigator>
    );
}

export default function Workshop5_3() {
  return (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer>
  );
}
