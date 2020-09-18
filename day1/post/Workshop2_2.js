
import React, {Component} from 'react';  
import { 
    Text, 
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
 } from 'react-native';  
import Constants from 'expo-constants';
import Header from './Header';
import * as data from './data.json'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default class Workshop2_2 extends Component { 
  constructor(props){
     super(props)
  } 

  renderItem=({item})=>{
    return(
    <View style={{padding:8}}>
        <Card>
            <Card.Title 
                title="Toyota" subtitle="Toyota Thailand Corperation" 
                left={()=>(<Avatar.Image size={50} source={{uri:item.url}}/>)} />
            <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph>{"ราคา: "+item.price}</Paragraph>
            </Card.Content>
            <Card.Cover resizeMode={"stretch"} style={{height:300}} source={{ uri: item.url}} />
            <Card.Content>
                <Paragraph>{"รายละเอียดเพิ่มเติม \n"+item.description}</Paragraph>
            </Card.Content>
        </Card>
    </View>

    );
  }


  render(){
    return(
        <View style={styles.container}>
            <Header/>
            <FlatList
                data={data.car}
                renderItem={this.renderItem}/>
            
        </View>
    );
  }
} 
const styles = StyleSheet.create({
   container:{
        flex: 1,
   }
});