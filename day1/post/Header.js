import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const Header = () =>{
    return(
        <View style={styles.container}> 
            <Text style={styles.textStyle}>Show Item</Text>
        </View>
        );
    };

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F8F8F8',
        justifyContent :'center',
        alignItems:'center',
        height:90,
        shadowColor:'#000000',
        shadowOffset:{width:0 ,height:2},
        shadowOpacity:0.2,
        paddingTop: Constants.statusBarHeight,

    },
    textStyle :{
        fontSize : 25
    }
  });

 
export default Header;