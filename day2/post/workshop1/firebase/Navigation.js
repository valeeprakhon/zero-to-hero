import * as React from 'react';
import { 
    Text,
    View,
 } from 'react-native';  

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation,useRoute } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Login from './Login'
import Registration from './Registration'
import Edit from './Edit'
import Room from './Room'
import Splash from './Splash'
import Forget from './Forget';

import configureStore from './Store'
import {Provider} from 'react-redux'


function SplashScreen() {
    const navigation = useNavigation();
    return (
      <Splash navigation={navigation}/>
    );
}

function RoomScreen() {
    const navigation = useNavigation();
    return (
      <Room navigation={navigation}/>
    );
}



function EditScreen() {
    const navigation = useNavigation();
    return (
      <Edit navigation={navigation}/>
    );
}

function RegistrationScreen() {
    const navigation = useNavigation();
    return (
      <Registration navigation={navigation}/>
    );
}

function LoginScreen() {
    const navigation = useNavigation();
    return (
      <Login navigation={navigation}/>
    );
}

function ForgetScreen() {
    const navigation = useNavigation();
    return (
      <Forget navigation={navigation}/>
    );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
      <Tab.Navigator 
         tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
        <Tab.Screen name="room" component={RoomScreen} options={{
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="wechat" size={24} color={color} />
            ),
          }} />
        <Tab.Screen name="edit" component={EditScreen} options={{
            tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="user-edit" size={24} color={color} />
            ),
          }}/>
      </Tab.Navigator>
    );
}

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>

        <Stack.Screen name="splash" 
          component={SplashScreen} 
          options={{ headerShown: false }}/>


         <Stack.Screen name="login" 
          component={LoginScreen} 
          options={{ headerShown: false }}/>

        <Stack.Screen name="registration" 
          component={RegistrationScreen} 
          options={{ headerShown: false }}/>


        <Stack.Screen name="forget" 
          component={ForgetScreen} 
          options={{ headerShown: false }}/>


        <Stack.Screen name="tab" 
            component={MyTabs}
            options={{ headerShown: false }}/>

    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <Provider store={configureStore}>
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    </Provider>

  );
}
