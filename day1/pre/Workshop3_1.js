
import React, {Component} from 'react';  
import { 
    Text, 
    View,
    StyleSheet,
    TextInput,
    Button
 } from 'react-native';  
import Constants from 'expo-constants';


export default class Workshop3_1 extends Component { 
  constructor(props){
     super(props)
  } 


  render(){
    return(
        <View style={styles.container}>
            <View style={styles.subContainer} >
                <Text style={styles.text}>Result:</Text>

                <TextInput style={styles.textInput}
                    placeholder={"Number 1"}
                    />

                <TextInput style={styles.textInput}
                    placeholder={"Number 2"}
                    />

                <Button 
                    title="summation"/>
            </View>
            
        </View>
    );
  }
} 
const styles = StyleSheet.create({
   container:{
        flex: 1,
   },
   subContainer:{
        padding: 8
   },
   text:{
    fontSize:20,
    marginBottom:8,
   },
   textInput:{
    height:50,
    borderWidth:1,
    borderColor:"gray",
    marginBottom:8,
    paddingLeft:8
   }
});