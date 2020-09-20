import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList

} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

class Chat extends Component {
  constructor(props){
    super(props);
     this.state = {
       text:null,
       messages:[],
       test:null
    };

    const { route } = this.props;
    this.username = route.params.username;
    this.room = route.params.room;
    
  }

  listeningSuccess=async(doc)=>{
      
  }
  
  getSuccess=(querySnapshot)=>{
  
  }

  componentDidMount() {
 
  }



  sendSuccess=(docRef)=>{
     
  }

  unsuccess=(error)=>{
     
  }

  renderItem=({item})=>{
    return(
      <View>
        <Text> Text</Text>
      </View>
    );
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 8,
        }}
      />
    );
  };

  onSend=()=>{

  }

  render(props) {
    return (
        <View style={{ flex: 1,padding:8}}>
          <View style={styles.content}>
            <FlatList
              data={this.state.messages}
              renderItem={this.renderItem}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>

          <View style={styles.chatContent}>
             <TextInput 
                placeholder="Message" 
                style={styles.textInput} 
                onChangeText={txt=>{this.setState({text:txt})}}/>

              <TouchableOpacity 
                onPress={this.onSend}>
                <MaterialCommunityIcons name="send-circle" size={40} color="gray" />
              </TouchableOpacity>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput:{
    height: 50,
    flex:1, 
    borderColor: 'gray',
    paddingStart:20,
  },
  content:{
    flex:1,
    padding:8,
    marginBottom:50,
    width:"100%",
  },
  chatContent:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,
    borderColor:"gray"
  },
  icon:{
    width:40,
    height:40,
    borderRadius:20,
    backgroundColor:"red"
  },
  txtReceiver:{
    flexWrap:'wrap',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    borderWidth:1,
    padding:8,
    marginLeft:4,
    flexShrink:1,
    borderColor:"red"
  },
   txtSender:{
    flexWrap:'wrap',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomLeftRadius:20,
    borderWidth:1,
    padding:8,
    flexShrink:1,
    borderColor:"black"
  }
  
});


export default Chat;