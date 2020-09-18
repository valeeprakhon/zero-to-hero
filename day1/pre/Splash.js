//Splash.js
import React, { Component } from 'react';
import {
  View,StyleSheet,Text,ImageBackground ,Image
} from 'react-native';

export default class Splash extends Component {
  constructor(props){
    super(props);
    
  }
  
  componentDidMount() {
        setTimeout(() => {
            
        }, 2500)
        
    }

  render(props) {
    const { navigation } = this.props;
    return (

        <ImageBackground
            style={styles.imageBackground}
            source={{uri:'https://sv1.picz.in.th/images/2020/07/28/EYFj0b.jpg'}}
            blurRadius={1}>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Image style={styles.image}
                source={{uri:'https://sv1.picz.in.th/images/2020/07/28/Ez0iOl.png'}}/>

           <Text style={{color:"white", fontSize:32}}>React Native</Text>

        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
   imageBackground:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  image: {
    width: 150,
    height: 150,
  },
  
});