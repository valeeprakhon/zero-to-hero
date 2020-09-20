import * as React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {useNavigation} from '@react-navigation/native'

import Forget from './Forget'
import Splash from './Splash'
import Registration from './Registration'
import Edit from './Edit'
import Login from './Login'
import Room from './Room'
import Register from './Registration'

function SplashScreen(){
    const navigation = useNavigation();
    return(
        <Splash navigation={navigation}/>
    );
}

function LoginScreen(){
    const navigation = useNavigation();
    return(
        <Login navigation={navigation}/>
    );
}

function ForgetScreen(){
    const navigation = useNavigation();
    return(
        <Forget navigation={navigation}/>
    );
}

function RegistrationScreen(){
    const navigation = useNavigation();
    return(
        <Registration navigation={navigation}/>
    );
}

const Stack = createStackNavigator();
function MyStack(){
    return(

        <Stack.Navigator>
            <Stack.Screen name='splash' component={SplashScreen}/>
            <Stack.Screen name='login' component={LoginScreen}/>
            <Stack.Screen name='registration' component={RegistrationScreen}/>
            <Stack.Screen name='forget' component={ForgetScreen}/>
        </Stack.Navigator>
    );
}



export default function Navigation(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}
