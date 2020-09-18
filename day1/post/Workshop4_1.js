
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

    componentDidMount(){
        var items =[]
        initialArr.forEach(item=>{
            items.push(item);
        })
        this.setState({items:this.state.items.concat(items)})
    }

    
    onPress=()=>{
        this.setState({status:!this.state.status})
    }

    renderItem=({item})=>{
        return(
          <Item color={item.color} id={item.id} name={item.name}/>
        );
    }

    onAdd=()=>{
        let item = {
            name:"Added",
            id:"0",
            color:"green"
        }

        this.setState({items:this.state.items.concat(item)})
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

    let text;
    if(this.state.status==true){
        text = <Text style={styles.text1}> Okay </Text>
    }else{
        text = <Text style={styles.text2}> Not Okay </Text>
    }



    return(
        <View style={styles.container}>
            <Headernew text={'Javascript'}/>
            <View style={styles.subContainer} >
            {text}
            <Button title="Change" onPress={this.onPress}/>

            {this.state.isShow&&<Text style={styles.text1}> React Native </Text>}
            <Button title="Show Hide" onPress={()=>{this.setState({isShow:!this.state.isShow})}}/>

            <Button title="Add" onPress={this.onAdd}/>

            <FlatList
                data={this.state.items}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.renderSeparator}/>
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