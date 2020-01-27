import React, { Component } from 'react';
import {View, StyleSheet, Text, Image, Clipboard, ImageBackground, Modal, TouchableOpacity,PermissionsAndroid } from "react-native";
import MyHeaderButton from "./MyHeaderButton";
import CameraRoll from "@react-native-community/cameraroll";
import MyHeaderButtonNew from "./MyHeaderButtonNew";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from "react-native-vector-icons/Fontisto";
import ViewShot from "react-native-view-shot";
import Toast, {DURATION} from 'react-native-easy-toast';
import Share from 'react-native-share';
import Entypo from "react-native-vector-icons/Entypo";
import PushNotification from 'react-native-push-notification';
 class QuoteDetailScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
         headerRight : 
         <HeaderButtons HeaderButtonComponent={MyHeaderButtonNew}>
          <Item title="Favourtie" iconName="heart" 
          onPress={()=>{
           console.log("Search Button Pressed")
          }}
          
           />
        </HeaderButtons>,
             
            
            
        };
      };
      state = {
        likeText : "Likes",
        likeColor:"white",
        image :null,
        modalVisible:false,
        currentQuote:null,
      }

      getPermissions = async ()=>{
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: "Needs Storage Permissions",
              message:
                "Quote App Needs Storage Permissions to Share Files.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            this.refs.viewShot.capture().then(uri => {
              console.log("Converted to Image.. Saving to Phone's Gallery", uri);
           
              CameraRoll.saveToCameraRoll(uri);
              this.refs.toast.show('Saved to Gallery');
              this.sendNotification();
            });
          } else {
            this.refs.toast.show('Saving Failed! Storage Permission Required.');
          }
        } catch (err) {
          console.warn(err);
        }
      }

      sendNotification() {
        PushNotification.localNotification({
          title: "Image Saved!", // (optional)
          message: "This Quote has been saved as Image in Your Gallery", // (required)
          playSound: false, // (optional) default: true
          soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
          number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
          repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
          actions: '["OK", "Thanks"]',  // (Android only) See the doc for notification actions to
          largeIcon: "icon", // (optional) default: "ic_launcher"
          smallIcon: "icon", 
        });
      };
      copyText = (quote)=>{
         Clipboard.setString(quote);
        this.refs.toast.show('Copied to Clipboard!');
    }
    saveImage = ()=>{
      console.log(this.state.image)
      CameraRoll.saveToCameraRoll(this.state.image);
      this.refs.toast.show('Saved to Gallery');
  }
  
    render() {
      let quote = this.props.navigation.getParam("body"); // 
        return (

           <View style={{backgroundColor:"#1a1a1a", flex:1}}>
                
              <View style={{ height:"60%"}}>
              <ViewShot ref="viewShot" options={{  format: "jpg" , quality: 0.9 }}>
              <View style={{marginTop:"5%", padding:10}}>
                 
                 <Image source={require("../assets/images/quotesIcon.png")} style={{width:50, height:50}} />
                <Text style={styles.quoteText} numberOfLines={8}>
                {quote}
                </Text>
                <View style={{alignItems:"flex-end", marginRight:10, paddingBottom:10}}>
                    <Text style={styles.author}>
                        ~Albert Einstien
                    </Text>
                </View>
                </View>
            </ViewShot>
                <View style={{flexDirection:"row", marginTop:5}}>
                   <Icon color="white" size={17} name="share-alt" style={{marginTop:4, marginLeft:20}}/>
                    <Text style={{color:"white", fontSize:16, marginLeft:10}}>123 Shared</Text>
                   <TouchableOpacity style={{flexDirection:"row"}}
                   onPress={
                       ()=>{ if(this.state.likeColor=="white"){
                        this.setState({
                            likeColor:"#ff1a75",
                            likeText:"Liked"
                        });
                       }
                       else{
                        this.setState({
                            likeColor:"white",
                            likeText:"Likes"
                        });
                       }
                           
                       }
                   }
                   >
                   <Fontisto color={this.state.likeColor} size={17} name="heart" style={{marginTop:4, marginLeft:20}}/>
                 <Text style={{color:this.state.likeColor, fontSize:16, marginLeft:10}}>13 {this.state.likeText}</Text>
                   </TouchableOpacity>
                </View>
              </View>
              <View style={{ height:"40%", alignItems:"center"}}>
              <TouchableOpacity style={styles.button} onPress={
                ()=>{
                  this.props.navigation.navigate("Share", {body: quote});
                }
              }>
              <View style={{ width:"50%"}}>
                <Text style={styles.buttonText}> Share Options</Text>
                </View>
                <View style={{ width:"20%",}}>
                <Icon name="share" color="white"size={25} style={{alignSelf:"center"}}/>
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}  onPress={()=>{
                this.copyText(quote);
              } }>
              <View style={{ width:"50%"}}>
                <Text style={styles.buttonText}> Copy as Text</Text>
                </View>
                <View style={{ width:"20%"}}>
                <Icon name="copy" color="white"size={25} style={{alignSelf:"center"}}/>
                </View>
               
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={
                this.getPermissions
              }>
              <View style={{ width:"50%"}}>
               <Text style={styles.buttonText}>  Download Image </Text>
               </View>
               <View style={{ width:"20%"}}>
               <Icon name="download" color="white"size={25} style={{alignSelf:"center"}}/>
               </View>
              </TouchableOpacity>
              </View>

             


              <Toast ref="toast"  style={{backgroundColor:'#38b750'}}
                    position="top"
                    positionValue={150}
                    fadeInDuration={850}
                    fadeOutDuration={850}
                    opacity={1}
                    textStyle={{color:'white'}} />
           </View>
        )
    }
}
const styles = StyleSheet.create({
    button : {
        width:"90%",
        height:"20%",
        backgroundColor:"#38b750",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:10,
        flexDirection:"row",
    },
    buttonText: {
        color:"white",
        alignContent:"center",
        fontSize:20,
        alignSelf:"center"
    },
  quoteText:{
    color:"white",
    fontFamily:"KulimPark-Light", 
    fontSize:22, 
    paddingHorizontal:20,
  },
  author : {
    color:"#66ff66", 
    paddingRight:10, 
    fontSize:18, 
    paddingBottom:10
  }
});
export default QuoteDetailScreen;
