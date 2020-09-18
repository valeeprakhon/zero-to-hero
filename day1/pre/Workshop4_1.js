
import React, {Component} from 'react';  
import { 
    Text, 
    View,
    StyleSheet,
    Button,
    FlatList
 } from 'react-native';  
import Constants from 'expo-constants';
import Headernew from './Headernew';
import Item from './Item'


let initialArr = [{ id: 1, color: "blue",name: "text1"},{id: 2,color: "red",name: "text2"}];

export default class Workshop4_1 extends Component { 
  constructor(props){
     super(props)
        this.state = {
            status: true,
            isShow:true,
            txtStatus:"Login",
            items:[]
        };
    } 
 

    renderItem=({item})=>{
        return(
          <Item color={item.color} id={item.id} name={item.name}/>
        );
    }


    renderSeparator=()=>{
        return (
            <View
              style={{
                height: 1,
                backgroundColor: "#dddddd",
              }}
            />
        );
      }


  

  render(){




    return(
        <View style={styles.container}>
            <Headernew text={'Javascript'}/>
            <View style={styles.subContainer} >

                <Button title="Change"/>


                <Button title="Show Hide" />

                <Button title="Add" />

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
        padding: 8,
        flex: 1,
   },
   text1:{
    color:'red',
    fontWeight:"bold",
    fontSize:20,
    padding:8,
    alignSelf:"center"
  },
  text2:{
    fontWeight:"bold",
    fontSize:20,
    padding:8,
    alignSelf:"center"
  }

   
});