
import React, {Component} from 'react';  
import { 
    Text, 
    View,
    StyleSheet,
    Image,
    TouchableOpacity
 } from 'react-native';  
import Constants from 'expo-constants';
import Headernew from './Headernew';


export default class Workshop3_2 extends Component { 
  constructor(props){
     super(props)
    
  } 



  render(){
    return(
        <View style={styles.container}>
            <Headernew text={'Change Image'}/>
            <Image 
                source={{uri:'https://sv1.picz.in.th/images/2020/08/02/E9qb0Z.th.png'}} 
                style={styles.image}/>

            <TouchableOpacity style={styles.button}>
                <Text style={{fontSize:20}}>Change</Text>
            </TouchableOpacity>

        </View>
    );
  }
} 
const styles = StyleSheet.create({
   container:{
        flex: 1,
   },
   image:{
    flex: 1,
    margin:8
   },
   button: {
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    height: 50,
    margin:8
  }
});