//Home.js
import React, { Component } from 'react';
import {
  View,Text,Button, StyleSheet 
} from 'react-native';

export default class Show1 extends Component {
  constructor(props){
    super(props);
     this.state = {
 
    };
    
  }
  render(props) {
    const { navigation } = this.props;
    return (
     <View style={styles.container}>
        <Text style={{fontSize:30}}>Show1 Screen</Text>
        <Button title="Go to Show2 Screen" onPress={()=>navigation.navigate('Show2')} />
        
    </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});