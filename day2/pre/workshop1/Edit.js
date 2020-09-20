
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
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default class Edit extends Component { 
  constructor(props){
     super(props)
     this.state={
         username:null,
         name:null,
         email:null,
         password:null,
         confirm:null

     }
  } 

  onSave=()=>{
    
    
  }

  onLogout=()=>{
   
  }

  unsuccess=(error)=>{
    
  }

  signOutSuccess=()=>{
    
  }

  onDelete=()=>{

    Alert.alert(
        "Wanning",
        "Do you want to delete your account?",
        [
          {
            text: "Cancel",
            onPress: () => {console.log("Cancel")},
            style: "cancel"
          },
          { text: "Delete", onPress: () => {this.props.navigation.navigate('login')} }
        ],
    );
  }
      

  render(){
    return(
            <View style={styles.container}>
                <View style={styles.login}>
                   
                    <View style={styles.viewTextInput}>
                        <TextInput
                            value = {this.state.username} 
                            placeholder="UserName" 
                            style={styles.textInput}
                            onChangeText={txt=>{this.setState({username:txt})}}/>
                    </View>

                    <View style={styles.viewTextInput}>
                        <TextInput 
                            value = {this.state.name}
                            placeholder="YourName" 
                            style={styles.textInput}
                            onChangeText={txt=>{this.setState({name:txt})}}/>
                    </View>

                    <View style={styles.viewTextInput}>
                        <TextInput
                            value = {this.state.email} 
                            placeholder="Email" 
                            style={styles.textInput}
                            onChangeText={txt=>{this.setState({email:txt})}}/>
                    </View>

                    <View style={styles.viewTextInput}>
                            <TextInput 
                                placeholder="Password" 
                                style={styles.textInput}
                                secureTextEntry={true}
                                onChangeText={txt=>{this.setState({password:txt})}}/>
                    
                    </View>

                    <View style={styles.viewTextInput}>
                            <TextInput 
                                placeholder="Confirm Password" 
                                style={styles.textInput}
                                secureTextEntry={true}
                                onChangeText={txt=>{this.setState({confirm:txt})}}/>
                    
                    </View>

                    <TouchableOpacity style={styles.buttonLogin} onPress={this.onSave}>
                        <Text style={{fontSize:15}}>Save</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonLogin} onPress={this.onLogout}>
                        <Text style={{fontSize:15}}>Logout</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonLogin} onPress={this.onDelete}>
                        <Text style={{fontSize:15}}>Delete</Text>
                    </TouchableOpacity>


            </View>
            </View>
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
        marginLeft:25,
        marginRight:25,
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
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        paddingStart:8,
        alignItems:"center",
        borderRadius:25
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
        height: 50,
        marginBottom:10,
        marginLeft:20,
        marginRight:20,
        borderRadius:25
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