
import React, {Component} from 'react';  
import { 
    Text, 
    View,
    StyleSheet,
    TextInput,
    Button
 } from 'react-native';  
import Constants from 'expo-constants';
import Headernew from './Headernew';


export default class Workshop3_1 extends Component { 
  constructor(props){
     super(props)
     this.state={
         number1:null,
         number2:null,
         result:null,
     }
  } 

  onChangeNumber1=(txt)=>{
    this.setState({number1:txt});
  }

  onSummation=()=>{
    var summed = (Number)(this.state.number1)+(Number)(this.state.number2);
    this.setState({result:summed});
  }

  render(){
    return(
        <View style={styles.container}>
            <Headernew text={'Summation'}/>
            <View style={styles.subContainer} >
    <Text style={styles.text}>Result : {this.state.result}</Text>

                <TextInput style={styles.textInput}
                    placeholder={"Number 1"}
                    onChangeText={txt=>{this.onChangeNumber1(txt)}}
                />

                <TextInput style={styles.textInput}
                    placeholder={"Number 2"}
                    onChangeText={txt=>{this.setState({number2:txt})}}
                />

                <Button 
                    onPress={this.onSummation}
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