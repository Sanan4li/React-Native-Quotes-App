import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';

class  SplashScreen extends React.Component {
    state = {
        quotes:[
            {id:"1", body:"Change the world by being yourself."},
            {id:"2", body:"Every moment is a fresh beginning."},
            {id:"3", body:"Nothing works until you do."},
            {id:"4", body:"Everything you can imagine is real."},
            {id:"5", body:"Whatever you do, do it well."},
            {id:"6", body:"What we think, we become."},
            {id:"7", body:"All limitations are self-imposed. "},
            {id:"8", body:"Happiness depends upon ourselves."},
            {id:"9", body:"Nothing will work unless you do."},
            {id:"10", body:"Be the best version of you."},
        ]
    }
  componentDidMount = ()=>{

  }
  render(){
      let index = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    return (
        <View style={styles.main}>
           <View style={{marginTop:"50%", padding:10}}>
                 
                 <Image source={require("../assets/images/quotesIcon.png")} style={{width:50, height:50}} />
                <Text style={styles.quoteText} numberOfLines={8}>
                {this.state.quotes[index].body}
                </Text>
               
                </View>
            <WaveIndicator color='#66ff66' size={100} />
        </View>
     )
  }
 
  }
  const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#1a1a1a",
        //justifyContent:"center",
        //alignItems:"center",
    },
    quoteText:{
        alignSelf:"center",
        color:"white",
        fontFamily:"KulimPark-Light", 
        fontSize:18, 
        paddingHorizontal:20,
      },
  });

export default SplashScreen;

















