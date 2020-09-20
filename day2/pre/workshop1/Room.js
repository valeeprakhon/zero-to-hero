import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,

} from 'react-native';

import { connect } from 'react-redux';

export default class Room extends Component {
  constructor(props){
    super(props);
     this.state = {
    };
  }
  
  componentDidMount() {

  }

  render(props) {
    const { navigation } = this.props;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <View style={styles.content}>

            <TextInput 
              placeholder="User Name" 
              style={styles.textInput} 
              onChangeText={txt=>{this.setState({username:txt})}}/>

            <TextInput 
              placeholder="Email" 
              style={styles.textInput} 
              onChangeText={txt=>{this.setState({room:txt})}}/>

          </View>


        </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonLogin: {
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius:25,
    height: 50,
    marginBottom:8
  },
  textInput:{
    borderRadius:25,
    height: 50, 
    borderColor: 'gray',
    borderWidth: 1,
    paddingStart:20,
    marginBottom:8
  },
  content:{
    padding:16,
    margin:16,
    width:"90%"
  }
  
});

