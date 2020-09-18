import * as React from 'react';
import { 
    Text,
    View,
 } from 'react-native';  

import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import Show1 from './Show1'
import Show2 from './Show2'
import Show3 from './Show3'
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

const Drawer = createDrawerNavigator();
function MyDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Show1" component={Show1Screen} />
        <Drawer.Screen name="Show2" component={Show2Screen} />
        <Drawer.Screen name="Show3" component={Show3Screen} />
      </Drawer.Navigator>
    );
  }

export default function Workshop5_2() {
  return (
    <NavigationContainer>
        <MyDrawer />
    </NavigationContainer>
  );
}
