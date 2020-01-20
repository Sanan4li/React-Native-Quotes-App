import React, { Component } from 'react';
import {View, StyleSheet, Text, Image, Clipboard, TouchableOpacity,PermissionsAndroid } from "react-native";
import MyHeaderButton from "./MyHeaderButton";
import CameraRoll from "@react-native-community/cameraroll";
import MyHeaderButtonNew from "./MyHeaderButtonNew";
import { HeaderButtons , Item } from "react-navigation-header-buttons";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from "react-native-vector-icons/Fontisto";
import ViewShot from "react-native-view-shot";
import Toast, {DURATION} from 'react-native-easy-toast';
import Share from 'react-native-share';


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
        image :null
      }

      getPermissions = async ()=>{
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: "Cool Photo App Camera Permission",
              message:
                "Cool Photo App needs access to your camera " +
                "so you can take awesome pictures.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            this.refs.viewShot.capture().then(uri => {
              console.log("do something with ", uri);
            
              CameraRoll.saveToCameraRoll(uri);
              this.refs.toast.show('Saved to Gallery');
             
            });
          } else {
            this.refs.toast.show('Saving Failed! Storage Permission Required.');
          }
        } catch (err) {
          console.warn(err);
        }
      }



      componentDidMount () {
       
        

        
      } 

      ShareNow = ()=>{
        options = {
            title: 'Share via',
            message: this.state.image,
         //   url: 'some share url',
          //  filename: this.state.image
            // social: Share.Social.WHATSAPP,
            // whatsAppNumber: "9199999999",  // country code + phone number(currently only works on Android)
            // filename: 'test' , // only for base64 file in Android 
        };
        Share.open(options)
        .then((res) => { console.log(res) })
        .catch((err) => { err && console.log(err); });
      }

      copyText = ()=>{
        () => Clipboard.setString(data.item.body);
        this.refs.toast.show('Copied to Clipboard!');
    }
    saveImage = ()=>{
      console.log(this.state.image)
      CameraRoll.saveToCameraRoll(this.state.image);
      this.refs.toast.show('Saved to Gallery');
  }
    render() {
        return (

           <View style={{backgroundColor:"#1a1a1a", flex:1}}>
                
              <View style={{ height:"60%"}}>
              <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
       
                 <Image source={require("../assets/images/quotesIcon.png")} style={{width:50, height:50}} />
                <Text style={{color:"white",fontFamily:"KulimPark-Light", fontSize:22, paddingHorizontal:20}} numberOfLines={8}>
                The world is in greater peril from those who tolerate or encourage evil than from those who actually commit it.
                </Text>
                <View style={{alignItems:"flex-end", marginRight:10, paddingBottom:10}}>
                    <Text style={{color:"#66ff66", paddingRight:10, fontSize:18, paddingBottom:10}}>
                        ~Albert Einstien
                    </Text>
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
              <TouchableOpacity style={styles.button} onPress={this.ShareNow}>
              <View style={{ width:"50%"}}>
                <Text style={styles.buttonText}> Share Options</Text>
                </View>
                <View style={{ width:"20%",}}>
                <Icon name="share" color="white"size={25} style={{alignSelf:"center"}}/>
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}  onPress={this.copyText }>
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
                    fadeInDuration={550}
                    fadeOutDuration={500}
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
    }
});
export default QuoteDetailScreen;
