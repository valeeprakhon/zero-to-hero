
import React, {Component} from 'react';  
import { 
    Text, 
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image, Alert
 } from 'react-native';  
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

import Auth from "./firebase/Auth"

export default class Forget extends Component { 
  constructor(props){
     super(props)
     this.state = {
        email:null,
     };
  } 

  unsuccess=(error)=>{
    console.log(error)
  }

  success=()=>{
    Alert.alert("Wanning","The password reset link will send to your email");
  }

  onReset=()=>{
    Auth.recoverAccount(this.state.email,this.success,this.unsuccess);
  }

  onCancel=()=>{
      this.props.navigation.navigate('login');
  }

  render(){
    return(
        <ImageBackground 
            style={styles.background}
            source={{uri:'https://sv1.picz.in.th/images/2020/07/28/EYFj0b.jpg'}}>
            <View style={styles.container}>
                <View style={styles.login}>
                    <Image
                        style={styles.image}
                        source={{uri:'https://sv1.picz.in.th/images/2020/07/28/Ez0iOl.png'}}/>

                    <View style={styles.viewTextInput}>
                        <AntDesign name="lock" size={30} color="gray" />
                            <TextInput 
                                placeholder="Email" 
                                style={styles.textInput}
                                onChangeText={txt=>{this.setState({email:txt})}}/>
                    </View>

                    <TouchableOpacity style={styles.buttonLogin} onPress={this.onReset}>
                        <Text style={{fontSize:15}}>Reset password</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonLogin} onPress={this.onCancel}>
                        <Text style={{fontSize:15}}>Cancel</Text>
                    </TouchableOpacity>

            </View>
            </View>
        </ImageBackground>
    );
  }
} 
const styles = StyleSheet.create({
    background:{
        flex:1
    },
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:"center",
    },
    login:{
        paddingTop:20,
        paddingBottom:30,
        marginLeft:25,
        marginRight:25,
        marginBottom:25,
        backgroundColor:'white',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode:'contain',
        marginLeft:20,
        marginBottom:10
      },
      viewTextInput:{
        flexDirection:"row",
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:25,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        paddingStart:8,
        alignItems:"center"
    },
    textInput:{
        borderRadius:25,
        height: 50, 
        paddingStart:8,
        flex:1
    },
    buttonLogin: {
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        borderRadius:25,
        height: 50,
        marginBottom:10,
        marginLeft:20,
        marginRight:20
      },
    
    image: {
        width: 80,
        height: 80,
        resizeMode:'contain',
        marginLeft:20,
        marginBottom:10
      },
      buttonRegister: {
        alignItems: "flex-end",
      }
  });